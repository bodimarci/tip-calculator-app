import React, { useEffect, useState } from "react";
import logo from "./assets/logo.svg";

import CalculatedBill from "./components/CalculatedBill";
import AmountInput from "./components/AmountInput";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (bill > 0 && people > 0 && tip > 0) {
      setCalculatedTip((bill * (tip / 100)) / people);
      setTotal(bill / people + calculatedTip);
    }
  }, [bill, people, tip, calculatedTip]);

  const handleResetBtn = (e) => {
    setBill("");
    setTip("");
    setPeople("");
    setCalculatedTip(0);
    setTotal(0);
  };

  return (
    <>
      <main className='mx-auto grid min-h-screen w-full max-w-3xl place-items-center font-monospace font-[700]'>
        <section className=''>
          <div className='mb-16 mt-10 flex items-center justify-center sm:mt-0'>
            <img src={logo} alt='SPLITTER' />
          </div>
          <div className='mx-auto grid grid-cols-1 rounded-2xl bg-white p-3 drop-shadow-2xl sm:grid-cols-2 sm:p-7'>
            <AmountInput
              bill={bill}
              setBill={setBill}
              people={people}
              setPeople={setPeople}
              tip={tip}
              setTip={setTip}
            />
            <CalculatedBill
              bill={bill}
              total={total}
              setTotal={setTotal}
              calculatedTip={calculatedTip}
              setCalculatedTip={setCalculatedTip}
              handleResetBtn={handleResetBtn}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
