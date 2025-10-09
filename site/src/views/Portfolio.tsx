import { useState } from 'react'

interface Component {
  id: string
  title: string
  cost: number
  effort: string | null
  priority: 'high' | 'medium' | 'low' | 'exploratory'
  description: string
  costBreakdown?: { staff?: number; nonStaff?: number; details?: string }
  deferred?: boolean
}

function Portfolio() {
  const [selectedComponents, setSelectedComponents] = useState<Set<string>>(new Set([
    // Recommended portfolio (£324k total)
    'council_tax', 'policy_buffer', 'ai_authoring', 'obr_integration',
    'local_media', 'parliamentary_toolkit', 'external_citations',
    'annual_symposium', 'poverty_dashboard', 'conferences', 'crm',
    'civil_society_training'
  ]))

  const [showDeferred, setShowDeferred] = useState(false)

  const toggleComponent = (id: string) => {
    const newSelected = new Set(selectedComponents)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedComponents(newSelected)
  }

  const themes = [
    {
      id: 'model',
      title: 'Model Enhancement',
      icon: '🔬',
      description: 'Expanding coverage and precision',
      components: [
        {
          id: 'council_tax',
          title: 'Council Tax Modeling',
          cost: 32000,
          effort: '4 pm',
          priority: 'high' as const,
          description: 'Add local taxation with 368 local authority variations',
          costBreakdown: { staff: 32000, nonStaff: 0 }
        },
        {
          id: 'policy_buffer',
          title: 'Policy Response Buffer',
          cost: 50000,
          effort: '5 pm',
          priority: 'high' as const,
          description: '48-hour Budget turnarounds (Spring + Autumn). Flexible scope can add VAT/LFS enhancements if needed.',
          costBreakdown: { staff: 40000, nonStaff: 10000, details: '£10k rapid response reserve' }
        },
        {
          id: 'vat_distribution',
          title: 'VAT Distributional Analysis',
          cost: 8000,
          effort: '1 pm',
          priority: 'medium' as const,
          description: 'Household-level VAT burden (can add via policy buffer if needed)',
          costBreakdown: { staff: 8000, nonStaff: 0 },
          deferred: true
        },
        {
          id: 'monthly_lfs',
          title: 'Monthly LFS Updates',
          cost: 32000,
          effort: '4 pm',
          priority: 'medium' as const,
          description: 'Real-time nowcasting (can add via policy buffer if needed)',
          costBreakdown: { staff: 32000, nonStaff: 0 },
          deferred: true
        }
      ]
    },
    {
      id: 'app',
      title: 'App Development',
      icon: '💻',
      description: 'User experience and accessibility',
      components: [
        {
          id: 'ai_authoring',
          title: 'AI Report Authoring Tool',
          cost: 53000,
          effort: '6 pm',
          priority: 'high' as const,
          description: 'LLM-powered natural language queries. THE bridge from elite to democratic access.',
          costBreakdown: { staff: 48000, nonStaff: 5000, details: '£5k LLM API costs' }
        },
        {
          id: 'obr_integration',
          title: 'OBR/HMT Data Integration',
          cost: 28000,
          effort: '3.5 pm',
          priority: 'medium' as const,
          description: 'Validation dashboards vs official projections. Builds credibility.',
          costBreakdown: { staff: 28000, nonStaff: 0 }
        },
        {
          id: 'local_media',
          title: 'Local Media Training Program',
          cost: 20000,
          effort: '2 pm',
          priority: 'high' as const,
          description: 'Train local journalists on FREE tools. Use 650 constituencies! Maintains neutrality.',
          costBreakdown: { staff: 12000, nonStaff: 8000, details: '£8k events/partnerships' }
        },
        {
          id: 'parliamentary_toolkit',
          title: 'Parliamentary Constituency Toolkit',
          cost: 15000,
          effort: '2 pm',
          priority: 'high' as const,
          description: 'Enhanced constituency views + MP training. MPs already requesting this.',
          costBreakdown: { staff: 15000, nonStaff: 0 }
        },
        {
          id: 'notifications',
          title: 'Notification System',
          cost: 16000,
          effort: '2 pm',
          priority: 'medium' as const,
          description: 'Alert users to policy changes',
          costBreakdown: { staff: 16000, nonStaff: 0 },
          deferred: true
        },
        {
          id: 'mobile_app',
          title: 'Mobile App',
          cost: 64000,
          effort: '8 pm',
          priority: 'exploratory' as const,
          description: 'iOS/Android apps (web-first priority)',
          costBreakdown: { staff: 64000, nonStaff: 0 },
          deferred: true
        }
      ]
    },
    {
      id: 'growth',
      title: 'Growth & Engagement',
      icon: '📈',
      description: 'Scaling user base and impact',
      components: [
        {
          id: 'external_citations',
          title: 'External Citations & Adoption Program',
          cost: 40000,
          effort: '5 pm',
          priority: 'high' as const,
          description: 'Target 50+ external citations. Flexible: hybrid trainings, regional visits, smaller events, user discovery.',
          costBreakdown: { staff: 30000, nonStaff: 10000, details: '£10k travel/events' }
        },
        {
          id: 'annual_symposium',
          title: 'Annual User Symposium',
          cost: 25000,
          effort: '2 pm',
          priority: 'high' as const,
          description: '2 symposia with 50-100 participants',
          costBreakdown: { staff: 8000, nonStaff: 17000, details: '£12k venue + £5k travel' }
        },
        {
          id: 'poverty_dashboard',
          title: 'Poverty & Child Poverty Dashboard',
          cost: 32000,
          effort: '4 pm',
          priority: 'high' as const,
          description: 'Real-time poverty tracking. HIGH political relevance.',
          costBreakdown: { staff: 32000, nonStaff: 0 }
        },
        {
          id: 'civil_society_training',
          title: 'Civil Society Training',
          cost: 20000,
          effort: '2 pm',
          priority: 'medium' as const,
          description: 'NGO/charity workshops on FREE tools (web app, Python). Maintains neutrality.',
          costBreakdown: { staff: 20000, nonStaff: 0 }
        },
        {
          id: 'conferences',
          title: 'Conference Program',
          cost: 30000,
          effort: '3 pm',
          priority: 'medium' as const,
          description: '6-8 strategic presentations over 2 years',
          costBreakdown: { staff: 12000, nonStaff: 18000, details: '£3k travel/conference' }
        },
        {
          id: 'crm',
          title: 'CRM System',
          cost: 24000,
          effort: '2 pm',
          priority: 'medium' as const,
          description: 'Enterprise CRM for user engagement',
          costBreakdown: { staff: 10000, nonStaff: 14000, details: '£7k/year licenses' }
        },
        {
          id: 'hackathon',
          title: 'Analysis Contest/Hackathon',
          cost: 20000,
          effort: '2 pm',
          priority: 'medium' as const,
          description: 'Annual competition (better for Year 2)',
          costBreakdown: { staff: 8000, nonStaff: 12000, details: '£10k prizes + £2k venue' },
          deferred: true
        }
      ]
    }
  ]

  const allComponents = themes.flatMap(t => t.components)
  const activeComponents = showDeferred ? allComponents : allComponents.filter(c => !c.deferred)

  const selectedTotal = allComponents
    .filter(c => selectedComponents.has(c.id))
    .reduce((sum, c) => sum + c.cost, 0)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#2ecc71'
      case 'medium': return '#3498db'
      case 'low': return '#95a5a6'
      case 'exploratory': return '#9b59b6'
      default: return '#95a5a6'
    }
  }

  const getPriorityBg = (priority: string) => {
    switch (priority) {
      case 'high': return '#f0fdf4'
      case 'medium': return '#eff6ff'
      case 'low': return '#f8f9fa'
      case 'exploratory': return '#faf5ff'
      default: return '#f8f9fa'
    }
  }

  return (
    <div className="content-section">
      <h1>Project Components</h1>
      <p style={{ color: '#7f8c8d', marginBottom: '0.5rem' }}>
        Build your portfolio from menu of options
      </p>
      <p style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '1.5rem', fontStyle: 'italic' }}>
        "Scaling Elite-Validated Tools to Civil Society"
      </p>

      {/* Selected budget total */}
      <div style={{
        background: selectedTotal >= 300000 && selectedTotal <= 350000 ? '#f0fdf4' : '#fff3cd',
        border: `2px solid ${selectedTotal >= 300000 && selectedTotal <= 350000 ? '#2ecc71' : '#f59e0b'}`,
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <strong>Selected Components Total</strong>
          <div style={{ fontSize: '0.9rem', color: '#7f8c8d', marginTop: '0.25rem' }}>
            Target: £300k-£350k | Recommended: £324k
          </div>
        </div>
        <div style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: selectedTotal >= 300000 && selectedTotal <= 350000 ? '#2ecc71' : '#f59e0b'
        }}>
          £{selectedTotal.toLocaleString()}
        </div>
      </div>

      {/* Show/hide deferred toggle */}
      <div style={{ marginBottom: '2rem', textAlign: 'right' }}>
        <button
          onClick={() => setShowDeferred(!showDeferred)}
          style={{
            padding: '0.5rem 1rem',
            background: showDeferred ? '#95a5a6' : '#ecf0f1',
            color: showDeferred ? 'white' : '#7f8c8d',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem'
          }}
        >
          {showDeferred ? '✓ Showing deferred components' : 'Show deferred components'}
        </button>
      </div>

      {/* Component themes */}
      {themes.map(theme => {
        const themeComponents = showDeferred ? theme.components : theme.components.filter(c => !c.deferred)
        const themeTotal = themeComponents
          .filter(c => selectedComponents.has(c.id))
          .reduce((sum, c) => sum + c.cost, 0)

        return (
          <div
            key={theme.id}
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
                  <span>{theme.icon}</span>
                  {theme.title}
                </h2>
                <div style={{ fontSize: '0.9rem', color: '#7f8c8d', marginTop: '0.25rem' }}>
                  {theme.description}
                </div>
              </div>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: themeTotal > 0 ? '#3498db' : '#ddd'
              }}>
                £{themeTotal.toLocaleString()}
              </div>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
              {themeComponents.map(comp => {
                const isSelected = selectedComponents.has(comp.id)

                return (
                  <div
                    key={comp.id}
                    onClick={() => toggleComponent(comp.id)}
                    style={{
                      background: isSelected ? getPriorityBg(comp.priority) : '#f8f9fa',
                      border: `2px solid ${isSelected ? getPriorityColor(comp.priority) : '#ecf0f1'}`,
                      padding: '1rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      opacity: comp.deferred ? 0.6 : 1
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      marginBottom: '0.5rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        flex: 1
                      }}>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '4px',
                          border: `2px solid ${isSelected ? getPriorityColor(comp.priority) : '#ddd'}`,
                          background: isSelected ? getPriorityColor(comp.priority) : 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: '700',
                          flexShrink: 0
                        }}>
                          {isSelected && '✓'}
                        </div>
                        <div style={{
                          fontWeight: '600',
                          color: '#2c3e50',
                          fontSize: '1.05rem'
                        }}>
                          {comp.title}
                          {comp.deferred && <span style={{ fontSize: '0.75rem', marginLeft: '0.5rem', color: '#95a5a6' }}>(deferred)</span>}
                        </div>
                      </div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: isSelected ? '#2c3e50' : '#bbb',
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
                      {comp.description}
                    </div>

                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      fontSize: '0.85rem',
                      color: '#7f8c8d',
                      flexWrap: 'wrap'
                    }}>
                      {comp.effort && <span>📊 {comp.effort}</span>}
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        background: getPriorityColor(comp.priority),
                        color: 'white'
                      }}>
                        {comp.priority}
                      </span>
                      {comp.costBreakdown && comp.costBreakdown.nonStaff && comp.costBreakdown.nonStaff > 0 && (
                        <span>💰 £{comp.costBreakdown.staff?.toLocaleString()} staff + £{comp.costBreakdown.nonStaff?.toLocaleString()} non-staff</span>
                      )}
                      {comp.costBreakdown?.details && (
                        <span>({comp.costBreakdown.details})</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}

      {/* Budget summary */}
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
      }}>
        <h3 style={{ marginTop: 0 }}>Recommended Portfolio (£324k)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div>
            <div style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '0.5rem' }}>
              🔬 Model Enhancement (£82k)
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
              <li>Council Tax (£32k)</li>
              <li>Policy Buffer (£50k)</li>
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '0.5rem' }}>
              💻 App Development (£110k)
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
              <li>AI Authoring (£53k)</li>
              <li>OBR/HMT Integration (£28k)</li>
              <li>Local Media Training (£20k)</li>
              <li>Parliamentary Toolkit (£15k)</li>
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '0.5rem' }}>
              📈 Growth & Engagement (£132k)
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
              <li>External Citations Program (£40k)</li>
              <li>Symposium (£25k)</li>
              <li>Poverty Dashboard (£32k)</li>
              <li>Civil Society Training (£20k)</li>
              <li>Conferences (£30k)</li>
              <li>CRM (£24k)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Strategic narrative */}
      <div style={{
        background: '#f0fdf4',
        borderLeft: '4px solid #2ecc71',
        padding: '1.5rem',
        borderRadius: '4px',
        marginBottom: '2rem'
      }}>
        <h3 style={{ marginTop: 0 }}>Strategic Narrative</h3>
        <p style={{ marginBottom: '0.75rem', lineHeight: '1.6' }}>
          Following <strong>elite adoption</strong> (HM Treasury pilot, No 10 integration),
          democratize access to the same tools used by government.
        </p>
        <p style={{ marginBottom: '0', lineHeight: '1.6' }}>
          <strong>Mechanism:</strong> AI bridges expert/non-expert divide + Local data enables
          constituency-level analysis + Training scales adoption
        </p>
      </div>

      {/* Budget guidance */}
      <div style={{
        background: '#eff6ff',
        borderLeft: '4px solid #3498db',
        padding: '1.5rem',
        borderRadius: '4px',
        marginBottom: '2rem'
      }}>
        <h3 style={{ marginTop: 0 }}>Alternative Budget Levels</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span><strong>Conservative:</strong> Remove Civil Society Training, reduce CRM</span>
            <span style={{ fontFamily: 'monospace', fontWeight: '600' }}>£300k</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span><strong>Recommended:</strong> Full scaling package</span>
            <span style={{ fontFamily: 'monospace', fontWeight: '600', color: '#2ecc71' }}>£324k</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span><strong>Ambitious:</strong> Add Evidence Automation, enhanced symposium</span>
            <span style={{ fontFamily: 'monospace', fontWeight: '600' }}>£350k</span>
          </div>
        </div>
      </div>

      <div style={{
        background: '#fff3cd',
        borderLeft: '4px solid #f59e0b',
        padding: '1rem',
        borderRadius: '4px'
      }}>
        <strong>💡 Note:</strong> Click components to customize. All PolicyEngine tools are FREE (web app, Python).
        Training programs maintain strict neutrality - enable analysis of any policy by any stakeholder.
      </div>
    </div>
  )
}

export default Portfolio
