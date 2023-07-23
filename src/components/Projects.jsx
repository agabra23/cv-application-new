import { useState } from "react";

export default function Projects({ projectList, addProject }) {
  const [projectTitleInput, setProjectTitleInput] = useState("");
  const [projectBulletInput, setProjectBulletInput] = useState("");
  const [projectDescriptionList, setProjectDescriptionList] = useState([]);

  const saveProjectTitle = (e) => {
    setProjectTitleInput(e.target.value);
  };

  const saveProjectDescription = (e) => {
    setProjectBulletInput(e.target.value);
  };

  const addDescriptionBullet = (e) => {
    e.preventDefault();

    setProjectDescriptionList([...projectDescriptionList, projectBulletInput]);
    setProjectBulletInput("");
  };

  const deleteBullet = (index) => {
    const tempList = [...projectDescriptionList];
    tempList.splice(index, 1);
    setProjectDescriptionList(tempList);
  };

  const bullets = projectDescriptionList.map((bullet, index) => {
    return (
      <div key={crypto.randomUUID()}>
        <li>{bullet}</li>
        <button onClick={() => deleteBullet(index)}>Remove</button>
      </div>
    );
  });

  const saveProject = (e) => {
    e.preventDefault();

    if (projectTitleInput === "") return;
    if (projectDescriptionList.length === 0) return;

    addProject([
      ...projectList,
      {
        title: projectTitleInput,
        description: projectDescriptionList,
      },
    ]);

    setProjectTitleInput("");
    setProjectDescriptionList([]);
    setProjectBulletInput("");
  };

  const projects = projectList.map((project) => {
    const projectBullets = project.description.map((bullet) => {
      return <li key={crypto.randomUUID()}>{bullet}</li>;
    });

    return (
      <div key={crypto.randomUUID()}>
        <li>{project.title}</li>
        <ul>{projectBullets}</ul>
      </div>
    );
  });

  return (
    <fieldset className="project-wrapper">
      <legend>Projects</legend>

      <label htmlFor="projectTitle">Project Title</label>
      <input
        type="text"
        value={projectTitleInput}
        id="projectTitle"
        onChange={saveProjectTitle}
      />

      <label htmlFor="projectBulletInput">Project Bullet Point</label>
      <input
        type="text"
        id="projectBulletInput"
        value={projectBulletInput}
        onChange={saveProjectDescription}
      />

      <button onClick={addDescriptionBullet} id="addProjectBullet">
        Add Bullet Point
      </button>

      <ul>{bullets}</ul>

      <button onClick={saveProject}>Add Project</button>

      <ul>{projects}</ul>
    </fieldset>
  );
}
