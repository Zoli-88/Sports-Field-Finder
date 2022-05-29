import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaHome} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"
import {FaPhoneSquareAlt} from "react-icons/fa"
import {FaBasketballBall} from "react-icons/fa"
import {FaTableTennis} from "react-icons/fa"
import {GiSoccerBall, GiTennisRacket} from "react-icons/gi"
import { Link } from "react-router-dom"


export function Footer() {

return (
<>
<footer className="footer">
    <div>
<h2>Sports Field Finder</h2>
<p><FaHome className="homeIcon"/> Plopilor St, No 58, Cluj-Napoca</p>
<p><FaEnvelope className="emailIcon"/> office@sff.ro</p>
<p><FaPhoneSquareAlt className="phoneIcon"/> +40 0364 563 981</p>
</div>

<div>
<h2>Sports</h2>
<ul>
    <li><GiSoccerBall/><span><Link className="spanSportsLink spanSports" to="/sports/football">Football</Link></span></li>
    <li><GiTennisRacket/><span><Link className="spanSportsLink spanSports" to="/sports/tennis">Tennis</Link></span></li>
    <li><FaBasketballBall/><span><Link className="spanSportsLink spanSports" to="/sports/basketball">Basketball</Link></span></li>
    <li><FaTableTennis/><span><Link className="spanSportsLink spanSports" to="/sports/table-tennis">Table-Tennis</Link></span></li>
</ul>
</div>

<div>
<h2>Social Media</h2>
<p>Hey! Do you follow us on social media? You could win free stuff! We often do giveaways and promote special offers - just for our followers!</p>
<div className="socialIcons">
<a target="_blank" rel="noreferrer" href="https://facebook.com"><i><FaFacebookF/></i></a>
<a target="_blank" rel="noreferrer" href="https://twitter.com"><i><FaTwitter/></i></a>
<a target="_blank" rel="noreferrer" href="https://linkedin.com"><i><FaLinkedinIn/></i></a>
<a target="_blank" rel="noreferrer" href="https://youtube.com"><i><FaYoutube/></i></a>
</div>
</div>


</footer>
</>

)

}