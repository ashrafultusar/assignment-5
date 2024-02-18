
const allSeatButtons = document.getElementsByClassName("kbd");
// console.log(allSeatButton)

let count = 0;
let currentAvalibaleSeat = 40;

for (const allSeatButton of allSeatButtons) {
    // console.log(allSeatButton)
    allSeatButton.addEventListener('click', function (e) {
        // console.log('inshallah')
        e.target.style.backgroundColor = "green";
        count = count + 1;

        document.getElementById('purches-seat-count').innerText = count;

        document.getElementById('current-available-seat').innerText = currentAvalibaleSeat - count;


        const seat = e.target.innerText;
        // console.log(seat)
        const pushSeat = document.getElementById('show-perchesed-seat');
        // console.log(pushSeat)
        const p = document.createElement('p');
        p.innerText = seat;
        pushSeat.appendChild(p)
       
        const vara = document.getElementById("vara-amount").innerText;
        const varaConvert = parseInt(vara)
        // console.log(varaConvert)
        // const pushVara = getElementById('how-perchesed-vara')
        // pushVara.appendChild(varaConvert)


    })

    // show-perchesed-vara
}



// console.log(bgColorSet)
// bg color set
// function setBackgroundColorById(elementId) {
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-[#1DD100]');
// }