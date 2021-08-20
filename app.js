var phones = {
    iphone: {
        iphonex: {
            brand: "Iphone",
            model: "Iphone X",
            price: "150000 PKR",
            color: "Gray,Black & White",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front (Full Hd Dslar Wala)",
            src: "1.jpg"
        },
        iphone11: {
            brand: "Iphone",
            model: "Iphone 11",
            price: "200000 PKR",
            color: "Gray,Black & White & Crystal",
            storage: "4 & 64, 6 & 128, 6 & 256, 12 & 512",
            camera: "16px Back, And 6px Front (Full Hd Dslar Wala)",
            src: "2.jpg"
        },
        iphone12: {
            brand: "Iphone",
            model: "Iphone 12",
            price: "250000 PKR",
            color: "Gray,Black & White & Crystal & New Crystal",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "20px Back, And 8px Front (Full Hd Dslar Wala)",
            src: "3.jpg"
        }
    },
    samsung: {
        s8: {
            brand: "Samsung",
            model: "Samsung Galaxy S8",
            price: "70000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "4.jpg"
        },
        s9: {
            brand: "Samsung",
            model: "Samsung Galaxy S9",
            price: "100000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "5.jpg"
        },
        s10: {
            brand: "Samsung",
            model: "Samsung Galaxy S10",
            price: "100000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "6.jpg"
        }
    },
    oppo: {
        f8: {
            brand: "Oppo",
            model: "Oppo F8",
            price: "50000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "7.jpg"
        },
        f9: {
            brand: "Oppo",
            model: "Oppo F9",
            price: "75000 PKR",
            color: "Golden & White",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "8.jpg"
        },
        f10: {
            brand: "Oppo",
            model: "Oppo F10",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "9.jpg"
        }
    },
    infinix: {
        hot8: {
            brand: "Infinix",
            model: "Infinix Hote 8",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "10.jpg"
        },
        hot9: {
            brand: "Infinix",
            model: "Infinix Hote 9",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "11.jpg"
        },
        hot10: {
            brand: "Infinix",
            model: "Infinix Hote 10",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "12.jpg"
        }
    },
    poco: {
        pocox3: {
            brand: "Poco",
            model: "Poco X3",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "13.jpg"
        },
        Poco8c: {
            brand: "Poco",
            model: "Poco 8C",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "14.jpg"
        }
    }
}

let brand = document.getElementById("brand")
let model = document.getElementById("model")
for(key in phones){
    brand.innerHTML += 
    `
    <option value="${key}">${key}</option>
    `
}
function setModel(e){
    document.getElementById("doit").innerHTML = ""
    model.innerHTML = ""
    for(key in phones[e.value]){
        model.innerHTML += 
        `
        <option value="${key}">${key}</option>    
        `
        document.getElementById("doit").innerHTML +=
            `
            <div class="card" id="card">
            <img class="card-img-top" src="${phones[e.value][key].src}" alt="" id="image">
            <div class="card-body blak">
                <h4 class="card-title" id="name">${phones[e.value][key].model}</h4>
                <p class="card-text" id="price"><i class="fa fa-money" aria-hidden="true"></i>${phones[e.value][key].price}</p>
            </div>
            </div>
            `  
        } 
    }
    function finalSearch(){
      console.log(phones[brand.value][model.value])
      document.getElementById("doit").innerHTML = ""
      document.getElementById("doit").innerHTML = 
      `
      <div class="card" id="card">
      <img class="card-img-top" src="${phones[brand.value][model.value].src}" alt="" id="image">
      <div class="card-body blak">
          <h4 class="card-title" id="name">${phones[brand.value][model.value].model}</h4>
          <p class="card-text" id="price"><i class="fa fa-money" aria-hidden="true"></i>  ${phones[brand.value][model.value].price}</p>
          <p class="card-text">Company: ${phones[brand.value][model.value].brand}</p>
          <p class="card-text" id="camera"><i class="fa fa-camera" aria-hidden="true"></i>  ${phones[brand.value][model.value].camera}</p>
          <p class="card-text">Momory:   ${phones[brand.value][model.value].storage}</p>
      </div>
      </div>
      `
    
    }
for(brands in phones){
    for(models in phones[brands]){
        document.getElementById("doit").innerHTML +=
        `
        <div class="card border" id="card">
        <img class="card-img-top" src="${phones[brands][models].src}" alt="" id="image">
        <div class="card-body blak">
            <h4 class="card-title" id="name">${phones[brands][models].model}</h4>
            <p class="card-text" id="price"><i class="fa fa-money" aria-hidden="true"></i>  ${phones[brands][models].price}</p>
        </div>
        </div>
        `
    }
}