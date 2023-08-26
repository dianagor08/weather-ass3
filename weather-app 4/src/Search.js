import React, { useState } from "react";
import Select from "./Select";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [setCel] = useState(null);
  const searchResults = []; // Placeholder for search results

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("The form submitted with input: " + searchTerm);
    setCel(() => (searchTerm - 32) / 1.8);
    event.preventDefault();
  };

  return (
    <div className="container p-3 bg-success">
      <i className="text-danger fw-bold">Search component</i>
      <form onSubmit={handleSubmit} className="my-3 row g-3">
        <label className="col-sm-4 col-form-label">
          Please enter city name:
        </label>
        <div className="col-sm-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-sm-4">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary mb-3"
          />
        </div>
      </form>
      <Select data={searchResults} />
    </div>
  );
}

export default Search;
