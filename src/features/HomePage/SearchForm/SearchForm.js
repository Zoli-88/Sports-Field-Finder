
import { useState } from "react"
import { Link } from "react-router-dom";

export function SearchForm() {

  const [selectedSport, setSelectedSport] = useState("Football");

  function handleSelectChange(e) {
setSelectedSport(e.target.value);
  }
  


    return (
        <div className="form">
  <form >
  <label className="label" htmlFor="sports">Choose a sport:</label>

<select value={selectedSport} onChange={handleSelectChange} className="dropdown" name="sports" id="sports">
  <option className="option" value="football">Football</option>
  <option className="option" value="tennis">Tennis</option>
  <option className="option" value="basketball">Basketball</option>
  <option className="option" value="table-tennis">Table tennis</option>
</select>
<Link to={`/sports/${selectedSport}`}><button className="searchButton" type="submit">Search</button></Link>
  </form>
</div>
    )
}