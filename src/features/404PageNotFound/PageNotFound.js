import {FaGhost} from "react-icons/fa"
import { Link } from "react-router-dom"


export function PageNotFound() {

return (
<main className="pageNotFound">
    
    
    <h1>4<span><i><FaGhost/></i></span>4</h1>
    <h2>Error: 404 page not found</h2>
    <p>Sorry, the page you're looking for cannot be accessed.</p>
    <Link className="pageNotFoundLink" to="/">BACK TO HOME</Link>
</main>
)


}