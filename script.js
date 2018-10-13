let books = {
    title: [
        "How to Stop Worrying and Start Living",
        "The Quick and Easy Way to Effective Speaking",
        "How to Win Friends and Influence People",
    ],
    author: "Dale Carnegie",
    description: [
        "Through Dale Carnegie’s six-million-copy bestseller recently revised, millions of people have been helped to overcome the worry habit. Dale Carnegie offers a set of practical formulas you can put to work today. In our fast-paced world—formulas that will last a lifetime!",
        "Now streamlined and updated, the book that has literally put millions on the highway to greater accomplishment and success can show you how to have maximum impact as a speaker--every day, and in every situation that demands winning others over to your point of view.",
        "Dale Carnegie’s rock-solid, time-tested advice has carried countless people up the ladder of success in their business and personal lives. One of the most groundbreaking and timeless bestsellers of all time, How to Win Friends and Influence People will teach you",
    ],
    images: [
        "images/book.png",
        "images/book2.jpg",
        "images/book3.jpg"
    ],
    prices: [
        '5.99',
        '6.86',
        '7.87'
    ]
}
for (i = 0; i < 3; i++) {
    document.querySelector(".container").innerHTML +=
        `
    <div class="card border-secondary mb-3">
    <div class="card-body">
        <div class="images">
            <img src="${books.images[i]}" alt="">
        </div>
        <div class="text">
            <h4 class="card-title">${books.title[i]}</h4>
            <p class="card-text">by
                <span>${books.author}</span>
            </p>
            <p class="description">${books.description[i]}</p>
            <div class="pni">
                <h5 class="price">Price:
                   <span>$</span> <span class="price${i + 1}">${books.prices[i]}</span>
                </h5>
                <div class="input">
                    <div class="input">
                        <div class="form-group">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text btn-primary" onclick="decreament${i + 1}()">-</span>
                                    </div>
                                    <input type="text" class="form-control p-input b${i + 1}input" value="0">
                                    <div class="input-group-append">
                                        <span class="input-group-text btn-primary" onclick="increament${i + 1}()">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="alert alert-primary">
    <p>Total Amount:
        <span class="bd">$</span>
        <span class="b-price b${i + 1}">0.00</span>
    </p>
</div>
    `
}

let count1 = 0;
let count2 = 0;
let count3 = 0;
function increament1() {
    count1++;
    document.querySelector(`.b1input`).value = count1;
    document.querySelector(`.b1`).innerHTML = parseFloat(5.99 * count1).toFixed(2);;
    findTotal()
}
function increament2() {
    count2++;
    document.querySelector(`.b2input`).value = count2;
    document.querySelector(`.b2`).innerHTML = parseFloat(5.99 * count2).toFixed(2);;
    findTotal()
}
function increament3() {
    count3++;
    document.querySelector(`.b3input`).value = count3;
    document.querySelector(`.b3`).innerHTML = parseFloat(5.99 * count3).toFixed(2);;
    findTotal()
}
function decreament1() {
    if (count1 > 0) {
        count1--;
        document.querySelector(`.b1input`).value = count1;
        document.querySelector(`.b1`).innerHTML = parseFloat(5.99 * count1).toFixed(2);;
        findTotal()
    }
}
function decreament2() {
    if (count2 > 0) {
        count2--;
        document.querySelector(`.b2input`).value = count2;
        document.querySelector(`.b2`).innerHTML = parseFloat(5.99 * count2).toFixed(2);;
        findTotal()
    }
}
function decreament3() {
    if (count3 > 0) {
        count3--;
        document.querySelector(`.b3input`).value = count3;
        document.querySelector(`.b3`).innerHTML = parseFloat(5.99 * count3).toFixed(2);;
        findTotal();
    }
}

function findTotal() {
    document.querySelector(`.final-price`).innerHTML = parseFloat(5.99 * count1 + 5.99 * count2 + 5.99 * count3).toFixed(2);;

}

//Tries


// let count = 0;
// function increament(bookNo){
//     count++;

//     document.querySelector(`.${bookNo}input`).value = count;
//     document.querySelector(`.${bookNo}`).innerHTML = parseFloat(parseFloat(priceTag) * count).toFixed(2);;
//     findTotal()
// }

// function decreament(bookNo){
//     if(count>0){
//     count--;
//     document.querySelector(`.${bookNo}input`).value = count;
//     document.querySelector(`.${bookNo}`).innerHTML = parseFloat(5.99 * count).toFixed(2);;
//     findTotal()
//     }
// }

// function findTotal(){
//     document.querySelector(`.final-price`).innerHTML = parseFloat(5.99 * count).toFixed(2);;

// }



// let count2 = 0;
// let count3 = 0;
// function increament1(){
//     count1++;
//     document.querySelector(`.b1input`).value = count1;
//     document.querySelector(`.b1`).innerHTML = parseFloat(5.99 * count1).toFixed(2);;
//     findTotal()
// }
// function increament2(){
//     count2++;
//     document.querySelector(`.b2input`).value = count2;
//     document.querySelector(`.b2`).innerHTML = parseFloat(5.99 * count2).toFixed(2);;
//     findTotal()
// }
// function increament3(){
//     count3++;
//     document.querySelector(`.b3input`).value = count3;
//     document.querySelector(`.b3`).innerHTML = parseFloat(5.99 * count3).toFixed(2);;
//     findTotal()
// }
// function decreament1(){
//     if(count1>0){
//     count1--;
//     document.querySelector(`.b1input`).value = count1;
//     document.querySelector(`.b1`).innerHTML = parseFloat(5.99 * count1).toFixed(2);;
//     findTotal()
//     }
// }
// function decreament2(){
//     if(count2>0){
//     count2--;
//     document.querySelector(`.b2input`).value = count2;
//     document.querySelector(`.b2`).innerHTML = parseFloat(5.99 * count2).toFixed(2);;
//     findTotal()
//     }
// }
// function decreament3(){
//     if(count3>0){
//     count3--;
//     document.querySelector(`.b3input`).value = count3;
//     document.querySelector(`.b3`).innerHTML = parseFloat(5.99 * count3).toFixed(2);;
//     findTotal();
//     }
// }


