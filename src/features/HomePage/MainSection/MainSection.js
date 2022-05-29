import tennis from "./../../../Images/Tennis/tennis-club-ciprian-porumb-1.jpeg"
import football from "./../../../Images/Football/cmc-synthetic-field.jpeg"
import tableTennis from "./../../../Images/Table-tennis/table-tennis.jpeg"
import { SearchForm } from "../SearchForm/SearchForm"
import { Link } from "react-router-dom"


export function MainSection() {

    return (
        <>
            <div className="secondContainer" >
            <h1>How it works</h1>
<p>Our web app provides a collection of all of the sports units located in Cluj-Napoca along with detailed descriptions which include location, rates, woking hours and more. Users can find available facilities by navigating to our <Link className="spanSportsLink"to="/sports"><span className="spanSports">Sports</span></Link> section or by using our search form below.</p>
<SearchForm />
<p>We also provide a 7 day weather forecast so you know if you need to pack your raincoat.</p>


            </div>


            <div className="thirdContainerBackground">
            <h2>Recently added Sport facilities</h2>
            
            <div className="thirdContainer">
                
            <div>
            <h4>CMC Sports Base - Synthetic Court 1</h4>
            <img src= {football} alt="cmc-synthetic-field"/>
<p>The CMC sports base in Cluj-Napoca offers for rent a synthetic football field with dimensions of 41x22m. Facilities: parking, terrace, bar, changing rooms, showers, WC, lighting, electronic scoreboard, balls and game shirts.</p>
            </div>
            <div>
            <h4>Tenis Club Cluj Ciprian Porumb 1</h4>
            <img src= {tennis} alt="ciprian-porumb-tennis-club"/>
<p>The club has two tennis courts, locker rooms, showers, a reception area and a refreshment area. In winter, the grounds are covered with a state-of-the-art double-walled balloon.</p>
            </div>
            <div>
            <h4>OH Sports Complex Table-tennis</h4>
            <img src= {tableTennis} alt="table-tennis"/>
<p>The main large hall has an area of 600 square meters. It is versatile, being equipped with everything necessary to practice a lot of indoor sports such as table-tennis, volleyball, basketball, badminton etc.</p>
            </div>
            </div>
            

            </div>
</>
           
      
    )
}