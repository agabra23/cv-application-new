export default function Skills() {
  return (
    <fieldset className="skills-wrapper">
      <legend>Skills</legend>

      <label htmlFor="skillInput">Add Skills</label>
      <input type="text" id="skillInput" />

      <button className="add-skills-btn form-btn" type="button">
        Add
      </button>

      <ul className="skills-overview">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </fieldset>
  );
}
