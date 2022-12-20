import React from 'react';

export default function RightPart({ tipAmount, total, reset }) {
  return (
    <div className="rightPart">
      <div className="rightLine">
        <div className="rightPartPart">
          <p>Tip Amount</p>
          <p className="smallText">/ person</p>
        </div>

        <p className="result">${tipAmount ? tipAmount.toFixed(2) : '0.00'}</p>
      </div>
      <div className="rightLine">
        <div className="rightPartPart">
          <p>Total</p>
          <p className="smallText">/ person</p>
        </div>
        <p className="result">${total ? total.toFixed(2) : '0.00'}</p>
      </div>
      <button className="reset" onClick={reset}>
        RESET
      </button>
    </div>
  );
}
