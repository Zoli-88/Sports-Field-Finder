import { Nav } from "../../components/Nav"
import { Footer } from "../HomePage/Footer/Footer"
import {Partners} from "../HomePage/Partners/Partners"
import {FAQData} from "./FAQData";


export function FAQ() {
    return (
        <>
        <Nav/>
   <FAQData/>
<Partners/>
        <Footer/>
        </>
    )
}