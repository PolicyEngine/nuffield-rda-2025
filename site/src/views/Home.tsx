function Home() {
  return (
    <div className="content-section">
      <h1>Nuffield Foundation Research, Development and Analysis Fund Application</h1>

      <p>
        PolicyEngine's application to the Nuffield Foundation's Research, Development and Analysis Fund.
      </p>

      <div className="grant-info-grid">
        <div className="info-card">
          <h3>Typical Award</h3>
          <p>Under £300,000</p>
        </div>
        <div className="info-card">
          <h3>Maximum Award</h3>
          <p>£500,000 (occasionally £750,000)</p>
        </div>
        <div className="info-card">
          <h3>Outline Deadline</h3>
          <p>October 6, 2025</p>
        </div>
        <div className="info-card">
          <h3>Duration</h3>
          <p>6 months - 3 years</p>
        </div>
      </div>

      <h2>About the Fund</h2>
      <p>
        The Research, Development and Analysis Fund supports research projects that aim to
        improve lives in the UK, addressing one or more of five priority questions related
        to society, technology, climate, and institutions.
      </p>

      <h2>Five Priority Questions</h2>
      <div style={{ marginTop: '1rem' }}>
        <h3>1. Building a prosperous and fair society</h3>
        <ul>
          <li>Economic opportunity and mobility</li>
          <li>Income distribution and poverty</li>
          <li>Employment and skills development</li>
        </ul>

        <h3>2. Creating an inclusive society</h3>
        <ul>
          <li>Social cohesion and integration</li>
          <li>Equality and tackling discrimination</li>
          <li>Access to services and opportunities</li>
        </ul>

        <h3>3. Ensuring science and technology benefit people</h3>
        <ul>
          <li>AI and automation impacts on society</li>
          <li>Digital inclusion and access</li>
          <li>Ethical use of technology</li>
        </ul>

        <h3>4. Developing climate change policies</h3>
        <ul>
          <li>Net zero transitions</li>
          <li>Climate adaptation strategies</li>
          <li>Just transitions for affected communities</li>
        </ul>

        <h3>5. Building trustworthy and effective institutions</h3>
        <ul>
          <li>Democratic participation</li>
          <li>Public trust in institutions</li>
          <li>Effective governance</li>
        </ul>
      </div>

      <h2>Application Process</h2>
      <ul>
        <li><strong>Stage 1:</strong> Outline application (brief overview)</li>
        <li><strong>Stage 2:</strong> Full application (invited applicants only)</li>
      </ul>

      <h2>Previous Nuffield Support</h2>
      <p>
        PolicyEngine received £251,296 from Nuffield Foundation (September 2024 - September 2025)
        for "Enhancing, localising and democratising tax-benefit policy analysis" - a project
        focused on improving PolicyEngine's comprehensiveness, accuracy, and accessibility.
      </p>
      <p>
        <strong>Previous Application Materials:</strong>
      </p>
      <ul>
        <li>
          <a href="https://docs.google.com/document/d/1P0gTHNfVcXyIMuW5w4T8Ji_uSaqnhjOPmjU8J5YVW5I/edit?tab=t.0"
             target="_blank"
             rel="noopener noreferrer">
            View full application (Google Doc)
          </a>
        </li>
        <li>
          <a href="https://github.com/PolicyEngine/nuffield-rda-2025/blob/main/materials/previous-application-2024.md"
             target="_blank"
             rel="noopener noreferrer">
            Full application with hyperlinks (markdown)
          </a>
        </li>
        <li>
          <a href="https://github.com/PolicyEngine/nuffield-rda-2025/blob/main/materials/previous-application-summary.md"
             target="_blank"
             rel="noopener noreferrer">
            Executive summary and analysis
          </a>
        </li>
      </ul>

      <h2>Assessment Criteria</h2>
      <ul>
        <li>Relevance to priority questions</li>
        <li>Potential impact on improving lives in the UK</li>
        <li>Research methodology quality and rigor</li>
        <li>Team expertise and track record</li>
        <li>Value for money</li>
      </ul>

      <h2>Key Dates</h2>
      <ul>
        <li><strong>October 6, 2025:</strong> Outline application deadline</li>
        <li><strong>TBD:</strong> Full application deadline (if invited)</li>
      </ul>
    </div>
  )
}

export default Home
