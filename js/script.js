let bill = document.getElementById('bill');
let tip = document.querySelectorAll('.btn-tip');
let people = document.getElementById('people');
let tipPersonText = document.getElementById('tipPerPerson');
let totalPersonText = document.getElementById('totalPerPerson');
let tipValue = 0;
let tipPerPerson = 0.00;
let totalPerPerson = 0.00;

tip.forEach(item => {
    item.addEventListener('click', function() {
        tipValue = parseInt(item.dataset.tip);
        removeActive(tip);
        item.classList.add('active');
    })
});

people.addEventListener('blur', function() {
    console.log(bill.value, tipValue, people.value);
    if(!bill.value || !tipValue || !people.value) {
        return false;
    }
    let amount = parseFloat(bill.value);
    let peopleValue = parseInt(people.value);
    let tipPerPerson = tipCalculate(amount, tipValue, peopleValue);
    totalPerPerson = totalCalculate(amount, tipValue, peopleValue);
    tipPersonText.textContent = `$${tipPerPerson}`;
    totalPersonText.textContent = `$${totalPerPerson}`;
    
})

function tipCalculate(amount, tip, people) {
    let tipPercentageAmount = amount * (tip/100);
    let result = tipPercentageAmount/people;
    return result.toFixed(2);
}

function totalCalculate(amount, tip, people) {
    let tipPercentageAmount = amount * (tip/100);
    let result = ((tipPercentageAmount+amount)/people);
    return result.toFixed(2);
}


function resetFunction() {
    bill.value = '';
    people.value = '';
    tipPersonText.textContent = `$0.00`;
    totalPersonText.textContent = `$0.00`;
    removeActive(tip);

}

function removeActive(element){
    element.forEach(item => {
        item.classList.remove('active');
    })
}
