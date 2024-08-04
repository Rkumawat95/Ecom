let myp = document.getElementById("myp");
let sign1 = document.getElementById("sign1");
let sign2 = document.getElementById("sign2");
let log1 = document.getElementById("log1");
let cart = document.getElementById("cart");

//navbar
let b = location.search;
let edata = b.split(`?`);
edata.shift();

if (b.length === 0) {
  cart.remove();
  sign1.remove();
  myp.remove();
} else {
  sign2.remove();
  log1.remove();
}

//home and products page
let home = document.getElementById("home");
let prod = document.getElementById("prod");

let path;
(b.length===0) ? path = "/src/index.html" : path = `/src/index.html${b}`;
home.setAttribute("href",path);
prod.setAttribute("href",path);

// user display
let a = b.substring(1);
let user = `/src/user.html?${a}`;
myp.children[0].setAttribute("href", user);

//signout
sign1.addEventListener("click", (e) => {
  e.preventDefault()
  location.replace("/src/index.html");
});

//cart
let i = 1, j=3;
let count = 0;
let item;
let books = ["History","Arts","English"];
let price = [400,800,300];
let bookid = {}
let grid = document.getElementById("grid");
for(let k=0;k<3;k++){
    item = `
            <div class="bg-slate-200 rounded-xl shadow-lg">
                <div class="p-5 flex flex-col">
                <div class="rounded-xl overflow-hidden">
                    <img src="./img/book${j}.jpg" alt="" class="w-40 h-40">
                </div>
                <h3 id="book${k}" class="text-2xl md:text-3xl font-medium mt-3">${books[k]} Book</h3>
                <p class="text-slate-700 text-lg mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dapibus enim, a varius arcu.</p>
                <h2 class="bg-yellow-300 flex justify-center items-center"><b>Price: ${price[k]} Rs</b><h2>
                <div class="flex justify-center items-center">
                <a id="addtocart${i}" class="addtocart bg-blue-400 text-blue-700 py-3 px-4 mt-4 mr-3 hover:bg-yellow-300
                rounded-lg font-semibold focus:scale-95 transition-all duration-200 ease-out">Add to Cart</a>
            </div>
            `;
    i++; j++;
    grid.innerHTML += item;
}

let addtocart = document.getElementsByClassName("addtocart");
let addtocartArray = Array.from(addtocart);
let data1;
let prdata = [];
const t=0;
addtocartArray.forEach((element) => {
  element.addEventListener("click", () => {
    if (b.length === 0) {
      element.setAttribute("href", "/src/login.html");
    } else {
        
        //count++
        let c = document.getElementById("count");
        let n = element.id.charAt(element.id.length-1);
        c.innerHTML = count;
  
        data1 = {"bookn":`books${n}`,"price":`${price[n-1]}`}
        prdata.push(data1)
        prdata1 = JSON.stringify(prdata);
        localStorage.setItem(edata, prdata1);
    }
  });
});


//cart page
cart.addEventListener("click",()=>{
    cart.children[0].setAttribute("href", `/src/cart.html${b}`)
})