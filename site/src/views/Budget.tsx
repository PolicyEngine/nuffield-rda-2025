import { useState } from 'react'

interface BudgetAllocation {
  component: string
  piTime: number
  coiTime: number
  teamMembers: number
  consultants: number
  overheads: number
  qualitative: number
  quantitative: number
  communications: number
  equipment: number
  otherDirect: number
}

function Budget() {
  const [expandedCategories, setExpandedCategories] = useState(true)

  // Components/subprojects as columns
  const components = [
    { id: 'council_tax', name: 'Council Tax', total: 32000 },
    { id: 'policy_buffer', name: 'Policy Buffer', total: 40000 },
    { id: 'ai_authoring', name: 'AI Authoring', total: 48000 },
    { id: 'obr_integration', name: 'OBR/HMT', total: 24000 },
    { id: 'poverty_dashboard', name: 'Poverty Dashboard', total: 32000 },
    { id: 'trainings', name: 'Trainings', total: 32000 },
    { id: 'symposium', name: 'Symposium', total: 25000 },
    { id: 'conferences', name: 'Conferences', total: 30000 },
    { id: 'crm', name: 'CRM', total: 16000 },
    { id: 'contingency', name: 'Contingency', total: 46000 }
  ]

  // Budget categories as rows
  const budgetCategories = [
    { id: 'pi_time', label: 'Staff costs: PI Time', type: 'staff' },
    { id: 'coi_time', label: 'Staff costs: Co-I Time', type: 'staff' },
    { id: 'team_members', label: 'Staff costs: Team Members', type: 'staff' },
    { id: 'consultants', label: 'Staff costs: Consultants', type: 'staff' },
    { id: 'overheads', label: 'Staff costs: Overheads and Estate costs', type: 'staff' },
    { id: 'qualitative', label: 'Non staff costs: Qualitative research', type: 'nonstaff' },
    { id: 'quantitative', label: 'Non staff costs: Quantitative research', type: 'nonstaff' },
    { id: 'communications', label: 'Non staff costs: Communications and stakeholder engagement', type: 'nonstaff' },
    { id: 'equipment', label: 'Non staff costs: Equipment', type: 'nonstaff' },
    { id: 'other_direct', label: 'Non staff costs: Other direct costs', type: 'nonstaff' }
  ]

  // Example allocation data (to be refined)
  const allocations: Record<string, Record<string, number>> = {
    council_tax: {
      pi_time: 3000,
      coi_time: 8000,
      team_members: 15000,
      consultants: 2000,
      overheads: 4000,
      qualitative: 0,
      quantitative: 0,
      communications: 0,
      equipment: 0,
      other_direct: 0
    },
    policy_buffer: {
      pi_time: 4000,
      coi_time: 10000,
      team_members: 20000,
      consultants: 0,
      overheads: 6000,
      qualitative: 0,
      quantitative: 0,
      communications: 0,
      equipment: 0,
      other_direct: 0
    },
    ai_authoring: {
      pi_time: 5000,
      coi_time: 12000,
      team_members: 24000,
      consultants: 0,
      overheads: 7000,
      qualitative: 0,
      quantitative: 0,
      communications: 0,
      equipment: 0,
      other_direct: 0
    },
    obr_integration: {
      pi_time: 2000,
      coi_time: 6000,
      team_members: 12000,
      consultants: 0,
      overheads: 4000,
      qualitative: 0,
      quantitative: 0,
      communications: 0,
      equipment: 0,
      other_direct: 0
    },
    poverty_dashboard: {
      pi_time: 3000,
      coi_time: 8000,
      team_members: 16000,
      consultants: 0,
      overheads: 5000,
      qualitative: 0,
      quantitative: 0,
      communications: 0,
      equipment: 0,
      other_direct: 0
    },
    trainings: {
      pi_time: 2000,
      coi_time: 6000,
      team_members: 20000,
      consultants: 0,
      overheads: 4000,
      qualitative: 0,
      quantitative: 0,
      communications: 0,
      equipment: 0,
      other_direct: 0
    },
    symposium: {
      pi_time: 1000,
      coi_time: 3000,
      team_members: 4000,
      consultants: 0,
      overheads: 0,
      qualitative: 0,
      quantitative: 0,
      communications: 17000,  // Venue + travel
      equipment: 0,
      other_direct: 0
    },
    conferences: {
      pi_time: 1000,
      coi_time: 4000,
      team_members: 7000,
      consultants: 0,
      overheads: 0,
      qualitative: 0,
      quantitative: 0,
      communications: 18000,  // Travel costs
      equipment: 0,
      other_direct: 0
    },
    crm: {
      pi_time: 500,
      coi_time: 2000,
      team_members: 5500,
      consultants: 0,
      overheads: 0,
      qualitative: 0,
      quantitative: 0,
      communications: 0,
      equipment: 8000,  // Licenses
      other_direct: 0
    },
    contingency: {
      pi_time: 0,
      coi_time: 0,
      team_members: 0,
      consultants: 10000,
      overheads: 0,
      qualitative: 0,
      quantitative: 0,
      communications: 12000,
      equipment: 2000,
      other_direct: 22000
    }
  }

  const calculateCategoryTotal = (categoryId: string): number => {
    return components.reduce((sum, comp) => {
      return sum + (allocations[comp.id]?.[categoryId] || 0)
    }, 0)
  }

  const calculateComponentSubtotal = (compId: string, categories: string[]): number => {
    return categories.reduce((sum, catId) => {
      return sum + (allocations[compId]?.[catId] || 0)
    }, 0)
  }

  const staffCategories = ['pi_time', 'coi_time', 'team_members', 'consultants', 'overheads']
  const nonStaffCategories = ['qualitative', 'quantitative', 'communications', 'equipment', 'other_direct']

  const grandTotal = components.reduce((sum, comp) => sum + comp.total, 0)

  return (
    <div className="content-section">
      <h1>Budget Breakdown</h1>
      <p style={{ color: '#7f8c8d', marginBottom: '1.5rem' }}>
        Budget categories (rows) × Project components (columns)
      </p>

      <div style={{
        background: '#eff6ff',
        border: '2px solid #3498db',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <strong>Total Budget</strong>
          <div style={{ fontSize: '0.85rem', color: '#7f8c8d' }}>
            Across all components (24 months)
          </div>
        </div>
        <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3498db' }}>
          £{grandTotal.toLocaleString()}
        </div>
      </div>

      <button
        onClick={() => setExpandedCategories(!expandedCategories)}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          background: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: '500'
        }}
      >
        {expandedCategories ? '▼ Collapse' : '▶ Expand'} Budget Categories
      </button>

      {/* Budget table */}
      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          background: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          fontSize: '0.85rem'
        }}>
          <thead>
            <tr style={{ background: '#2c3e50', color: 'white' }}>
              <th style={{
                padding: '0.75rem',
                textAlign: 'left',
                position: 'sticky',
                left: 0,
                background: '#2c3e50',
                minWidth: '200px'
              }}>
                Budget Category
              </th>
              {components.map(comp => (
                <th key={comp.id} style={{
                  padding: '0.75rem',
                  textAlign: 'right',
                  minWidth: '100px',
                  fontWeight: '600'
                }}>
                  {comp.name}
                </th>
              ))}
              <th style={{
                padding: '0.75rem',
                textAlign: 'right',
                background: '#3498db',
                fontWeight: '700',
                minWidth: '100px'
              }}>
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Staff costs section */}
            {expandedCategories && (
              <>
                {budgetCategories.filter(cat => cat.type === 'staff').map((cat, idx) => (
                  <tr key={cat.id} style={{
                    background: idx % 2 === 0 ? 'white' : '#f8f9fa',
                    borderBottom: '1px solid #ecf0f1'
                  }}>
                    <td style={{
                      padding: '0.75rem',
                      fontWeight: '500',
                      position: 'sticky',
                      left: 0,
                      background: idx % 2 === 0 ? 'white' : '#f8f9fa'
                    }}>
                      {cat.label}
                    </td>
                    {components.map(comp => (
                      <td key={comp.id} style={{
                        padding: '0.75rem',
                        textAlign: 'right',
                        fontFamily: 'monospace',
                        color: '#555'
                      }}>
                        {(allocations[comp.id]?.[cat.id] || 0).toLocaleString()}
                      </td>
                    ))}
                    <td style={{
                      padding: '0.75rem',
                      textAlign: 'right',
                      fontFamily: 'monospace',
                      fontWeight: '600',
                      background: '#eff6ff'
                    }}>
                      {calculateCategoryTotal(cat.id).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </>
            )}

            {/* Staff subtotal */}
            <tr style={{
              background: '#d4edda',
              fontWeight: '600',
              borderTop: '2px solid #28a745',
              borderBottom: '2px solid #28a745'
            }}>
              <td style={{
                padding: '0.75rem',
                position: 'sticky',
                left: 0,
                background: '#d4edda'
              }}>
                Staff Costs Subtotal
              </td>
              {components.map(comp => (
                <td key={comp.id} style={{
                  padding: '0.75rem',
                  textAlign: 'right',
                  fontFamily: 'monospace'
                }}>
                  {calculateComponentSubtotal(comp.id, staffCategories).toLocaleString()}
                </td>
              ))}
              <td style={{
                padding: '0.75rem',
                textAlign: 'right',
                fontFamily: 'monospace',
                fontWeight: '700',
                background: '#28a745',
                color: 'white'
              }}>
                {staffCategories.reduce((sum, cat) => sum + calculateCategoryTotal(cat), 0).toLocaleString()}
              </td>
            </tr>

            {/* Non-staff costs section */}
            {expandedCategories && (
              <>
                {budgetCategories.filter(cat => cat.type === 'nonstaff').map((cat, idx) => (
                  <tr key={cat.id} style={{
                    background: idx % 2 === 0 ? 'white' : '#f8f9fa',
                    borderBottom: '1px solid #ecf0f1'
                  }}>
                    <td style={{
                      padding: '0.75rem',
                      fontWeight: '500',
                      position: 'sticky',
                      left: 0,
                      background: idx % 2 === 0 ? 'white' : '#f8f9fa'
                    }}>
                      {cat.label}
                    </td>
                    {components.map(comp => (
                      <td key={comp.id} style={{
                        padding: '0.75rem',
                        textAlign: 'right',
                        fontFamily: 'monospace',
                        color: '#555'
                      }}>
                        {(allocations[comp.id]?.[cat.id] || 0).toLocaleString()}
                      </td>
                    ))}
                    <td style={{
                      padding: '0.75rem',
                      textAlign: 'right',
                      fontFamily: 'monospace',
                      fontWeight: '600',
                      background: '#eff6ff'
                    }}>
                      {calculateCategoryTotal(cat.id).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </>
            )}

            {/* Non-staff subtotal */}
            <tr style={{
              background: '#d1ecf1',
              fontWeight: '600',
              borderTop: '2px solid #17a2b8',
              borderBottom: '2px solid #17a2b8'
            }}>
              <td style={{
                padding: '0.75rem',
                position: 'sticky',
                left: 0,
                background: '#d1ecf1'
              }}>
                Non-Staff Costs Subtotal
              </td>
              {components.map(comp => (
                <td key={comp.id} style={{
                  padding: '0.75rem',
                  textAlign: 'right',
                  fontFamily: 'monospace'
                }}>
                  {calculateComponentSubtotal(comp.id, nonStaffCategories).toLocaleString()}
                </td>
              ))}
              <td style={{
                padding: '0.75rem',
                textAlign: 'right',
                fontFamily: 'monospace',
                fontWeight: '700',
                background: '#17a2b8',
                color: 'white'
              }}>
                {nonStaffCategories.reduce((sum, cat) => sum + calculateCategoryTotal(cat), 0).toLocaleString()}
              </td>
            </tr>

            {/* Grand total */}
            <tr style={{
              background: '#2c3e50',
              color: 'white',
              fontWeight: '700',
              fontSize: '1rem'
            }}>
              <td style={{
                padding: '1rem',
                position: 'sticky',
                left: 0,
                background: '#2c3e50'
              }}>
                Grand Total (£)
              </td>
              {components.map(comp => (
                <td key={comp.id} style={{
                  padding: '1rem',
                  textAlign: 'right',
                  fontFamily: 'monospace'
                }}>
                  {comp.total.toLocaleString()}
                </td>
              ))}
              <td style={{
                padding: '1rem',
                textAlign: 'right',
                fontFamily: 'monospace',
                fontSize: '1.1rem'
              }}>
                {grandTotal.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Component theme breakdown */}
      <div style={{
        background: '#f0fdf4',
        borderLeft: '4px solid #2ecc71',
        padding: '1.5rem',
        borderRadius: '4px',
        marginBottom: '2rem'
      }}>
        <h3 style={{ marginTop: 0 }}>Components by Theme</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div>
            <div style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '0.5rem' }}>
              🔬 Model Enhancement
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
              <li>Council Tax (£32k)</li>
              <li>Policy Buffer (£40k)</li>
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '0.5rem' }}>
              💻 App Development
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
              <li>AI Authoring (£48k)</li>
              <li>OBR/HMT Integration (£24k)</li>
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '0.5rem' }}>
              📈 Growth & Engagement
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
              <li>Trainings (£32k)</li>
              <li>Symposium (£25k)</li>
              <li>Poverty Dashboard (£32k)</li>
              <li>Conferences (£30k)</li>
              <li>CRM (£16k)</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{
        background: '#fff3cd',
        borderLeft: '4px solid #f59e0b',
        padding: '1rem',
        borderRadius: '4px'
      }}>
        <strong>📝 Note:</strong> This is a draft allocation based on Portfolio A components.
        Adjust allocations in <code>docs/outline/responses/g_budget.md</code> and refer to
        the <a href="/nuffield-rda-2025/portfolio">Portfolio page</a> for component selection.
      </div>
    </div>
  )
}

export default Budget
