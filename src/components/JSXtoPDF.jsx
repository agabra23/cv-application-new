import "../styles/JSXtoPDF.css";

export default function JSXtoPDF({
  basicInfo,
  skillsList,
  projectsList,
  education,
}) {
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
      <div className="project-item" key={crypto.randomUUID()}>
        <a href={project.url} target="_blank">
          <li className="project-title">{project.title}</li>
        </a>
        <ul>{bullets}</ul>
      </div>
    );
  });

  const getEducation = () => {
    if (education.degreeName === "") {
      return <></>;
    }

    return (
      <div className="education-section left-section">
        <h2>Education</h2>
        <p>{education.degreeName}</p>
        <p>{education.universityName}</p>
        <p>
          {education.educationStart} - {education.educationEnd}
        </p>
        <p>{education.educationCity}</p>
      </div>
    );
  };

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
          {getEducation()}
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
