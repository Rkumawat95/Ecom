let pdata = localStorage.getItem(edata);
let ppdata = JSON.parse(pdata);
let count3 = document.getElementById("count");
count3.innerHTML = ppdata.length;

let tbody = document.getElementById("tbody");
let sp = document.getElementById("spanprice");
let totalp = 0;
ppdata.forEach(element => {
    
    let citem = `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${element.bookn}
              </th>
              <td class="px-6 py-4">
                  ${element.price}
              </td>
          </tr>`

    let ssp = parseFloat(element.price);
    totalp += ssp;
    tbody.innerHTML += citem;    
    sp.innerHTML = totalp;
});

//Buy Now
let bnow = document.getElementById("bnow");
b = location.search;
bnow.addEventListener("click",(e)=>{
    e.preventDefault();
    location.replace(`/src/buynow.html${b}`);
})

