import {useState, useEffect} from "react";
import { GiSoccerBall } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Nav } from "../../../../components/Nav";
import { Footer } from "../../../HomePage/Footer/Footer";
import { Loading } from "../../../Loading/Loading";


export function Football() {

    const [footballfields, setFootballFields] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3005/football").then(res => res.json()).then((data) => setFootballFields(data));

    }, [])

    if(!footballfields) {
        return <Loading/>
    }

    return (
        <>
        <Nav/>
        <header className="listHeaderContainer">
        <h1 className="listTitle">Football Courts <GiSoccerBall className="soccerBallIcon"/></h1>
        <p className="listIntroductionText">Good choice! We have a few options for you. Click on one of the cards below to find out more information about rates, facilities and contact details or <span><Link className="spanSportsLink spanSports" to="/sports">go back</Link></span> to the sports page if you changed your mind. </p>
        </header>
        <div className="listContainer">
        {footballfields.map(footballfields => (
        <div className="listItems" key={footballfields.id}>
            
            <Link className="listItemLinks" to={`/sports/football/${footballfields.id}`}>
                
            <img src={footballfields.images} alt={`Poster of ${footballfields.name}`}></img>
            <p>{footballfields.name}</p></Link>
           
        </div>
        ))}
        </div>
        <Footer/>
        </>
    )
}