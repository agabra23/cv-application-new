import BasicInfo from "./components/BasicInfo";
import Skills from "./components/Skills";

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
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
