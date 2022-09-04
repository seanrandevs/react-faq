import { useState } from "react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
const QandA = ({ data }) => {
   const [showAnswer, setShowAnswer] = useState(false);
   const toggle = () => {
      setShowAnswer(!showAnswer)
     }
  return (
    <>
    <div className="q-and-a">
       <h4 onClick={toggle} className="questions">{data.question}
       {showAnswer ? <BsDashLg /> : <BsPlusLg />}
       </h4>
       <p className={showAnswer ? "answers showAnswer" : "answers"}
       >{data.answer}</p>
    </div>
    </>
  )
}

export default QandA