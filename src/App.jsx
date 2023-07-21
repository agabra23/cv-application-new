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

  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <main>
        <div className="input-section">
          <form action="">
            <BasicInfo basicInfo={basicInfo} saveChanges={saveChanges} />
            <Skills />
            <Projects />
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
          <p>{basicInfo.website}</p>
        </div>
      </main>
    </>
  );
}

export default App;
