import { portfolioData } from '../data/portfolioData'

function Portfolio() {
  const { totalBudget, duration, workstreams, researchQuestions } = portfolioData

  return (
    <div className="content-section">
      <h1>Final Project Portfolio</h1>
      <p style={{ color: '#7f8c8d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
        {duration / 12}-Year Program: Scaling Elite-Validated Tools to Civil Society
      </p>

      {/* Budget header */}
      <div style={{
        background: '#f0fdf4',
        border: '2px solid #2ecc71',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <strong style={{ fontSize: '1.1rem' }}>Total Project Budget</strong>
          <div style={{ fontSize: '0.9rem', color: '#7f8c8d', marginTop: '0.25rem' }}>
            Duration: {duration} months | Components: {workstreams.reduce((sum, ws) => sum + ws.components.length, 0)} | Budget approved range: £370k-£380k
          </div>
        </div>
        <div style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#2ecc71'
        }}>
          £{totalBudget.toLocaleString()}
        </div>
      </div>

      {/* Strategic context */}
      <div style={{
        background: '#eff6ff',
        borderLeft: '4px solid #3498db',
        padding: '1.5rem',
        borderRadius: '4px',
        marginBottom: '2rem'
      }}>
        <h3 style={{ marginTop: 0, color: '#2c3e50' }}>Strategic Rationale</h3>
        <p style={{ marginBottom: '0.75rem', lineHeight: '1.6' }}>
          This portfolio capitalizes on unexpected elite adoption from our previous Nuffield grant: rather than serving
          only under-resourced think tanks, we attracted the UK's most powerful policy institutions (HM Treasury, No 10).
          This validation creates an unprecedented opportunity to democratize elite-grade analysis.
        </p>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          <strong>Three-year timeline enables:</strong> Sustained AI development from natural language queries through MCP servers
          to emerging platforms, comprehensive dataset integration (OBR, DWP), and balanced outreach engaging both expert
          stakeholders and under-resourced local organizations.
        </p>
      </div>

      {/* Workstreams */}
      {workstreams.map(workstream => (
        <div
          key={workstream.id}
          style={{
            background: 'white',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            paddingBottom: '1rem',
            borderBottom: '2px solid #3498db'
          }}>
            <div>
              <h2 style={{ margin: 0, color: '#2c3e50', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>{workstream.icon}</span>
                {workstream.title}
              </h2>
              <div style={{ fontSize: '0.9rem', color: '#7f8c8d', marginTop: '0.25rem' }}>
                {workstream.personMonths} person-months
              </div>
            </div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#3498db'
            }}>
              £{workstream.total.toLocaleString()}
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {workstream.components.map((comp, idx) => (
              <div
                key={idx}
                style={{
                  background: '#f8f9fa',
                  border: '2px solid #e9ecef',
                  padding: '1rem',
                  borderRadius: '8px'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{
                    fontWeight: '600',
                    color: '#2c3e50',
                    fontSize: '1.05rem',
                    flex: 1
                  }}>
                    {comp.title}
                  </div>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#2c3e50',
                    fontFamily: 'monospace',
                    marginLeft: '1rem',
                    flexShrink: 0
                  }}>
                    £{comp.cost.toLocaleString()}
                  </div>
                </div>

                <div style={{
                  fontSize: '0.9rem',
                  color: '#555',
                  marginBottom: '0.75rem',
                  lineHeight: '1.5'
                }}>
                  {comp.description.replace(/\*\*/g, '').split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>

                {comp.details && (
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#7f8c8d',
                    marginBottom: '0.5rem',
                    fontStyle: 'italic'
                  }}>
                    {comp.details}
                  </div>
                )}

                {comp.researchQuestion && (
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#3498db',
                    marginTop: '0.5rem',
                    padding: '0.5rem',
                    background: '#eff6ff',
                    borderRadius: '4px',
                    borderLeft: '3px solid #3498db'
                  }}>
                    <strong>Research Q:</strong> {comp.researchQuestion}
                  </div>
                )}

                <div style={{
                  fontSize: '0.85rem',
                  color: '#7f8c8d',
                  marginTop: '0.5rem'
                }}>
                  📊 {comp.effort}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Research Questions */}
      {researchQuestions.length > 0 && (
        <div style={{
          background: '#fef3c7',
          borderLeft: '4px solid #f59e0b',
          padding: '1.5rem',
          borderRadius: '4px',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0 }}>Core Research Questions</h3>
          <ol style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.8' }}>
            {researchQuestions.map((rq, idx) => (
              <li key={idx}><strong>{rq.title}:</strong> {rq.question}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Timeline */}
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
      }}>
        <h3 style={{ marginTop: 0 }}>3-Year Timeline</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {[
            {
              year: 'Year 1 (2025-2026)',
              milestones: [
                'Q1: Project setup, council tax modeling kickoff',
                'Q2: AI interface development, dataset integration begins',
                'Q3: Spring Budget 2026, First symposium',
                'Q4: Autumn Budget 2026, poverty dashboard launch'
              ]
            },
            {
              year: 'Year 2 (2026-2027)',
              milestones: [
                'Q1: MCP server development, DWP data integration',
                'Q2: Spring Budget 2027, Second symposium',
                'Q3: Household-level AI capabilities',
                'Q4: Autumn Budget 2027, Year 2 evaluation'
              ]
            },
            {
              year: 'Year 3 (2027-2028)',
              milestones: [
                'Q1: Emerging AI surfaces exploration',
                'Q2: Spring Budget 2028, Third symposium',
                'Q3: Autumn Budget 2028, comprehensive evaluation',
                'Q4: Final deliverables, sustainability planning'
              ]
            }
          ].map((year, idx) => (
            <div key={idx} style={{
              background: '#f8f9fa',
              padding: '1rem',
              borderRadius: '8px',
              borderLeft: '4px solid #3498db'
            }}>
              <div style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '0.5rem' }}>
                {year.year}
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {year.milestones.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Budget breakdown note */}
      <div style={{
        background: '#fff3cd',
        borderLeft: '4px solid #f59e0b',
        padding: '1rem',
        borderRadius: '4px',
        marginTop: '2rem'
      }}>
        <strong>📝 Content Source:</strong> This page is automatically generated from{' '}
        <code>docs/outline/project_portfolio.md</code>. To update, edit the markdown file and run{' '}
        <code>python3 scripts/sync_content.py</code>
      </div>
    </div>
  )
}

export default Portfolio
