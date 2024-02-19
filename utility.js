
const allSeatButtons = document.getElementsByClassName("kbd");


let count = 0;
let currentAvalibaleSeat = 40;

let selectedTricket = 0;


for (const allSeatButton of allSeatButtons) {



  allSeatButton.addEventListener("click", function (e) {


    e.target.style.backgroundColor = "green";
    count = count + 1;


    document.getElementById("purches-seat-count").innerText = count;


// 4 seat contition section code
    if (count == 4) {
      let allSeatButtons = document.getElementsByClassName('kbd')
      for (let i = 0; i < allSeatButtons.length; i++){
        allSeatButtons[i].disabled = true;
      }
     
    }

    // ------------------------

    document.getElementById("current-available-seat").innerText =
      currentAvalibaleSeat - count;

    const classCatagory = "Economoy";
    const seat = e.target.innerText;

    const vara = document.getElementById("vara-amount").innerText;
    const varaConvrt = parseInt(vara);

   

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
    
    
}

// popup section
function play() {
  const homeScreen = document.getElementById("home-screen");
  homeScreen.classList.add("hidden");
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
}


// bonus part section..........................................


const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", function () {

  const  finalTotal = document.getElementById('total-price').innerText
  
  const convartFinalDiscount = parseInt(finalTotal)
 
  const coupon15 = "NEW15";
  const coupon20 = "Couple 20";


  function hide() {
    const inputCouponArea = document.getElementById('input-coupon-area');
    inputCouponArea.classList.add('hidden')
  
  }

  const inputCoupon = document.getElementById("input-coupon").value;
 console.log(inputCoupon)
    if ( inputCoupon === coupon15 ) {
      
      firstDiscount = convartFinalDiscount * 0.15
      discount = convartFinalDiscount - firstDiscount;
      
      document.getElementById("grand-total").innerText = discount.toFixed(1)
      document.getElementById("input-coupon").value = "";
      hide()

    } else if(inputCoupon ===  coupon20) {
     
        discount20 = convartFinalDiscount * 0.20;
      finalDiscount20 = convartFinalDiscount - discount20;
        document.getElementById("grand-total").innerText = finalDiscount20.toFixed(1);
      document.getElementById("input-coupon").value = "";
      hide()

    } else {
      alert('Invalid Coupon')
      document.getElementById("input-coupon").value = "";
      return;
  }
  
})
