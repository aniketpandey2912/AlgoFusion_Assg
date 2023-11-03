import React from "react";
const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
}) => {
  return (
    <div>
      {/* Add tip Amount and total here */}
      <div className="tipAmount">
        <p>Tip Amount / person</p>
        <p>{tipAmount}</p>
      </div>

      <div className="TotalAmount">
        <p>Total / person</p>
        <p>{total}</p>
      </div>
      {/* Add button to RESET */}
      <button className="Reset">RESET</button>
    </div>
  );
};

export default RightBox;
