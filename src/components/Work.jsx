import { useState } from "react";

export default function Work({ jobList, addJob }) {
  const [jobTitleInput, setJobTitleInput] = useState("");
  const [jobCompany, setJobCompany] = useState("");
  const [jobStart, setJobStart] = useState("");
  const [jobEnd, setJobEnd] = useState("");
  const [jobBulletInput, setJobBulletInput] = useState("");
  const [jobDescriptionList, setJobDescriptionList] = useState([]);

  const saveJobTitle = (e) => {
    setJobTitleInput(e.target.value);
  };

  const saveCompany = (e) => {
    setJobCompany(e.target.value);
  };

  const saveStart = (e) => {
    setJobStart(e.target.value);
  };
  const saveEnd = (e) => {
    setJobEnd(e.target.value);
  };
  const saveJobDescription = (e) => {
    setJobBulletInput(e.target.value);
  };

  const addDescriptionBullet = (e) => {
    e.preventDefault();

    setJobDescriptionList([...jobDescriptionList, jobBulletInput]);
    setJobBulletInput("");
  };

  const deleteBullet = (index) => {
    const tempList = [...jobDescriptionList];
    tempList.splice(index, 1);
    setJobDescriptionList(tempList);
  };

  const bullets = jobDescriptionList.map((bullet, index) => {
    return (
      <div key={crypto.randomUUID()}>
        <li>{bullet}</li>
        <button onClick={() => deleteBullet(index)}>Remove</button>
      </div>
    );
  });

  const saveJob = (e) => {
    e.preventDefault();

    if (jobTitleInput === "") return;
    if (jobDescriptionList.length === 0) return;

    addJob([
      ...jobList,
      {
        title: jobTitleInput,
        company: jobCompany,
        description: jobDescriptionList,
        start: jobStart,
        end: jobEnd,
      },
    ]);

    setJobTitleInput("");
    setJobDescriptionList([]);
    setJobBulletInput("");
  };

  const jobs = jobList.map((job) => {
    const jobBullets = job.description.map((bullet) => {
      return <li key={crypto.randomUUID()}>{bullet}</li>;
    });

    return (
      <div key={crypto.randomUUID()}>
        <li>{job.title}</li>
        <ul>{jobBullets}</ul>
      </div>
    );
  });

  return (
    <fieldset className="work-wrapper">
      <legend>Work History</legend>

      <label htmlFor="jobTitle">Job Title</label>
      <input
        type="text"
        value={jobTitleInput}
        id="jobTitle"
        onChange={saveJobTitle}
      />

      <label htmlFor="companyInput">Company</label>
      <input
        type="text"
        id="companyInput"
        value={jobCompany}
        onChange={saveCompany}
      />

      <label htmlFor="jobStart">Job Start</label>
      <input type="text" id="jobStart" value={jobStart} onChange={saveStart} />

      <label htmlFor="jobEnd">Job End</label>
      <input type="text" id="jobEnd" value={jobEnd} onChange={saveEnd} />

      <label htmlFor="jobBulletInput">Job Bullet Point</label>
      <input
        type="text"
        id="jobBulletInput"
        value={jobBulletInput}
        onChange={saveJobDescription}
      />

      <button onClick={addDescriptionBullet} id="addWorkBullet">
        Add Bullet Point
      </button>

      <ul>{bullets}</ul>

      <button className="add-btn" onClick={saveJob}>
        Add Job
      </button>

      <ul>{jobs}</ul>
    </fieldset>
  );
}
