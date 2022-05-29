

export function DateForecast(prop) {

const today = new Date();
   let tomorrow = new Date();
   tomorrow.setDate(today.getDate() + 1);
   let dayAfterTomorrow = new Date();
   dayAfterTomorrow.setDate(today.getDate() + 2);

   let dayOneAfterTomorrow = new Date()
   dayOneAfterTomorrow.setDate(today.getDate() + 3);
   
   let dayTwoAfterTomorrow = new Date();
   dayTwoAfterTomorrow.setDate(today.getDate() + 4);

   let dayThreeAfterTomorrow = new Date();
   dayThreeAfterTomorrow.setDate(today.getDate() + 5);

   let dayFourAfterTomorrow = new Date();
   dayFourAfterTomorrow.setDate(today.getDate() + 6);

   let dayFiveAfterTomorrow = new Date();
   dayFiveAfterTomorrow.setDate(today.getDate() + 7);

  


  
   return (
       <>

       <div>
        <p>{tomorrow.toLocaleString("en-US", {weekday: "short"})}</p>
        <p>{prop.tomorrowMinTemp}&deg;C {prop.tomorrowMaxTemp}&deg;C</p>
       </div>

       <div>
       <p>{dayAfterTomorrow.toLocaleString("en-US", {weekday: "short"})}</p>
       <p>{prop.dayAfterTomorrowMinTemp}&deg;C {prop.dayAfterTomorrowMaxTemp}&deg;C</p>
       </div>

       <div>
       <p>{dayOneAfterTomorrow.toLocaleString("en-US", {weekday: "short"})}</p>
       <p>{prop.dayOneAfterTomorrowMinTemp}&deg;C {prop.dayOneAfterTomorrowMaxTemp}&deg;C</p>
       </div>

       <div>
       <p>{dayTwoAfterTomorrow.toLocaleString("en-US", {weekday: "short"})}</p>
       <p>{prop.dayTwoAfterTomorrowMinTemp}&deg;C {prop.dayTwoAfterTomorrowMaxTemp}&deg;C</p>
       </div>

       <div>
       <p>{dayThreeAfterTomorrow.toLocaleString("en-US", {weekday: "short"})}</p>
       <p>{prop.dayThreeAfterTomorrowMinTemp}&deg;C {prop.dayThreeAfterTomorrowMaxTemp}&deg;C</p>
       </div>

       <div>
       <p>{dayFourAfterTomorrow.toLocaleString("en-US", {weekday: "short"})}</p>
       <p>{prop.dayFourAfterTomorrowMinTemp}&deg;C {prop.dayFourAfterTomorrowMaxTemp}&deg;C</p>
       </div>

       <div>
       <p>{dayFiveAfterTomorrow.toLocaleString("en-US", {weekday: "short"})}</p>
       <p>{prop.dayFiveAfterTomorrowMinTemp}&deg;C {prop.dayFiveAfterTomorrowMaxTemp}&deg;C</p>
       </div>

       
</>
   )

}