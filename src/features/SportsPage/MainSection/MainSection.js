import footballCover from  "./../../../Images/Sport-Categories-Background/sport-categories-background-football.jpg"
import basketballCover from  "./../../../Images/Sport-Categories-Background/sport-categories-background-basketball.jpg"
import tennisCover from  "./../../../Images/Sport-Categories-Background/sport-categories-background-tennis.jpg"
import tableTennisCover from  "./../../../Images/Sport-Categories-Background/sport-categories-background-table-tennis.jpg"
import { Link } from "react-router-dom"


export function MainSection() {
    return (
        <main className="sportCategoriesBackground">
        <h1 className="sportCategoriesHeading">Categories</h1>

        <div className="sportCategoriesContainer">

       
     
     
      
       <div className="sportCategoriesSubContainer">
           <Link className="sportCategoriesLink" to="/sports/football">
               <img src={footballCover} alt="football"></img> 
               <p className="sportCategoriesOverlayText">Football</p>
               </Link>
               </div>

               <div className="sportCategoriesSubContainer">
           <Link className="sportCategoriesLink" to="/sports/basketball">
               <img src={basketballCover} alt="basketball"></img> 
               <p className="sportCategoriesOverlayText">Basketball</p>
               </Link>
               </div>

               <div className="sportCategoriesSubContainer">
           <Link className="sportCategoriesLink" to="/sports/tennis">
               <img src={tennisCover} alt="tennis"></img> 
               <p className="sportCategoriesOverlayText">Tennis</p>
               </Link>
               </div>

               <div className="sportCategoriesSubContainer">
           <Link className="sportCategoriesLink" to="/sports/table-tennis">
               <img src={tableTennisCover} alt="table-tennis"></img> 
               <p className="sportCategoriesOverlayText">Table-Tennis</p>
               </Link>
               </div>
                


        </div>
        </main>
        
    )
}