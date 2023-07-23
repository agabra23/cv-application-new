import BasicInfo from "./components/BasicInfo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useState } from "react";
import ReactDOMServer from "react-dom/server";
import JSXtoPDF from "./components/JSXtoPDF";

function App() {
  // Basic Info State

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

  // Skills State

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

  // JSX to be converted to PDF

  const printElement = ReactDOMServer.renderToString(JSXtoPDF());

  return (
    <>
      {/* Input Section */}

      <header>
        <h1>CV Application</h1>
      </header>
      <main>
        <div className="input-section">
          <form action="">
            <BasicInfo saveChanges={saveChanges} />
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

        {/* PDF Section */}

        <JSXtoPDF />
        {printElement}
      </main>
    </>
  );
}

export default App;
