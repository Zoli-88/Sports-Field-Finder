import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

export function FAQLogic({question, answer}) {

const [isOpen, setIsOpen] = useState(false);

 return (
  
  
   <div className="faqWrapper">
          <div className="faqContainer" onClick = {() => setIsOpen(!isOpen)}>
          <div><p className="questions">{question}</p></div>
          <div>{isOpen ?  <FaMinusCircle className="minusCircleIcon"/> : <FaPlusCircle className="plusCircleIcon"/>}</div>
          
          </div>

        {isOpen && (<div className="answers"><p>{answer}</p></div>)}
   </div>
   
  
 )
        }