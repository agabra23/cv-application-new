import "../styles/JSXtoPDF.css";

export default function JSXtoPDF({ basicInfo, skillsList, projectsList }) {
  const websiteURL = "https:/www." + basicInfo.website;

  const skills = skillsList.map((skill) => {
    return (
      <li className="skill-item" key={crypto.randomUUID()}>
        {skill}
      </li>
    );
  });

  const projects = projectsList.map((project) => {
    const bullets = project.description.map((bullet) => {
      return (
        <li key={crypto.randomUUID()} className="project-bullet">
          {bullet}
        </li>
      );
    });

    return (
      <div key={crypto.randomUUID()}>
        <li className="project-title">{project.title}</li>
        <ul>{bullets}</ul>
      </div>
    );
  });

  return (
    <div className="pdf-page" size="A4">
      <div className="pdf-header">
        <h1>{basicInfo.fullName}</h1>
        <h2>
          <em>Software Engineer</em>
        </h2>
      </div>
      <div className="pdf-body">
        <div className="left-column">
          <div className="contact-section left-section">
            <h2>Contact</h2>
            <p>{basicInfo.email}</p>
            <p>{basicInfo.phone}</p>
            <p>
              <a href={websiteURL} target="_blank">
                {basicInfo.website}
              </a>
            </p>
          </div>
          <div className="skills-section left-section">
            <h2>Skills</h2>
            <ul>{skills}</ul>
          </div>
        </div>
        <div className="main-body">
          <div className="projects-section">
            <h2>Projects</h2>
            <ul>{projects}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
