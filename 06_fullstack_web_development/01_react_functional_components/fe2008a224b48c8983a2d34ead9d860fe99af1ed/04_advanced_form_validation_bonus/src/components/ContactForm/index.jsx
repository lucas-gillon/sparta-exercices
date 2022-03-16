import React from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [firstNameError, setfirstNameError] = React.useState(false);
  const [lastNameError, setlastNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);

  const nameRegex = /^[_A-zàâäèéëêïîöôûüù]+((-|\s)*[_A-zàâäèéëêïîöôûüù])*$/gi;
  // const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  // const messageRegex = /^.{20,400}$/

  React.useEffect(() => {
    if (nameRegex.test(firstName) === false) {
      setfirstNameError(false);
    } else  {
      setfirstNameError(true);
    }
  }, [firstName]);
  // React.useEffect(() => {
  //   if (nameRegex.exec(lastName) === false) {
  //     setlastNameError(false);
  //   } else {
  //     setlastNameError(true);
  //   }
  // }, [lastName]);
  // React.useEffect(() => {
  //   if (emailRegex.exec(email) === false) {
  //     setEmailError(false);
  //   } else {
  //     setEmailError(true);
  //   }
  // }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First Name</label>
        <input
          className="form-control"
          placeholder="First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        {
          firstNameError
          ?
          <p>
            Minimum 1 letter, no special characters expect '-' or space between words
          </p>
           :
           ""
        }
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          className="form-control"
          placeholder="First Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        {
          lastNameError
          ?
          <p>
            Minimum 1 letter, no special characters expect '-' or space between words
          </p>
           :
           ""
        }
      </div>
      <div className="form-group">
        <label>First Name</label>
        <input
          className="form-control"
          placeholder="First Name"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        {
          emailError
          ?
          <p>
            Minimum 1 letter, no special characters expect '-' or space between words
          </p>
           :
           ""
        }
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
