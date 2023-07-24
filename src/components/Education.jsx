export default function Education({ saveEducation }) {
  return (
    <fieldset>
      <legend>Education (Leave blank if none)</legend>

      <label htmlFor="degreeName">Degree Name</label>
      <input type="text" id="degreeName" onChange={saveEducation} />

      <label htmlFor="universityName">University Name</label>
      <input type="text" id="universityName" onChange={saveEducation} />

      <label htmlFor="educationStart">Start Month and Year</label>
      <input type="text" id="educationStart" onChange={saveEducation} />

      <label htmlFor="educationEnd">End Month and Year</label>
      <input type="text" id="educationEnd" onChange={saveEducation} />

      <label htmlFor="educationCity">City</label>
      <input type="text" id="educationCity" onChange={saveEducation} />
    </fieldset>
  );
}
