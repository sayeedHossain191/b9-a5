

let total = 0;

function seatDisplay(playerList) {
    const totalPrice = document.getElementById('taka')
    total = 0;
    const listBody = document.getElementById('list-container')
    listBody.innerText = '';
    for (let i = 0; i < seatArray.length; i++) {
        const tr = document.createElement('tr');
        const newSeatName = seatArray[i]?.playerName;
        const td = document.createElement('td');
        td.innerText = newSeatName;
        const td2 = document.createElement('td');
        td2.innerText += seatArray[i].category;
        const td3 = document.createElement('td');
        td3.innerText += seatArray[i].price;
        total += parseFloat(seatArray[i].price);
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        listBody.appendChild(tr);


    }
    totalPrice.innerText = total;
    const totalGrand = document.getElementById('grand');
    totalGrand.innerText = total;



}
function apply() {
    const dis = document.getElementById('dis');
    const grand = document.getElementById('grand');
    const coupon = dis.value;
    let grandTotal = 0;

    if (total >= 2200) {
        if (coupon === 'NEW15') {
            grandTotal = total - (total * 0.15);
            grand.innerText = grandTotal;
            console.log(grand);

        }
        else if (coupon === 'Couple 20') {
            grandTotal = total - (total * 0.20);
            grand.innerText = grandTotal;
            console.log(grand);

        }
        else {
            alert('Invalid Coupon Code!');
        }
    } else {
        alert('SORRY! You have to purchase 4 tickets to get discount.');
    }

    document.getElementById('dis').value = '';

}


const seatArray = [];


function addToCart(element) {


    if (seatArray.length >= 4) {
        alert('You cannot buy more than 4 tickets!');
        return;

    }
    const playerName = element.parentNode.children[0].innerText;
    const category = element.dataset.category;
    const price = element.dataset.price;
    element.style.cursor = 'not-allowed'
    element.disabled = true;

    const playerObj = {
        playerName: playerName,
        category: category,
        price: price
    }

    seatArray.push(playerObj);
    const left = document.getElementById('seatLeft')
    left.innerText = parseInt(left.innerText) - 1;

    if (seatArray.length < 5) {
        document.getElementById('Select-Seat').innerText = seatArray.length;

    }
    seatDisplay(seatArray);
}
function abc(element) {
    if (element.value !== '' && seatArray.length) {
        const submit = document.getElementById('submit');
        submit.disabled = false;
    }

}


