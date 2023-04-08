let nameTH = document.querySelector("#nameTH");
let priceTH = document.querySelector("#priceTH");
let amountTH = document.querySelector("#amountTH");
let icon = document.querySelector("#sort");
let toggle = true;

let tdNames = document.querySelectorAll("td:first-child");
let tdPrices = document.querySelectorAll("td:nth-child(2)");
let tdAmounts = document.querySelectorAll("td:last-child");

let array = [];

tdNames.forEach(item =>{
   let obj = {};
    obj.name = item.innerText;
    array.push(obj);
});

tdPrices.forEach((item,index)=>{
    array[index].price = item.innerText;
});

tdAmounts.forEach((item,index)=>{
    array[index].amount = item.innerText;
});

nameTH.addEventListener("click",()=>{
    if(toggle){
        icon.style = "transform: rotate(180deg)";
        array.sort((a,b)=>a.name.localeCompare(b.name));
        tdNames.forEach((item,index)=>{
            item.innerHTML = array[index].name;
        });
        tdPrices.forEach((item,index)=>{
            item.innerHTML = array[index].price;
        });
        tdAmounts.forEach((item,index)=>{
            item.innerHTML = array[index].amount;
        });
        toggle = false;
    }else{
        icon.style = "transform: rotate(0deg)";
        array.sort((a,b)=>b.name.localeCompare(a.name));
           tdNames.forEach((item,index)=>{
            item.innerHTML = array[index].name;
        });
        tdPrices.forEach((item,index)=>{
            item.innerHTML = array[index].price;
        });
        tdAmounts.forEach((item,index)=>{
            item.innerHTML = array[index].amount;
        });
        toggle = true;
    }
});

priceTH.addEventListener("click",()=>{
    if(toggle){
        icon.style = "transform: rotate(180deg)";
        array.sort((a,b)=>a.price - b.price);
        tdNames.forEach((item,index)=>{
            item.innerHTML = array[index].name;
        });
        tdPrices.forEach((item,index)=>{
            item.innerHTML = array[index].price;
        });
        tdAmounts.forEach((item,index)=>{
            item.innerHTML = array[index].amount;
        });
        toggle = false;
    }else{
        icon.style = "transform: rotate(0deg)";
          array.sort((a,b)=>b.price - a.price);
           tdNames.forEach((item,index)=>{
            item.innerHTML = array[index].name;
        });
        tdPrices.forEach((item,index)=>{
            item.innerHTML = array[index].price;
        });
        tdAmounts.forEach((item,index)=>{
            item.innerHTML = array[index].amount;
        });
        toggle = true;
    }
});

amountTH.addEventListener("click",()=>{
     if(toggle){
        icon.style = "transform: rotate(180deg)";
        array.sort((a,b)=>a.amount - b.amount);
        tdNames.forEach((item,index)=>{
            item.innerHTML = array[index].name;
        });
        tdPrices.forEach((item,index)=>{
            item.innerHTML = array[index].price;
        });
        tdAmounts.forEach((item,index)=>{
            item.innerHTML = array[index].amount;
        });
        toggle = false;
    }else{
        icon.style = "transform: rotate(0deg)";
          array.sort((a,b)=>b.amount - a.amount);
           tdNames.forEach((item,index)=>{
            item.innerHTML = array[index].name;
        });
        tdPrices.forEach((item,index)=>{
            item.innerHTML = array[index].price;
        });
        tdAmounts.forEach((item,index)=>{
            item.innerHTML = array[index].amount;
        });
        toggle = true;
    }
});
