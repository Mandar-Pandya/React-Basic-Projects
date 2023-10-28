import React from "react";
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'inr',
    amountDisable = false,



    
    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-left flex `}>
            <div className="w-1/2">
                <label  className="text-black/70    mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5 text-black"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value = {amount}
                    onChange = {(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/70 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-blue-100 cursor-pointer outline-none text-neutral-500"
                    value = {selectCurrency}
                    onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    
                        {currencyOptions.map((currency) => (

                        
                            <option key ={currency} value={currency} > 
                                {currency}
                            </option>
                        
                        ))}
                
                </select>
            </div>
        </div>
    );
}


export default InputBox