import { Nav } from "../../components/Nav"
import { Footer } from "../HomePage/Footer/Footer"
import { FaPhoneSquareAlt, FaEnvelope, FaHome } from "react-icons/fa"
import { Map } from "../Map/Map"

export function Contact() {

    return (
        <>
        <Nav/>
        <header className="contactPageHeader">
        <h1>Contact</h1>
        </header>
        <main className="contactPageContainer">

        <div>
            <div className="contactInfoContainer">
            <h2>We would love to hear from you!</h2> 
            <p>Monday &mdash; Friday: <span className="contactHoursSpan">9am to 5pm</span></p>
            <p><span className="spanFaqParagraphIcons"><FaPhoneSquareAlt className="phoneIcon" /></span> Phone +40 0364 563 981</p>
            <p><span className="spanFaqParagraphIcons"><FaEnvelope className="emailIcon"/></span> E-mail: office@sff.ro</p>
            <p><span className="spanFaqParagraphIcons"><FaHome className="homeIcon"/></span> Adress: Plopilor St, No 58, Cluj-Napoca</p>
            <p>We will do our best to assist you as swiftly as possible.</p>
            </div>
        </div>

        <div className="contactPageMap">
<Map longitude="23.55772" latitude="46.76285" name="Sports Field Finder"/>
        </div>
        </main>
        <Footer/>
        </>
    )
}