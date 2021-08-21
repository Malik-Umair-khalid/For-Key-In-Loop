var phones = [ 
        {
            brand: "Iphone",
            model: "Iphone X",
            price: "150000 PKR",
            color: "Gray,Black & White",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front (Full Hd Dslar Wala)",
            src: "1.jpg"
        },
         {
            brand: "Iphone",
            model: "Iphone 11",
            price: "200000 PKR",
            color: "Gray,Black & White & Crystal",
            storage: "4 & 64, 6 & 128, 6 & 256, 12 & 512",
            camera: "16px Back, And 6px Front (Full Hd Dslar Wala)",
            src: "2.jpg"
        },
         {
            brand: "Iphone",
            model: "Iphone 12",
            price: "250000 PKR",
            color: "Gray,Black & White & Crystal & New Crystal",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "20px Back, And 8px Front (Full Hd Dslar Wala)",
            src: "3.jpg"
        },
        {
            brand: "Samsung",
            model: "Samsung Galaxy S8",
            price: "70000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "4.jpg"
        },
        {
            brand: "Samsung",
            model: "Samsung Galaxy S9",
            price: "100000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "5.jpg"
        },
        {
            brand: "Samsung",
            model: "Samsung Galaxy S10",
            price: "100000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "6.jpg"
        },
        {
            brand: "Oppo",
            model: "Oppo F8",
            price: "50000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "7.jpg"
        },
        {
            brand: "Oppo",
            model: "Oppo F9",
            price: "75000 PKR",
            color: "Golden & White",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "8.jpg"
        },
        {
            brand: "Oppo",
            model: "Oppo F10",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "9.jpg"
        },
        {
            brand: "Infinix",
            model: "Infinix Hote 8",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "10.jpg"
        },
        {
            brand: "Infinix",
            model: "Infinix Hote 9",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "11.jpg"
        },
        {
            brand: "Infinix",
            model: "Infinix Hote 10",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "12.jpg"
        },
        {
            brand: "Poco",
            model: "Poco X3",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "13.jpg"
        },
        {
            brand: "Poco",
            model: "Poco 8C",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "14.jpg"
        }
]
phones.forEach((asd) =>{
    document.getElementById("doit").innerHTML +=
            `
            <div class="card" id="card">
            <img class="card-img-top" src="${asd.src}" alt="" id="image">
            <div class="card-body blak">
                <h4 class="card-title" id="name">${asd.model}</h4>
                <p class="card-text" id="price"><i class="fa fa-money" aria-hidden="true"></i>${asd.price}</p>
                <button class = "btn" onc>Add to Cart<button>
            </div>
            </div>
            `
})
 let asd = phones.filter(val => val.model.startsWith("Samsung Galaxy S9"))
let search = () =>{
    document.getElementById("doit").innerHTML = ""
    let brand = document.getElementById("brand")
    let asd = phones.filter(val => val.model.startsWith(brand.value))
    if(asd.length == 1){
        document.getElementById("doit").innerHTML = 
              `
              <div class="card" id="card">
              <img class="card-img-top" src="${asd[0].src}" alt="" id="image">
              <div class="card-body blak">
                  <h4 class="card-title" id="name">${asd[0].model}</h4>
                  <p class="card-text" id="price"><i class="fa fa-money" aria-hidden="true"></i>  ${asd[0].price}</p>
                  <p class="card-text">Company: ${asd[0].brand}</p>
                  <p class="card-text" id="camera"><i class="fa fa-camera" aria-hidden="true"></i>  ${asd[0].camera}</p>
                  <p class="card-text">Momory:   ${asd[0].storage}</p>
              </div>
              </div>
              `
        // alert("hello")
    }
    else if (asd.length == 0){
        document.getElementById("doit").innerHTML = `
        Not Found-
        `
    }
    else{
    asd.forEach((asd) =>{
            document.getElementById("doit").innerHTML +=
            `
            <div class="card" id="card">
            <img class="card-img-top" src="${asd.src}" alt="" id="image">
            <div class="card-body blak">
                <h4 class="card-title" id="name">${asd.model}</h4>
                <p class="card-text" id="price"><i class="fa fa-money" aria-hidden="true"></i>${asd.price}</p>
            </div>
            </div>
            ` 
    })
}
}


















// let brand = document.getElementById("brand")
// let model = document.getElementById("model")
// for(key in phones){
//     brand.innerHTML += 
//     `
//     <option value="${key}">${key}</option>
//     `
// }
// function setModel(e){
//     document.getElementById("doit").innerHTML = ""
//     model.innerHTML = ""
//     for(key in phones[e.value]){
//         model.innerHTML += 
//         `
//         <option value="${key}">${key}</option>    
//         `
//         document.getElementById("doit").innerHTML +=
//             `
//             <div class="card" id="card">
//             <img class="card-img-top" src="${phones[e.value][key].src}" alt="" id="image">
//             <div class="card-body blak">
//                 <h4 class="card-title" id="name">${phones[e.value][key].model}</h4>
//                 <p class="card-text" id="price"><i class="fa fa-money" aria-hidden="true"></i>${phones[e.value][key].price}</p>
//             </div>
//             </div>
//             `  
//         } 
//     }
//     function finalSearch(){
//       console.log(phones[brand.value][model.value])
//       document.getElementById("doit").innerHTML = ""
//       document.getElementById("doit").innerHTML = 
//       `
//       <div class="card" id="card">
//       <img class="card-img-top" src="${phones[brand.value][model.value].src}" alt="" id="image">
//       <div class="card-body blak">
//           <h4 class="card-title" id="name">${phones[brand.value][model.value].model}</h4>
//           <p class="card-text" id="price"><i class="fa fa-money" aria-hidden="true"></i>  ${phones[brand.value][model.value].price}</p>
//           <p class="card-text">Company: ${phones[brand.value][model.value].brand}</p>
//           <p class="card-text" id="camera"><i class="fa fa-camera" aria-hidden="true"></i>  ${phones[brand.value][model.value].camera}</p>
//           <p class="card-text">Momory:   ${phones[brand.value][model.value].storage}</p>
//       </div>
//       </div>
//       `
    
//     }
// for(brands in phones){
//     for(models in phones[brands]){
//         document.getElementById("doit").innerHTML +=
//         `
//         <div class="card border" id="card">
//         <img class="card-img-top" src="${phones[brands][models].src}" alt="" id="image">
//         <div class="card-body blak">
//             <h4 class="card-title" id="name">${phones[brands][models].model}</h4>
//             <p class="card-text" id="price"><i class="fa fa-money" aria-hidden="true"></i>  ${phones[brands][models].price}</p>
//         </div>
//         </div>
//         `
//     }
// }