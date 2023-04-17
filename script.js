// script.js

//Created object of root to store ordered amounts
const root_1 = {
    biscuits_1: document.querySelector('[data-biscuits="10"]').dataset.biscuits,
    donuts_1: document.querySelector('[data-donuts="13"]').dataset.donuts,
    pancakes_1: document.querySelector('[data-pancakes="0"]').dataset.pancakes,
    status_1: document.querySelector('[data-delivered="false"]').dataset.delivered,
}

const root_2 = {
    biscuits_2: document.querySelector('[data-biscuits="5"]').dataset.biscuits,
    donuts_2: document.querySelector('[data-donuts="0"]').dataset.donuts,
    pancakes_2: document.querySelector('[data-pancakes="2"]').dataset.pancakes,
    status_2: document.querySelector('[data-delivered="false"]').dataset.delivered,
}

const root_3 = {
    biscuits_3: document.querySelector('[data-biscuits="12"]').dataset.biscuits,
    donuts_3: document.querySelector('[data-donuts="11"]').dataset.donuts,
    pancakes_3: document.querySelector('[data-pancakes="15"]').dataset.pancakes,
    status_3: document.querySelector('[data-delivered="true"]').dataset.delivered,
}

// Used query selector and CSS selectors to target the specific HTML elements in order to change the innerHTML of each
document.querySelector('[data-key="order1"] > .biscuits > .count').innerHTML = root_1.biscuits_1
document.querySelector('[data-key="order1"] > .donuts > .count').innerHTML = root_1.donuts_1
document.querySelector('[data-key="order1"] > .pancakes > .count').innerHTML = root_1.pancakes_1
// Used strict equality to check the value and type of root_1.status_1
document.querySelector('[data-key="order1"] > .status').innerHTML =  root_1.status_1 === 'true'? "Delivered" : "Pending"


document.querySelector('[data-key="order2"] > .biscuits > .count').innerHTML = root_2.biscuits_2
document.querySelector('[data-key="order2"] > .donuts > .count').innerHTML = root_2.donuts_2
document.querySelector('[data-key="order2"] > .pancakes > .count').innerHTML = root_2.pancakes_2
document.querySelector('[data-key="order2"] > .status').innerHTML =  root_2.status_2 === 'true'? "Delivered" : "Pending"

document.querySelector('[data-key="order3"] > .biscuits > .count').innerHTML = root_3.biscuits_3
document.querySelector('[data-key="order3"] > .donuts > .count').innerHTML = root_3.donuts_3
document.querySelector('[data-key="order3"] > .pancakes > .count').innerHTML = root_3.pancakes_3
document.querySelector('[data-key="order3"] > .status').innerHTML =  root_3.status_3 === 'true'? "Delivered" : "Pending"