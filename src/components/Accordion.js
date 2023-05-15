import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

function Accordion({ question, answer }) {
  return (
    <div>
      <div className="flex">
        <div>
        <p>{question}</p>
        </div>
        <div>
          <ChevronDownIcon className="w-10" />
        </div>
      </div>
      <div></div>
      <p>{answer}</p>
    </div>
  );
}

export default Accordion;
