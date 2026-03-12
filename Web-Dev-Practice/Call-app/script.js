let addbtn = document.querySelector(".add-btn");
let noteform = document.querySelector(".Note-form");
let img = document.querySelector(".image-url");
let home = document.querySelector(".home-town");
let cards = document.querySelector(".cards");
let names = document.querySelector(".names");
let purpose = document.querySelector(".purpose");
let Bookings = document.querySelector(".Bookings");
let call = document.querySelector(".call");
let massage = document.querySelector(".massage");

function card() {
  let card1 = document.createElement("div");
  card1.classList.add("card-3");

  let image = document.createElement("img");
  image.classList.add("img");
  image.src = img.value;

  let nm = document.createElement("h2");
  nm.textContent = names.value;

  let hometown = document.createElement("h4");
  hometown.classList.add("home-town");
  hometown.textContent = "Home Town";

  let cityname = document.createElement("h4");
  cityname.classList.add("city");
  cityname.textContent = home.value;


  let booking = document.createElement("h4");
  booking.textContent = "Booking";

  let bookings = document.createElement("h4");
  bookings.textContent = "3times";
  bookings.classList.add("Bookings");



  let callbtn = document.createElement("button");
  callbtn.textContent = " Call";
  callbtn.classList.add("call");

 

  let massage=document.createElement("h3");
  massage.classList.add("massage");
  massage.textContent="Massage";

  cards.appendChild(card1);
  card1.appendChild(image);
  card1.appendChild(nm);
  card1.appendChild(hometown);
  card1.appendChild(cityname);
  card1.appendChild(booking);
  card1.appendChild(bookings);
  card1.appendChild(callbtn);
  card1.appendChild(massage);
}


document.querySelector(".submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
  card();
  noteform.style.display = "none";
});

addbtn.addEventListener("click", function (dets) {
  noteform.style.display = "initial";
});