import {useState, useEffect} from "react";
import { GiTennisRacket } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Nav } from "../../../../components/Nav";
import { Footer } from "../../../HomePage/Footer/Footer";
import { Loading } from "../../../Loading/Loading";

export function Tennis() {

    const [tennisFields, setTennisFields] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3005/tennis").then(res => res.json()).then((data) => setTennisFields(data));

    }, [])

    if(!tennisFields) {
        return <Loading/>
    }

    return (
        <>
        <Nav/>
        <header className="listHeaderContainer">
        <h1 className="listTitle">Tennis Courts <GiTennisRacket className="tennisIcon"/></h1>
        <p className="listIntroductionText">You don't need to bring your racket! Click on one of the cards below to find out more information about rates, facilities and contact details or <span><Link className="spanSportsLink spanSports" to="/sports">go back</Link></span> to the sports page if you changed your mind. </p>
        </header>
        <div className="listContainer">
        {tennisFields.map(tennisFields => (
        <div className="listItems" key={tennisFields.id}>
            
            <Link className="listItemLinks" to={`/sports/tennis/${tennisFields.id}`}>
                
            <img src={tennisFields.images} alt={`Poster of ${tennisFields.name}`}></img>
            <p>{tennisFields.name}</p></Link>
           
        </div>
        ))}
        </div>
        <Footer/>
        </>
    )
}