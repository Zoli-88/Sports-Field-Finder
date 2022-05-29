
import {FaLongArrowAltRight} from "react-icons/fa"

export function MainSectionAbout() {

return(
    <>
<div className="secondContainer" >
   <h1>Promoting a healthier lifestyle</h1>
   <p><span className="spanSportsFieldFinder">Sports Field Finder</span> started out as a small project with a simple mission &mdash; bring people and sports together. Let's face it: most of us have busy and hectic schedules therefore we often forget to take some time out of our day to relax and unwind.</p>
   </div>
   <div className="thirdContainerBackground aboutBenefits">
       <h1>Benefits of using SFF</h1>
       <h2>For everyone</h2>
       <ul>
           <li><i><FaLongArrowAltRight/></i>Free and easy to use</li>
           <li><i><FaLongArrowAltRight/></i>Detailed and updated information</li>
           <li><i><FaLongArrowAltRight/></i>7 day weather forecast</li>
           <li><i><FaLongArrowAltRight/></i>Google Maps location for all available sports units</li>
           
       </ul>
       <h2>For our registered users</h2>
       <ul>
       <li><i><FaLongArrowAltRight/></i>Personal profile page</li>
           <li><i><FaLongArrowAltRight/></i>Add, edit or remove a sport unit to/from My Favorites List </li>
           <li><i><FaLongArrowAltRight/></i>Use our free BMI (Body Mass Index) calculator</li>
       </ul>
       
   </div>
   
   </>
)
}