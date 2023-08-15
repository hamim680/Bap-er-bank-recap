document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawInput.value = '';

    if(isNaN(newWithdrawAmount)){
        return alert('Please withdraw a minimum value')
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})