import { React, useState } from 'react';
import Person from '../assets/iconPerson.svg';
import Dollar from '../assets/iconDollar.svg';

export default function LeftPart({
  bill,
  tip,
  nbPeople,
  setBill,
  setTip,
  setNbPeople,
}) {
  const [customTip, setCustomTip] = useState(false);

  function changeTip(tip) {
    setTip(tip);
    setCustomTip(false);
  }

  return (
    <div className="leftPart">
      <div className="leftPartZone">
        <div className="label">
          <label htmlFor="bill">Bill</label>
          {bill < 0 ? <div className="errorPerson">Can't be negative</div> : ''}
        </div>
        <div className="input-field">
          <img src={Dollar} alt="" className="inputIcon" />
          <input
            type="number"
            id="bill"
            placeholder="0"
            required
            step={0.01}
            min={0}
            onChange={(e) => setBill(e.target.value)}
            value={bill}
          />
        </div>
      </div>

      <div className="leftPartZone">
        <label htmlFor="tip">Selected Tip %</label>
        <div className="tip-grid">
          <div
            className={`percent ${tip == 5 && !customTip ? 'selected' : ''}`}
            onClick={() => changeTip(5)}
          >
            5%
          </div>
          <div
            className={`percent ${tip == 10 && !customTip ? 'selected' : ''}`}
            onClick={() => changeTip(10)}
          >
            10%
          </div>
          <div
            className={`percent ${tip == 15 && !customTip ? 'selected' : ''}`}
            onClick={() => changeTip(15)}
          >
            15%
          </div>
          <div
            className={`percent ${tip == 25 && !customTip ? 'selected' : ''}`}
            onClick={() => changeTip(25)}
          >
            25%
          </div>
          <div
            className={`percent ${tip == 50 && !customTip ? 'selected' : ''}`}
            onClick={() => changeTip(50)}
          >
            50%
          </div>

          <input
            className="tip-custom"
            type="number"
            placeholder="Custom"
            value={customTip && tip}
            onChange={(e) => {
              setTip(e.target.value);
              setCustomTip(true);
            }}
          />
        </div>
      </div>

      <div className="leftPartZone">
        <div className="label">
          <label htmlFor="nbPeople">Number of People</label>
          {nbPeople <= 0 ? (
            <div className="errorPerson">Can't be zero</div>
          ) : (
            ''
          )}
        </div>
        <div className="input-field">
          <img src={Person} alt="" className="inputIcon" />
          <input
            type="number"
            id="nbPeople"
            placeholder="1"
            min={1}
            value={nbPeople}
            onChange={(e) => setNbPeople(e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
}
