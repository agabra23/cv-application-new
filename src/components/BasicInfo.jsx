export default function BasicInfo({ saveChanges }) {
  return (
    <fieldset className="basic-info-wrapper">
      <legend>Basic Info</legend>

      <label htmlFor="fullName">Full Name</label>
      <input type="text" id="fullName" onChange={saveChanges} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={saveChanges} />

      <label htmlFor="phone">Phone Number</label>
      <input type="phone" id="phone" onChange={saveChanges} />

      <label htmlFor="website">Website or LinkedIn URL: https:/www.</label>
      <input type="text" id="website" onChange={saveChanges} />
    </fieldset>
  );
}
