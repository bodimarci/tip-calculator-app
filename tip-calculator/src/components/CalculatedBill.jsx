import React from "react";

const CalculatedBill = ({bill, calculatedTip, total, handleResetBtn }) => {
  const returnCurrencyAmt = (amt) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amt);
  };

  return (
    <section className='relative mt-10 rounded-2xl bg-[#00494D] p-6 sm:ml-3 sm:mt-0'>
      <div className='grid grid-cols-2'>
        <div>
          <p className='text-sm text-[#F4FAFA] sm:text-base'>
            Tip Amount <br />
            <span className='text-sm text-[#7F9C9F] sm:text-base '>
              / person
            </span>
          </p>
        </div>
        <div>
          <p className='text-right text-2xl text-[#26C0AB] sm:text-4xl'>
            {returnCurrencyAmt(calculatedTip)}
          </p>
        </div>

        <div className='mt-5'>
          <p className='text-sm text-[#F4FAFA] sm:text-base'>
            Total <br />
            <span className='text-sm text-[#7F9C9F] sm:text-base'>
              / person
            </span>
          </p>
        </div>
        <div className={`${bill.value < 10000 ? 'mt-40' : 'mt-5'}`}>
          <p className='text-right text-2xl text-[#26C0AB] sm:text-4xl'>
            {returnCurrencyAmt(total)}
          </p>
        </div>
        
        
      </div>
      <button
        onClick={handleResetBtn}
        className={`${
          total == 0
            ? "resetBtn"
            : "resetBtn cursor-pointer bg-[#26C0AB] duration-200 hover:bg-[#9FE8DF]"
        }`}
      >
        RESET
      </button>
    </section>
  );
};

export default CalculatedBill;
