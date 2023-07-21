import BasicInfo from "./components/BasicInfo";

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
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
