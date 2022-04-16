// adding common funciton for picking up input field values 
function getInputValues(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputValueText = inputValue.value;
    const inputValueAmount = parseInt(inputValueText);
    inputValue.value = '';
    if (inputValueAmount > 0 && inputValueAmount != String) {
        return inputValueAmount;
    }
    else {
        document.getElementById('error-msg').innerText = 'Opps! Please Enter a Positive Value.';
        inputValueAmount = 0
        return inputValueAmount;
    }
}

// calculate total cost and income 
function calculation() {
    const incomeAmount = getInputValues('income-input');
    const foodCost = getInputValues('food-input');
    const rentCost = getInputValues('rent-input');
    const clothCost = getInputValues('cloth-input')

    const totalExpence = foodCost + rentCost + clothCost;
    if (incomeAmount > totalExpence) {
        const balance = incomeAmount - totalExpence;
        document.getElementById('total-expense').innerText = totalExpence;
        document.getElementById('balace').innerText = balance;
    }
    else {
        document.getElementById('error-msg').innerText = "Opps! You Don't Have Enough Income.";
    }

}

/* // adding event handler to calculat button
document.getElementById('calculate-button').addEventListener('click', function () {
    calculation();
}); */
// onclick added 

// function for saveing ammount
function saving() {
    const balanceText = document.getElementById('balace').innerText;
    const balance = parseInt(balanceText);
    const savingRate = getInputValues('saving-rate');

    const savingAmount = (balance * savingRate) / 100;
    const remainingBalance = balance - savingAmount;

    document.getElementById('saving-amount').innerText = savingAmount;
    document.getElementById('remaining-ammount').innerText = remainingBalance;
}