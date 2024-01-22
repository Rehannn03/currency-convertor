import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency="inr",
    className = "",
}) {
   
    return (
        <div className={`bg-white p-3 rounded-lg text-md flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black font-medium mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5 text-black/80"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black font-medium mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black/80 font-medium"
                    value={selectedCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                >

                        
                        {currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}

                </select>
            </div>
        </div>
    );
}
export default InputBox;


