import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState("");
  
  const handleChange = (e) => {
    setCity(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city)
  }

  return (

    <form onSubmit={handleSubmit}>

      <div className='input'>
      <input
        class="form-control mr-sm-2"
        type="text"
        placeholder="City..."
        aria-label="Search"
        value={city}
        onChange={handleChange}
      />

      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
    </form>
    
  );
}
