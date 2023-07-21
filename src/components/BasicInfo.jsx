export default function BasicInfo() {
  return (
    <div className="basic-info-wrapper">
      <fieldset>
        <legend>Basic Info</legend>

        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="phone" id="phoneNumber" />

        <label htmlFor="website">Website or LinkedIn URL</label>
        <input type="text" id="website" />
      </fieldset>
    </div>
  );
}
