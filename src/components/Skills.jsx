import SkillsOverview from "./SkillsOverview";
import { useState } from "react";

export default function Skills() {
  const [skillsList, setSkillsList] = useState([]);
  const [skillValue, setSkillValue] = useState("");

  const addSkill = () => {
    setSkillsList([...skillsList, skillValue]);
    setSkillValue("");
  };

  const deleteItem = (index) => {
    const tempList = [...skillsList];
    tempList.splice(index, 1);
    setSkillsList(tempList);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <fieldset className="skills-wrapper">
      <legend>Skills</legend>

      <label htmlFor="skillInput">Add Skills</label>
      <input
        type="text"
        id="skillInput"
        value={skillValue}
        onChange={(e) => setSkillValue(e.target.value)}
        onKeyDown={enterHandler}
      />

      <button
        className="add-skills-btn form-btn"
        type="button"
        id="addSkillBtn"
        onClick={addSkill}
      >
        Add
      </button>

      <SkillsOverview skills={skillsList} deleteItem={deleteItem} />
    </fieldset>
  );
}
