import React, { useState } from "react";
const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  const [tipPercent, setTipPercent] = useState("15%");
  return (
    <div>
      {/* Add input for bill */}
      <input type="text" className="bill_input" />
      {/* Add buttons for % of tip */}
      <button>5%</button>
      <button>10%</button>
      <button>15%</button>
      <button>25%</button>
      <button>50%</button>
      <input type="number" className="custom" value="Custom" />
      {/* Add input for no.of peoples */}
      <input type="number" className="people" value={1} />
    </div>
  );
};

export default LeftBox;
