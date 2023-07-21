export default function BasicInfo() {
  return (
    <div className="basic-info-wrapper">
      <fieldset>
        <legend>Basic Info</legend>

        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" />
      </fieldset>
    </div>
  );
}
