import BasicInfo from "./components/BasicInfo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const [basicInfo, setBasicInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
  });

  const saveChanges = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setBasicInfo((prevInfo) => {
      return {
        ...prevInfo,
        [id]: value,
      };
    });
  };

  const websiteURL = "https:/www." + basicInfo.website;

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

  const changeHandler = (e) => {
    setSkillValue(e.target.value);
  };

  // Project State

  const [projectList, setProjectList] = useState([]);

  const addProject = (newState) => {
    setProjectList(newState);
  };

  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <main>
        <div className="input-section">
          <form action="">
            <BasicInfo basicInfo={basicInfo} saveChanges={saveChanges} />
            <Skills
              skillsList={skillsList}
              skillValue={skillValue}
              addSkill={addSkill}
              deleteItem={deleteItem}
              changeHandler={changeHandler}
            />
            <Projects projectList={projectList} addProject={addProject} />
          </form>
        </div>

        <div className="pdf-section">
          <p>Name</p>
          <p>{basicInfo.fullName}</p>
          <p>Email</p>
          <p>{basicInfo.email}</p>
          <p>Phone</p>
          <p>{basicInfo.phone}</p>
          <p>Site</p>
          <p>
            <a href={websiteURL} target="_blank">
              {basicInfo.website}
            </a>
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
