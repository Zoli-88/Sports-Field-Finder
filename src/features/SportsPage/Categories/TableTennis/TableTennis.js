import {useState, useEffect} from "react";
import { FaTableTennis } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Nav } from "../../../../components/Nav";
import { Footer } from "../../../HomePage/Footer/Footer";
import { Loading } from "../../../Loading/Loading";

export function TableTennis() {

    const [tableTennisFields, setTableTennisFields] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3005/table_tennis").then(res => res.json()).then((data) => setTableTennisFields(data));

    }, [])

    if(!tableTennisFields) {
        return <Loading/>
    }

    return (
        <>
        <Nav/>
        <header  className="listHeaderContainer">
        <h1 className="listTitle">Table Tennis <FaTableTennis className="tableTennisIcon"/></h1>
        <p className="listIntroductionText">Perfect choice for a rainy day! Click on one of the cards below to find out more information about rates, facilities and contact details or <span><Link className="spanSportsLink spanSports" to="/sports">go back</Link></span> to the sports page if you changed your mind. </p>
        </header>
        <div className="listContainer">
        {tableTennisFields.map(tableTennisFields => (
        <div className="listItems" key={tableTennisFields.id}>
            
            <Link className="listItemLinks" to={`/sports/table-tennis/${tableTennisFields.id}`}>
                
            <img src={tableTennisFields.images} alt={`Poster of ${tableTennisFields.name}`}></img>
            <p>{tableTennisFields.name}</p></Link>
           
        </div>
        ))}
        </div>
        <Footer/>
        </>
    )
}