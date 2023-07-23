import "../styles/JSXtoPDF.css";

export default function JSXtoPDF({ basicInfo }) {
  return (
    <div className="pdf-page" size="A4">
      <div className="pdf-header">
        <h1>{basicInfo.fullName}</h1>
        <h2>
          <em>Software Engineer</em>
        </h2>
      </div>
      <div className="pdf-body">
        <div className="left-column">
          <h2>Hello React</h2>
        </div>
        <div className="main-body"></div>
      </div>
    </div>
  );
}
