import { useState, useEffect } from 'react';
import './App.css';
import Logo from './assets/logo.svg';
import LeftPart from './components/LeftPart';
import RightPart from './components/RightPart';

function App() {
  const [tip, setTip] = useState();
  const [bill, setBill] = useState();
  const [nbPeople, setNbPeople] = useState();
  const [tipAmount, setTipAmount] = useState(0.0);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    let amount = (parseInt(tip) / 100) * parseInt(bill);
    let amountPerPerson = amount / parseInt(nbPeople);

    let totalPerPerson = (parseInt(bill) + amount) / parseInt(nbPeople);
    // console.log(totalPerPerson);
    setTotal(totalPerPerson);

    setTipAmount(amountPerPerson);
  }, [tip, bill, nbPeople]);

  function reset() {
    setTip('');
    setBill('');
    setNbPeople('');
  }
  return (
    <div className="App">
      <img src={Logo} alt="Logo" />

      <div className="card">
        <LeftPart
          bill={bill}
          tip={tip}
          nbPeople={nbPeople}
          setBill={setBill}
          setNbPeople={setNbPeople}
          setTip={setTip}
        />

        <RightPart tipAmount={tipAmount} total={total} reset={reset} />
      </div>
    </div>
  );
}

export default App;
