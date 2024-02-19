// document.getElementById('buy-ticket').addEventListener('click', function () {
//     console.log('hi')
// })
let updateGrandTotal = 0;

document.getElementById('A1').addEventListener('click', function () {

    const seatCount = document.getElementById('seat-count');
    const seatCountString = seatCount.innerText;
    // console.log(seatCountString)
    const seatCountNumber = parseInt(seatCountString);
    const updateSeat = seatCountNumber + 1;
    seatCount.innerText = updateSeat;

    //Set Total Price
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalPriceNumber = parseInt(totalPriceString);
    const updateTotalPrice = updateSeat * 550;
    // console.log(updateTotalPrice)
    totalPrice.innerText = updateTotalPrice;

    //Set Grand Total
    const grandTotal = document.getElementById('grand-total');
    const grandTotalString = grandTotal.innerText;
    const grandTotalNumber = parseInt(grandTotalString);
    updateGrandTotal = updateSeat * 550;
    grandTotal.innerText = updateGrandTotal;
})


//Add Coupon
document.getElementById('btn-apply').addEventListener('click', function () {
    const addCoupon = document.getElementById('coupon-input').value;
    const addCouponString = addCoupon.split(' ').join(' ');
    console.log(addCouponString)

    if (updateGrandTotal >= 2200) {

        if (addCouponString === "NEW15") {
            const addDiscount = updateGrandTotal * 0.15;
            const updateDiscount = updateGrandTotal - addDiscount;

            //Update Grand Total
            const grandTotal = document.getElementById('grand-total');
            grandTotal.innerText = updateDiscount;
            document.getElementById('coupon-input').value = '';

        } else if (addCouponString === "Couple 20") {
            const addDiscount = updateGrandTotal * 0.2;
            const updateDiscount = updateGrandTotal - addDiscount;

            //Update Grand Total
            const grandTotal = document.getElementById('grand-total');
            grandTotal.innerText = updateDiscount;
            document.getElementById('coupon-input').value = '';

        } else {
            alert('Invalid Coupon Code');
        };

    } else {
        alert('You have to buy 4 tickets to get discount!');
    }


})


//Seat-Left
document.getElementById('A1').addEventListener('click', function () {

    const seatCount = document.getElementById('seat-left');
    const seatCountString = seatCount.innerText;
    // console.log(seatCountString)
    const seatCountNumber = parseInt(seatCountString);
    const updateSeat = seatCountNumber - 1;
    seatCount.innerText = updateSeat;

})
// Add to Cart
document.getElementById('A1').addEventListener('click', function () {
    document.querySelector('tbody').innerHTML = `<tr>
    <td>A1</td>
    <td>Economoy</td>
    <td>550</td>
</tr>`;

})

//Color Change
document.getElementById('A1').addEventListener('click', function () {
    this.classList.add('bg-green-500');

})



// Common Function
function seatCalculate(elementId) {
    document.getElementById(elementId).addEventListener('click', function () {

        const seatCount = document.getElementById('seat-count');
        const seatCountString = seatCount.innerText;
        // console.log(seatCountString)
        const seatCountNumber = parseInt(seatCountString);
        const updateSeat = seatCountNumber + 1;
        seatCount.innerText = updateSeat;
    })
}