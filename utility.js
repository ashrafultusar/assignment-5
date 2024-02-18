const allSeatButtons = document.getElementsByClassName("kbd");
// console.log(allSeatButton)

const coupon15 = "NEW15";
const coupon20 = "Couple 20";

let count = 0;
let currentAvalibaleSeat = 40;

for (const allSeatButton of allSeatButtons) {
  // console.log(allSeatButton)
  allSeatButton.addEventListener("click", function (e) {
    // console.log('inshallah')
    e.target.style.backgroundColor = "green";
    count = count + 1;

    document.getElementById("purches-seat-count").innerText = count;

    document.getElementById("current-available-seat").innerText =
      currentAvalibaleSeat - count;

    const classCatagory = "Economoy";
    const seat = e.target.innerText;

    const vara = document.getElementById("vara-amount").innerText;
    const varaConvrt = parseInt(vara);

    // console.log(varaConvrt)
    //         console.log(seat)

    const showPurchesSeatInfo = document.getElementById(
      "show-purches-seat-info"
    );

    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = seat;

    const p1 = document.createElement("p");
    p1.innerText = classCatagory;
    const p2 = document.createElement("p");
    p2.innerText = varaConvrt;

    li.appendChild(p);
    li.appendChild(p1);
    li.appendChild(p2);
    showPurchesSeatInfo.appendChild(li);

    //   total cost section
    const totalCost = document.getElementById("total-price").innerText;
    const convertTotalCost = parseInt(totalCost);
    document.getElementById("total-price").innerText =
      convertTotalCost + varaConvrt;

    // grand total section
    const grandTotal = document.getElementById("grand-total").innerText;
    const convartGrandTotal = parseInt(grandTotal);
    document.getElementById("grand-total").innerText =
          convartGrandTotal + varaConvrt;
     
  });
    
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.addEventListener("click", function () {

        const inputCoupon = document.getElementById("input-coupon").value;
        if (coupon15 === inputCoupon) {
            const grandTotal = document.getElementById("grand-total").innerText;
    const convartGrandTotal = parseInt(grandTotal);
            document.getElementById("grand-total").innerText =
                convartGrandTotal * 0.15;
        }else {
            console.log('NOT')
        }
    })
    
}

function play() {
  const homeScreen = document.getElementById("home-screen");
  homeScreen.classList.add("hidden");
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
}

// bonus part section..........................................

//  const vara = document.getElementById("vara-amount").innerText;
// const varaConvrt = parseInt(vara);

    
// const applyBtn = document.getElementById("apply-btn");


// applyBtn.addEventListener("click", function () {
  
//     const inputCoupon = document.getElementById("input-coupon").value;
    
//     if (coupon15 === inputCoupon) {
        
//         const finalElement = document.getElementById('grand-total')
//         const discount = varaConvrt * 0.15;
// finalElement.innerText=discount


//     } else if (coupon20 === inputCoupon) {
//         console.log('coupon20')


//     } else {
//         return alert('ERROE')
//     }
  
    
    
// }
// );
