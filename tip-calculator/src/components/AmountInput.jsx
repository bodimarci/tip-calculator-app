import React from "react";
import dollarSign from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

const AmountInput = ({ bill, setBill, people, setPeople, tip, setTip }) => {
  const handleSelectedTip = (e) => {
    setTip(e.target.value);
  };

  return (
    <section className='sm:mr-3'>
      <div>
        <p className='inputName'>Bill</p>
        <i>
          <img src={dollarSign} alt='$' className='absolute p-3.5' />
        </i>
        <input
          value={bill}
          id='bill'
          type='text'
          placeholder='0'
          className='numberInput'
          onInput={(e) => setBill(e.target.value)}
        />
      </div>
      <div className='mt-8'>
        <p className='inputName'>Select Tip %</p>
        <div className='grid grid-cols-2 sm:grid-cols-3'>
          <button
            onClick={handleSelectedTip}
            id='input1'
            name='tip'
            value='5'
            className='tipbutton'
          >
            5%
          </button>
          <button
            onClick={handleSelectedTip}
            name='tip'
            value='10'
            className='tipbutton'
          >
            10%
          </button>
          <button
            onClick={handleSelectedTip}
            name='tip'
            value='15'
            className='tipbutton'
          >
            15%
          </button>
          <button
            onClick={handleSelectedTip}
            name='tip'
            value='25'
            className='tipbutton'
          >
            25%
          </button>
          <button
            onClick={handleSelectedTip}
            name='tip'
            value='50'
            className='tipbutton'
          >
            50%
          </button>
          <input
            value={tip}
            onInput={handleSelectedTip}
            type='text'
            placeholder='Custom'
            className='m-1 rounded-lg bg-gray-100 p-3 text-right outline-none placeholder:text-center placeholder:text-[#00494D]  focus:border-2 focus:border-[#26C0AB]'
          />
        </div>
      </div>
      <div className='mt-8'>
        <ul className='flex justify-between'>
          <p className='inputName'>Number of People</p>
          <label
            className={`${
              bill > 0 && tip > 0 && people == 0 ? "errorMsg" : "hidden"
            }`}
          >
            Can't be zero
          </label>
        </ul>
        <i>
          <img src={personIcon} alt='$' className='absolute p-3.5' />
        </i>
        <input
          value={people}
          id='people'
          type='text'
          className={`${
            bill > 0 && tip > 0 && people == 0
              ? "numberInput border-2 border-red-400"
              : "numberInput  "
          }`}
          placeholder='0'
          onInput={(e) => setPeople(+e.target.value)}
        />
      </div>
    </section>
  );
};

export default AmountInput;
