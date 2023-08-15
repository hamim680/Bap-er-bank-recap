// 1.add even listener to deposit btn
// 2.get deposit amount from the deposit input field 
// 3.clear the deposit input field

// 4. convert deposit value string to number 
// 5.get the previous deposit total 
// 6. calculate and set the new value
// 7. get current balance total
// 8. calculate the  new balance and set it balance total Element

// 9
    //  step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountString = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step-3
    depositInput.value = '';

    if(isNaN(newDepositAmount)){
        return alert('Please Deposit a minimum value')
    }

    // step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    // step-5
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-6
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step-7
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-8
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})