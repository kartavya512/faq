import { useState } from "react";
import Woman from "../src/assets/images/illustration-woman-online-mobile.svg";
import A from "../src/assets/images/illustration-box-desktop.svg";
import Arrow from "../src/assets/images/icon-arrow-down.svg";

import "./App.css";

function App() {
  const [show, setshow] = useState(false);
  const [active, setactive] = useState(null);

  const quest_ans = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan.There is no limit on team members for the Premium plan.",
      id: 1,
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
      id: 2,
    },
    {
      question: "How do I reset my password?",
      answer:
        "Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
      id: 3,
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
      id: 4,
    },
    {
      question: "Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
      id: 5,
    },
  ];
  return (
    <div className="gradient flex justify-center items-center h-screen">
      <div className="bg-white lg:w-3/4 w-[75%] bg-fixed rounded-2xl">
        <div className="flex lg:flex-row flex-col justify-center">
          <div> 
            <img className=" h-[20rem]  lg:mt-14 lg:-ml-10 ml-28 -mt-36" src={Woman}></img>
          </div>
          <div className="lg:w-1/2 m-10">
            <div className="text-4xl font-bold ">FAQ</div>
            <div className="lg:mt-5 mt-5">
              {quest_ans.map((data) => (
                <>
                <div className="flex justify-between lg:text-lg text-xl">
                  <div>{
                    active===data.id ?<div className=" mt-5 text-black font-bold">{data.question} </div>:
                    <div className="question mt-5 hover:text-red-500">{data.question}</div>
                   }
                    {active === data.id && (
                      <div className="question mt-3">{data.answer}</div>
                    )}
                  </div>
                  <img
                    className="h-3 mt-5"
                    onClick={
                      active === data.id
                        ? () => setactive(null)
                        : () => setactive(data.id)
                    }
                    src={Arrow}
                  ></img>
                </div>
                <hr className="mt-5"></hr></>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
