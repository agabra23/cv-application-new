import BasicInfo from "./components/BasicInfo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <main>
        <div className="input-section">
          <form action="">
            <BasicInfo />
            <Skills />
            <Projects />
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
