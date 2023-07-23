import SkillsOverview from "./SkillsOverview";
import { useState } from "react";

export default function Skills({
  skillsList,
  skillValue,
  addSkill,
  deleteItem,
  changeHandler,
}) {
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
        onChange={changeHandler}
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
