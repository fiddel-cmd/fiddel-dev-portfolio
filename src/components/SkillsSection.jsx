const skills = [
  { icon: "code-slash", name: "HTML & CSS", level: 90 },
  { icon: "bootstrap", name: "Bootstrap", level: 85 },
  { icon: "filetype-js", name: "JavaScript", level: 80 },
  { icon: "filetype-tsx", name: "TypeScript", level: 75 },
  { icon: "filetype-java", name: "Java", level: 85 },
  { icon: "filetype-cpp", name: "C++", level: 75 },
  { icon: "phone", name: "React Native", level: 80 },
  { icon: "lightning-charge", name: "Next.js", level: 80 },
  { icon: "database", name: "PostgreSQL", level: 80 },
  { icon: "git", name: "Git & GitHub", level: 85 },
  { icon: "diagram-3", name: "OOP & SOLID", level: 85 },
  { icon: "sort-numeric-up", name: "DSA", level: 75 },
];

export default function SkillsSection() {
  return (
    <section className="container pb-5" aria-labelledby="skills-title">
      <div className="row mt-5 pt-5">
        <div className="col-12 text-center mb-4">
          <h2 className="section-title" id="skills-title">
            My Skills
          </h2>
        </div>
        {skills.map(({ icon, name, level }) => (
          <div className="col-lg-3 col-md-6 mb-4" key={name}>
            <div className="skill-card">
              <i className={`bi bi-${icon}`} aria-hidden="true"></i>
              <h5>{name}</h5>
              <div
                className="progress"
                role="progressbar"
                aria-label={`${name} proficiency`}
                aria-valuenow={level}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className={`progress-bar skill-${level}`}>
                  {level}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
