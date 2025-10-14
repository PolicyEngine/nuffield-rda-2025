function Budget() {
  const budgetData = {
    piTime: 60000,
    coiTime: 0,
    teamMembers: 152000,
    consultants: 48000,
    overheads: 28000,
    communications: 50000,
    equipment: 8000,
    otherDirect: 34000
  }

  const staffTotal = budgetData.piTime + budgetData.coiTime + budgetData.teamMembers + budgetData.consultants + budgetData.overheads
  const nonStaffTotal = budgetData.communications + budgetData.equipment + budgetData.otherDirect
  const grandTotal = staffTotal + nonStaffTotal

  return (
    <div className="content-section">
      <h1>Project Budget</h1>
      <p style={{ color: '#7f8c8d', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
        3-Year Budget: £380,000
      </p>

      {/* Grand total */}
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
            Duration: 36 months (2025-2028) | Team: ~1.95 FTE
          </div>
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#2ecc71' }}>
          £{grandTotal.toLocaleString()}
        </div>
      </div>

      {/* Budget table */}
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginTop: 0 }}>Budget by Category</h2>

        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '1rem'
        }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #3498db' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Budget Category</th>
              <th style={{ padding: '0.75rem', textAlign: 'right', fontWeight: '600' }}>Amount (£)</th>
              <th style={{ padding: '0.75rem', textAlign: 'right', fontWeight: '600' }}>%</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#f8f9fa' }}>
              <td style={{ padding: '0.75rem', fontWeight: '600' }} colSpan={3}>Staff Costs</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', paddingLeft: '1.5rem' }}>PI Time (25% FTE)</td>
              <td style={{ padding: '0.75rem', textAlign: 'right', fontFamily: 'monospace' }}>
                {budgetData.piTime.toLocaleString()}
              </td>
              <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                {Math.round(budgetData.piTime / grandTotal * 100)}%
              </td>
            </tr>
            <tr style={{ background: '#f8f9fa' }}>
              <td style={{ padding: '0.75rem', paddingLeft: '1.5rem' }}>Co-I Time (50% FTE)</td>
              <td style={{ padding: '0.75rem', textAlign: 'right', fontFamily: 'monospace' }}>
                {budgetData.coiTime.toLocaleString()}
              </td>
              <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                {Math.round(budgetData.coiTime / grandTotal * 100)}%
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', paddingLeft: '1.5rem' }}>Team Members (100% FTE)</td>
              <td style={{ padding: '0.75rem', textAlign: 'right', fontFamily: 'monospace' }}>
                {budgetData.teamMembers.toLocaleString()}
              </td>
              <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                {Math.round(budgetData.teamMembers / grandTotal * 100)}%
              </td>
            </tr>
            <tr style={{ background: '#f8f9fa' }}>
              <td style={{ padding: '0.75rem', paddingLeft: '1.5rem' }}>Consultants (20% FTE)</td>
              <td style={{ padding: '0.75rem', textAlign: 'right', fontFamily: 'monospace' }}>
                {budgetData.consultants.toLocaleString()}
              </td>
              <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                {Math.round(budgetData.consultants / grandTotal * 100)}%
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', paddingLeft: '1.5rem' }}>Overheads and Estate costs</td>
              <td style={{ padding: '0.75rem', textAlign: 'right', fontFamily: 'monospace' }}>
                {budgetData.overheads.toLocaleString()}
              </td>
              <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                {Math.round(budgetData.overheads / grandTotal * 100)}%
              </td>
            </tr>
            <tr style={{ background: '#d4edda', fontWeight: '600', borderTop: '2px solid #28a745' }}>
              <td style={{ padding: '0.75rem' }}>Staff Costs Subtotal</td>
              <td style={{ padding: '0.75rem', textAlign: 'right', fontFamily: 'monospace' }}>
                {staffTotal.toLocaleString()}
              </td>
              <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                {Math.round(staffTotal / grandTotal * 100)}%
              </td>
            </tr>

            <tr style={{ background: '#f8f9fa' }}>
              <td style={{ padding: '0.75rem', fontWeight: '600' }} colSpan={3}>Non-Staff Costs</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', paddingLeft: '1.5rem' }}>Communications and stakeholder engagement</td>
              <td style={{ padding: '0.75rem', textAlign: 'right', fontFamily: 'monospace' }}>
                {budgetData.communications.toLocaleString()}
              </td>
              <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                {Math.round(budgetData.communications / grandTotal * 100)}%
              </td>
            </tr>
            <tr style={{ background: '#f8f9fa' }}>
              <td style={{ padding: '0.75rem', paddingLeft: '1.5rem' }}>Equipment</td>
              <td style={{ padding: '0.75rem', textAlign: 'right', fontFamily: 'monospace' }}>
                {budgetData.equipment.toLocaleString()}
              </td>
              <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                {Math.round(budgetData.equipment / grandTotal * 100)}%
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', paddingLeft: '1.5rem' }}>Other direct costs</td>
              <td style={{ padding: '0.75rem', textAlign: 'right', fontFamily: 'monospace' }}>
                {budgetData.otherDirect.toLocaleString()}
              </td>
              <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                {Math.round(budgetData.otherDirect / grandTotal * 100)}%
              </td>
            </tr>
            <tr style={{ background: '#d1ecf1', fontWeight: '600', borderTop: '2px solid #17a2b8' }}>
              <td style={{ padding: '0.75rem' }}>Non-Staff Costs Subtotal</td>
              <td style={{ padding: '0.75rem', textAlign: 'right', fontFamily: 'monospace' }}>
                {nonStaffTotal.toLocaleString()}
              </td>
              <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                {Math.round(nonStaffTotal / grandTotal * 100)}%
              </td>
            </tr>

            <tr style={{ background: '#2c3e50', color: 'white', fontWeight: '700', fontSize: '1.05rem' }}>
              <td style={{ padding: '1rem' }}>Grand Total (£)</td>
              <td style={{ padding: '1rem', textAlign: 'right', fontFamily: 'monospace', fontSize: '1.2rem' }}>
                {grandTotal.toLocaleString()}
              </td>
              <td style={{ padding: '1rem', textAlign: 'right' }}>100%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Team allocation */}
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
      }}>
        <h3 style={{ marginTop: 0 }}>Team Allocation (~1.95 FTE)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Max Ghenis (PI)</div>
            <div style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>25% FTE</div>
          </div>
          <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Nikhil Woodruff (Co-I)</div>
            <div style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>50% FTE</div>
          </div>
          <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Vahid Ahmadi</div>
            <div style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>100% FTE</div>
          </div>
          <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Anthony Volk</div>
            <div style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>20% FTE (contractor)</div>
          </div>
        </div>
      </div>

      {/* Application form numbers */}
      <div style={{
        background: '#fff3cd',
        borderLeft: '4px solid #f59e0b',
        padding: '1.5rem',
        borderRadius: '4px'
      }}>
        <h3 style={{ marginTop: 0 }}>Application Form Numbers (Copy-Paste)</h3>
        <div style={{ fontFamily: 'monospace', fontSize: '0.95rem', lineHeight: '1.8' }}>
          <div>PI Time: 60000</div>
          <div>Co-I Time: 96000</div>
          <div>Team Members: 150000</div>
          <div>Consultants: 30000</div>
          <div>Overheads: 28000</div>
          <div>Qualitative research: 0</div>
          <div>Quantitative research: 0</div>
          <div>Communications: 10000</div>
          <div>Equipment: 4000</div>
          <div>Other direct: 2000</div>
          <div style={{ marginTop: '0.5rem', fontWeight: '700', fontSize: '1.1rem' }}>Grand total: 380000</div>
        </div>
      </div>
    </div>
  )
}

export default Budget
