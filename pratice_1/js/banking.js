document.getElementById('submit-deposit').addEventListener("click", function ()
{
    const inputDeposit = document.getElementById('deposit-input');
    const inputDepositValue = parseFloat(inputDeposit.value);
    if (inputDepositValue > 0) {
        const depositFixed = document.getElementById('deposit');
        const depositText = parseFloat(depositFixed.innerText);
        const currentDepositTotal = inputDepositValue + depositText;
        depositFixed.innerText = currentDepositTotal;
        const totalAmmount = document.getElementById('total-ammount');
        const totalAmmountValue = parseFloat(totalAmmount.innerText);
        const currentTotalAmmount = parseFloat(totalAmmountValue) + parseFloat(inputDepositValue);
        totalAmmount.innerText = currentTotalAmmount;
        inputDeposit.value = '';
    }
})
document.getElementById('submit-withdrow').addEventListener("click", function ()
{
    const inputWithdrow = document.getElementById('withdrow-input');
    const inputWithdrowValue = parseFloat(inputWithdrow.value);
    if (inputWithdrowValue > 0) {
        const withdrowFixed = document.getElementById('withdrow');
        const withdrowText = parseFloat(withdrowFixed.innerText);
        const currentWithdrowTotal = inputWithdrowValue + withdrowText;
        withdrowFixed.innerText = currentWithdrowTotal;
        const totalAmmount = document.getElementById('total-ammount');
        const totalAmmountValue = parseFloat(totalAmmount.innerText);
        const currentTotalAmmount = parseFloat(totalAmmountValue) - parseFloat(inputWithdrowValue);
        totalAmmount.innerText = currentTotalAmmount;
        inputWithdrow.value = '';
    }
})