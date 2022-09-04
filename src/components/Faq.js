import { useState } from "react";
import QandA from "./QandA";
import faqData from "../faqData";

const Faq = () => {

  return (
    <div className="container">
      <div className="faq">Frequently Asked Questions</div>
      
      {faqData.map((faq) => (
        <QandA 
        key={faq.id}
        data={faq}
        />
      ))}

    </div>
  )
}
export default Faq