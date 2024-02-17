const allSeatButtons = document.getElementsByClassName("kbd");
// console.log(allSeatButton)

let count = 0;
let currentAvalibaleSeat = 40;

for (const allSeatButton of allSeatButtons) {
    // console.log(allSeatButton)
    allSeatButton.addEventListener('click', function () {
        // console.log('inshallah')
        count = count + 1;

        document.getElementById('purches-seat-count').innerText = count;

        document.getElementById('current-available-seat').innerText = currentAvalibaleSeat - count;
        
    })
}