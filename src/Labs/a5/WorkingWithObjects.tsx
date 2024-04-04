import React from "react";

function WorkingWithObjects() {
  const handleRedirect = () => {
    window.location.href = "http://localhost:4000/a5/assignment";
  };

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <button onClick={handleRedirect} className="btn btn-primary">Get Assignment</button>
    </div>
  );
}

export default WorkingWithObjects;
