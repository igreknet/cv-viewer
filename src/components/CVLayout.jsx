import CVItem from './CVItem';

const CVLayout = () => {
  const cvData = {
    personal: {
      name: 'Claudette Lening',
      email: 'claudette.lening@cosacademy.edu',
      phone: '+34 612 345 678',
      location: 'CareerOS Academy - Barcelona, Spain',
      linkedin: 'linkedin.com/in/claudette-lening',
    },
    experience: [
      {
        id: 1,
        period: '10.24 - 02.25',
        organization: 'CyberFort Solutions',
        location: 'Barcelona, Spain',
        title: 'Project Coordinator',
        bulletPoints: [
          'Oversaw scheduling, documentation, and progress tracking for internal IT infrastructure upgrades.',
          'Worked alongside security analysts to identify workflow bottlenecks and recommend process improvements.',
          'Assisted in communication between vendors and reviewed contracts for third-party software providers.',
        ],
      },
      {
        id: 2,
        period: '05.24 - 08.24',
        organization: 'BrightWave Digital',
        location: 'Barcelona, Spain',
        title: 'Summer Project Management Intern',
        bulletPoints: [
          'Coordinated deadlines and deliverables for a cross-functional team handling client advertising campaigns.',
          'Curated internal status reports summarizing campaign metrics, budget usage, and upcoming project milestones.',
          'Developed foundational practices in agile project management tools and team collaboration platforms.',
        ],
      },
      {
        id: 3,
        period: '06.23 - 08.23',
        organization: 'DeltaNova Technologies',
        location: 'Madrid, Spain',
        title: 'Summer Business Operations Intern',
        bulletPoints: [
          'Streamlined project documentation and meeting records to support efficient product launch execution.',
          'Engaged in client update calls, providing project status recaps and next-step outlines.',
          'Prepared post-project reviews that uncovered a 15% increase in team efficiency opportunities and documented best practices.',
        ],
      },
    ],
    education: [
      {
        id: 1,
        period: '09.23 - 05.24',
        organization: 'CareerOS Academy',
        location: 'Barcelona, Spain',
        title: 'MSc in Project Management',
        description:
          'Engaged in comprehensive coursework on Agile methodologies, risk management, and stakeholder analysis; led a capstone project simulating a cross-functional product launch.',
      },
      {
        id: 2,
        period: '09.19 - 05.22',
        organization: 'CareerOS Academy',
        location: 'Barcelona, Spain',
        title: 'BA in Business Administration',
        description:
          'Completed coursework in corporate finance, marketing strategy, and organizational behavior; collaborated on a consulting project for a local startup to optimize operations.',
      },
    ],
    awards: [
      {
        id: 1,
        period: '2012 - 2016',
        organization: 'President of the Data Analytics Club at CareerOS Academy',
      },
    ],
    skills: {
      languages: ['Spanish (Native)', 'English (Fluent)', 'Italian (Intermediate)'],
      additional: [
        'NIST Cybersecurity Framework',
        'Microsoft Office',
        'Kali Linux',
        'Incident Response Planning',
        'Firewall Configuration',
        'AWS Security',
        'AES Encryption',
      ],
    },
  };

  return (
    <div className="cv">
      <div className="cv__container">
        {/* Header */}
        <header className="cv-header">
          <h1 className="cv-header__name">{cvData.personal.name}</h1>

          <div className="cv-header__contact">
            <span className="cv-header__contact-item">{cvData.personal.location}</span>
            <span className="cv-header__contact-separator">|</span>
            <a className="cv-header__link" href={`mailto:${cvData.personal.email}`}>
              {cvData.personal.email}
            </a>
            <span className="cv-header__contact-separator">|</span>
            <span className="cv-header__contact-item">{cvData.personal.phone}</span>
            <span className="cv-header__contact-separator">|</span>
            <a
              href={`https://${cvData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-header__link"
            >
              {cvData.personal.linkedin}
            </a>
          </div>
        </header>

        {/* Professional Experience */}
        <section className="cv-section">
          <h2 className="cv-section__title">Professional Experience</h2>
          {cvData.experience.map(item => (
            <CVItem key={item.id} {...item} />
          ))}
        </section>

        {/* Education */}
        <section className="cv-section">
          <h2 className="cv-section__title">Education</h2>
          {cvData.education.map(item => (
            <CVItem key={item.id} {...item} />
          ))}
        </section>

        {/* Extracurricular & Awards */}
        <section className="cv-section">
          <h2 className="cv-section__title">Extracurricular & Awards</h2>
          {cvData.awards.map(item => (
            <CVItem key={item.id} {...item} />
          ))}
        </section>

        {/* Skills */}
        <section className="cv-section cv-section--skills">
          <h2 className="cv-section__title">Skills</h2>

          <div className="cv-skills">
            <div className="cv-skills__category">
              <h3 className="cv-skills__label">Languages:</h3>
              <div className="cv-skills__list">
                {cvData.skills.languages.map((skill, index) => (
                  <span key={index} className="cv-skills__item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="cv-skills__category">
              <h3 className="cv-skills__label">Additional Skills:</h3>
              <div className="cv-skills__list">
                {cvData.skills.additional.map((skill, index) => (
                  <span key={index} className="cv-skills__item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CVLayout;
