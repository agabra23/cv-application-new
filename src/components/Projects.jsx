export default function Projects() {
  return (
    <fieldset className="project-wrapper">
      <legend>Projects</legend>

      <label htmlFor="projectTitle">Project Title</label>
      <input type="text" id="projectTitle" />

      <label
        htmlFor="
      projectBulletInput"
      >
        Project Bullet Point
      </label>
      <input type="text" id="projectBulletInput" />
      <button id="addProjectBullet">Add Bullet Point</button>
    </fieldset>
  );
}
