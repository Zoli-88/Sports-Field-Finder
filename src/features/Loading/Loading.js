import {AiOutlineLoading3Quarters} from "react-icons/ai"


export function Loading() {
    return (
        <div className="loadingContainer">
            <p>Loading, please wait...</p>
            <div>
<AiOutlineLoading3Quarters className="loadingCircle"/>
            </div>
        </div>
    )
}