import { responses, wordCounts, wordLimits, totalBudget } from '../data/outline-responses'
import ReactMarkdown from 'react-markdown'

function Outline() {
  const questions = [
    {
      id: 'a_project_summary',
      title: 'A) Project Summary',
      question: 'In non-technical language, suitable for reviewers with a wide range of backgrounds and expertise.',
    },
    {
      id: 'b_research_questions',
      title: 'B) Research Questions',
      question: 'What research questions will your project answer?',
    },
    {
      id: 'c_case_for_importance',
      title: 'C) Case for Importance',
      question: 'Why is the project needed? How is it relevant to Nuffield Foundation\'s interests? What is distinctive and how will it build on previous research?',
    },
    {
      id: 'd_outcomes_and_influence',
      title: 'D) Outcomes and Influence',
      question: 'What type of impact do you expect? How will your project achieve this impact? Outline your dissemination and influencing strategy.',
    },
    {
      id: 'e_methods_approach_activities',
      title: 'E) Methods, Approach and Activities',
      question: 'What research methods will be used and what work will be undertaken? Demonstrate activities are feasible, rigorous, and required to answer the research questions.',
    },
    {
      id: 'f_research_engagement_team',
      title: 'F) Research and Engagement Team',
      question: 'Who will be working on the project? Include name, organisation, role, expertise, and FTE %. Who will work on dissemination? Will new staff be recruited?',
    },
    {
      id: 'g_budget',
      title: 'G) Budget',
      question: 'Budget table with cost categories (numbers only, no decimals or special characters)',
    },
    {
      id: 'h_bibliographic_references',
      title: 'H) Bibliographic References',
      question: 'References cited in the application, in author-date format (e.g. Harvard style)',
    }
  ]

  const totalWords = Object.entries(wordCounts)
    .filter(([key, _]) => wordLimits[key as keyof typeof wordLimits] !== null)
    .reduce((sum, [_, count]) => sum + count, 0)

  const totalLimit = Object.values(wordLimits)
    .filter(limit => limit !== null)
    .reduce((sum, limit) => sum + (limit as number), 0)

  const copyToClipboard = (text: string) => {
    // Strip all markdown formatting for plain text copy
    let plainText = text

    // Remove HTML comments
    plainText = plainText.replace(/<!--.*?-->/gs, '')

    // Remove bold/italic (multiple passes)
    for (let i = 0; i < 3; i++) {
      plainText = plainText.replace(/\*\*([^\*]+)\*\*/g, '$1')
      plainText = plainText.replace(/\*([^\*]+)\*/g, '$1')
    }

    // Remove headers
    plainText = plainText.replace(/^#+\s+/gm, '')

    // Remove checkboxes
    plainText = plainText.replace(/☑\s*/g, '')
    plainText = plainText.replace(/☐\s*/g, '')

    // Remove bullet/list markers
    plainText = plainText.replace(/^\s*[-•*]\s+/gm, '')
    plainText = plainText.replace(/^\s*\d+\.\s+/gm, '')

    // Remove inline code
    plainText = plainText.replace(/`([^`]+)`/g, '$1')

    // Remove any remaining asterisks
    plainText = plainText.replace(/\*\*/g, '')
    plainText = plainText.replace(/\*/g, '')

    // Clean whitespace
    plainText = plainText.replace(/\n\n\n+/g, '\n\n').trim()

    navigator.clipboard.writeText(plainText)
  }

  const getStatusEmoji = (key: string) => {
    const count = wordCounts[key as keyof typeof wordCounts]
    const limit = wordLimits[key as keyof typeof wordLimits]

    if (limit === null) return '📊'
    if (count === 0) return '❌'
    if (count <= limit) return '✅'
    return '⚠️'
  }

  return (
    <div className="content-section">
      <h1>Outline Application</h1>

      <div style={{
        background: '#f0fdf4',
        border: '2px solid #2ecc71',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <div>
            <strong style={{ fontSize: '1.1rem' }}>Deadline:</strong> October 6, 2025
          </div>
          <div>
            <strong style={{ fontSize: '1.1rem' }}>Total:</strong> {totalWords}/{totalLimit} words ({Math.round(totalWords/totalLimit*100)}%)
          </div>
        </div>
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'white',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ fontWeight: '600' }}>Total Budget:</span>
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#2ecc71', fontFamily: 'monospace' }}>
            £{totalBudget.toLocaleString()}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        {questions.map((q) => {
          const key = q.id as keyof typeof responses
          const response = responses[key]
          const wordCount = wordCounts[key]
          const wordLimit = wordLimits[key]
          const status = getStatusEmoji(key)

          return (
            <div
              key={q.id}
              style={{
                background: 'white',
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                borderLeft: '4px solid #3498db'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '1rem'
              }}>
                <h2 style={{ margin: 0, color: '#2c3e50', fontSize: '1.25rem' }}>
                  {q.title}
                </h2>
                <div style={{
                  background: wordLimit ? '#3498db' : '#95a5a6',
                  color: 'white',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  marginLeft: '1rem'
                }}>
                  {wordLimit ? `${wordCount}/${wordLimit} words ${status}` : 'Table'}
                </div>
              </div>

              <p style={{
                color: '#7f8c8d',
                marginBottom: '1rem',
                fontSize: '0.9rem',
                fontStyle: 'italic'
              }}>
                {q.question}
              </p>

              <div style={{
                background: '#f8f9fa',
                padding: '1rem',
                borderRadius: '4px',
                marginBottom: '1rem',
                fontSize: '0.95rem',
                lineHeight: '1.7'
              }}>
                {key === 'g_budget' ? (
                  <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                    {response}
                  </div>
                ) : (
                  <ReactMarkdown
                    components={{
                      p: ({node, ...props}) => <p style={{ marginBottom: '0.75rem' }} {...props} />,
                      ul: ({node, ...props}) => <ul style={{ marginLeft: '1.5rem', marginBottom: '0.75rem' }} {...props} />,
                      li: ({node, ...props}) => <li style={{ marginBottom: '0.25rem' }} {...props} />,
                      strong: ({node, ...props}) => <strong style={{ fontWeight: '600' }} {...props} />,
                    }}
                  >
                    {response}
                  </ReactMarkdown>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => copyToClipboard(response)}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}
                >
                  📋 Copy Response
                </button>
                <a
                  href={`https://github.com/PolicyEngine/nuffield-rda-2025/blob/main/docs/outline/responses/${q.id}.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#ecf0f1',
                    color: '#2c3e50',
                    border: 'none',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    display: 'inline-block'
                  }}
                >
                  ✏️ Edit on GitHub
                </a>
              </div>
            </div>
          )
        })}
      </div>

      {/* Reference materials */}
      <div style={{
        background: '#fff3cd',
        borderLeft: '4px solid #f59e0b',
        padding: '1rem',
        borderRadius: '4px'
      }}>
        <strong>📚 Reference Materials:</strong>
        <ul style={{ marginBottom: 0, marginTop: '0.5rem' }}>
          <li>
            <a href="/nuffield-rda-2025/portfolio">
              Project Portfolio (£{(totalBudget / 1000).toFixed(0)}k components) →
            </a>
          </li>
          <li>
            <a
              href="https://github.com/PolicyEngine/nuffield-rda-2025/blob/main/materials/previous-application-2024.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Previous successful application (2024) ↗
            </a>
          </li>
          <li>
            <a
              href="https://github.com/PolicyEngine/nuffield-rda-2025/blob/main/docs/outline/strategic_narrative.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strategic narrative and analysis ↗
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Outline
