import clubTransilvania from "./../../../Images/Logos/logo-club-transilvania.png"
import cmc from "./../../../Images/Logos/logo-baza-cmc.png"
import squash from "./../../../Images/Logos/logo-sport-time-arena.png"
import winners from "./../../../Images/Logos/logo-winners.png"
import arena from "./../../../Images/Logos/squash-logo.jpg"
import unirea from "./../../../Images/Logos/logo-unirea.png"



export function Partners() {

    return (
        <>
            

<div className="partnersContainer">
           
            <h2>Some of our Partners</h2>
            
            <div className="partners">
            <img src= {arena} alt="arena-logo"/>
            <img src= {clubTransilvania} alt="club-transilvania-logo"/>
            <img src= {winners} alt="winners-logo"/>
            <img src= {cmc} alt="cmc-logo"/>
            <img src= {squash} alt="squash-logo"/>
            <img src= {unirea} alt="unirea-logo"/>

            </div>

            </div>

           
            
</>
           
      
    )
}