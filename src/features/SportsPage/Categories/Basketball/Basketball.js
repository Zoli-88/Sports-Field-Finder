import {useState, useEffect} from "react";
import { FaBasketballBall } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Nav } from "../../../../components/Nav";
import { Footer } from "../../../HomePage/Footer/Footer";
import { Loading } from "../../../Loading/Loading";

export function Basketball() {

    const [basketballFields, setBasketballFields] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3005/basketball").then(res => res.json()).then((data) => setBasketballFields(data));

    }, [])

    if(!basketballFields) {
        return <Loading/>
    }

    return (
        <>
        <Nav/>
        <header className="listHeaderContainer">
        <h1 className="listTitle">Basketball Courts <FaBasketballBall className="basketBallIcon"/></h1>
        <p className="listIntroductionText">Nice one! Click on one of the cards below to find out more information about rates, facilities and contact details or <span><Link className="spanSportsLink spanSports" to="/sports">go back</Link></span> to the sports page if you changed your mind. </p>
        </header>
        <div className="listContainer">
        {basketballFields.map(basketballFields => (
        <div className="listItems" key={basketballFields.id}>
            
            <Link className="listItemLinks" to={`/sports/basketball/${basketballFields.id}`}>
                
            <img src={basketballFields.images} alt={`Poster of ${basketballFields.name}`}></img>
            <p>{basketballFields.name}</p></Link>
           
        </div>
        ))}
        </div>
        <Footer/>
        </>
    )
}