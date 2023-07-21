export default function SkillsOverview({ skills, deleteItem }) {
  const skillsList = skills.map((skill, index) => {
    return (
      <div className="skill-list-input-item" key={skill}>
        <li>{skill}</li>
        <button className="delete-btn" onClick={() => deleteItem(index)}>
          Remove
        </button>
      </div>
    );
  });

  return <ul className="skills-overview">{skillsList}</ul>;
}
