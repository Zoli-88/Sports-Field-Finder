
import { FAQLogic } from "./FAQLogic";
import {FaEnvelope} from "react-icons/fa"
import {FaPhoneSquareAlt} from "react-icons/fa"

export function FAQData() {

const questionAnswers = [
  {
    question: "Is Sports Field Finder free to use?",
    number: 1,
    answer: "Yes. Sports Field Finder is free to use for registered and non-registered users alike."
  },
  {
    question: "Are property details accurate (rates, working hours etc.)?",
    number: 2,
    answer: "Information regarding the properties listed on Sports Field Finder is constantly updated in accordance with the details sent to us by the owners."
  },
  {
    question: "What extra features do you provide for registered users?",
    number: 3,
    answer: "Registered users can add and remove properties to / from their favorite list and use a personal Body Mass Index calculator."
  },
  {
    question: "There is a weather widget on your app. Is it accurate?",
    number: 4,
    answer: "Yes. It is using the same sources other popular weather web / mobile apps use."
  },
  {
    question: "Am I able to book a property through your website?",
    number: 5,
    answer: "We are planning to implement this feature in the near future."
  }
]

 return (
   <>
   <div className="faqTitleContainer"><h1 className="faqTitle">Frequently Asked Questions</h1></div>
   <div className="faqParagraphContainer"><p className="faqParagraph">Should you have any questions regarding our app or services feel free to check out our FAQ section below. You can always reach us either by phone: <span className="spanFaqParagraphIcons"><FaPhoneSquareAlt className="phoneIcon"/></span> +40 0364 563 981 or <span className="spanFaqParagraphIcons"><FaEnvelope className="emailIcon"/></span> e-mail: office@sff.ro. We will do our best to assist you as swiftly as possible.</p></div>
   <div className="faqDropdown">
     {questionAnswers.map((questionAnswer) => 
          <FAQLogic key={questionAnswer.number} {...questionAnswer}/>
          )}
   </div>
   </>
 )
}
