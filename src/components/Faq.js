import QandA from "./QandA";
import faqData from "../faqData";

const Faq = () => {

  return (
    <div className="container">
      <header className="faq">Frequently Asked Questions</header>
      
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