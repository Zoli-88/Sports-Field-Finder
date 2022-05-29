export function CurrentDate() {
   
   
   const today = new Date();
    return today.toLocaleString("en-US", {weekday: "long", month: "short", day: "2-digit"});
   
  
   

}
