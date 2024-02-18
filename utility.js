
const allSeatButtons = document.getElementsByClassName("kbd");
// console.log(allSeatButton)

let count = 0;
let currentAvalibaleSeat = 40;
let coupon15 = 'NEW15'
let coupon20 ='Couple 20'
for (const allSeatButton of allSeatButtons) {
    // console.log(allSeatButton)
    allSeatButton.addEventListener('click', function (e) {
        // console.log('inshallah')
        e.target.style.backgroundColor = "green";
        count = count + 1;

        document.getElementById('purches-seat-count').innerText = count;

        document.getElementById('current-available-seat').innerText = currentAvalibaleSeat - count;

const classCatagory = 'Economoy'
        const seat = e.target.innerText;

        const vara = document.getElementById("vara-amount").innerText;
        const varaConvrt = parseInt(vara)

// console.log(varaConvrt)
        //         console.log(seat)
        
        const showPurchesSeatInfo = document.getElementById('show-purches-seat-info');

        const li = document.createElement("li")

        const p = document.createElement("p")
        p.innerText = seat;

        const p1 = document.createElement("p")
        p1.innerText = classCatagory;
        const p2=document.createElement("p")
        p2.innerText = varaConvrt;

        li.appendChild(p)
        li.appendChild(p1)
        li.appendChild(p2)
        showPurchesSeatInfo.appendChild(li)

    //   total cost section
        const totalCost = document.getElementById('total-price').innerText;
        const convertTotalCost=parseInt(totalCost)
        document.getElementById('total-price').innerText = convertTotalCost + varaConvrt;

        
        // grand total section
        const grandTotal = document.getElementById('grand-total').innerText;
        const convartGrandTotal = parseInt(grandTotal);
        document.getElementById('grand-total').innerText = convartGrandTotal + varaConvrt;

    })

    
}

function play() {
    const homeScreen = document.getElementById('home-screen');
   homeScreen.classList.add('hidden')
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden')

}

const applyBtn = document.getElementById('apply-btn');
// console.log(applyBtn)

// applyBtn.addEventListener("click", function () {
//     // console.log('alhamdulliah')

//     const inputCoupon = document.getElementById('input-coupon');
//     // console.log(inputCoupon.value)
    
//     if ( coupon15 === 'NEW15'){
   
//         const discout = varaConvrt * 0.15
//         const finalDiscountValue = document.getElementById('grand-total');
//         finalDiscountValue.innerText = varaConvrt - discout;


//     } else if (coupon20 === 'Couple 20'){
//         console.log('25')
// }else {
//     alert ('vul hoyce vai')
//     }
// })