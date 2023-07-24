import BasicInfo from "./components/BasicInfo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useState } from "react";
import ReactDOMServer from "react-dom/server";
import JSXtoPDF from "./components/JSXtoPDF";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import Education from "./components/Education";

function App() {
  // Basic Info State

  const [basicInfo, setBasicInfo] = useState({
    fullName: "Enter Name",
    email: "Enter Email",
    phone: "Enter Phone",
    website: "example.com",
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

  // Education State

  const [education, setEducation] = useState({});

  const saveEducation = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setEducation({
      ...education,
      [id]: value,
    });
  };

  // JSX to be converted to PDF

  // const pdfJSX = () => {
  //   return <JSXtoPDF />;
  // };

  const printHandler = () => {
    const printElement = ReactDOMServer.renderToString(
      <JSXtoPDF
        basicInfo={basicInfo}
        skillsList={skillsList}
        projectsList={projectList}
      />
    );

    const opt = {
      pagebreak: "avoid",
    };

    html2pdf().set(opt).from(printElement).save();
  };

  return (
    <>
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
            <Education saveEducation={saveEducation} />
          </form>
        </div>

        {/* PDF Render */}

        <button onClick={printHandler}>Save PDF</button>

        <JSXtoPDF
          basicInfo={basicInfo}
          skillsList={skillsList}
          projectsList={projectList}
          education={education}
        />
      </main>
    </>
  );
}

export default App;
