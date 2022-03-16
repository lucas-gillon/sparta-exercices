import React from "react";

const Form = () => {
  const [firstName, setFirstName] = React.useState("");
  const [hasError, setHasError] = React.useState(false);
  React.useEffect(() => {
    if (regex.test(firstName) === false) {
      setHasError(false);
    } else {
      setHasError(true);
    }
  }, [firstName]);

  let warning;
  const regex = new RegExp(" ", "gm");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (regex.test(firstName) === false) {
      warning = <p>bon</p>;
      console.log(warning.props.children);
      setHasError(false);
      return warning;
    } else {
      warning = <p>mauvais</p>;
      console.log(warning.props.children);
      setHasError(true);
      return warning;
    }
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
      </div>
      {hasError ? <p>no spaces allowed</p> : ""}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
