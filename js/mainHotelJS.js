var urlCountry = "dataHotel/country.json";
var urlHotel = "dataHotel/Hotel.json";
var urlhotelDet = "dataHotel/hotelDetails.json";

var rowDiv = document.getElementById("rowHotel");


/*---------------------------------------------------------------
       load All Hotels
    --------------------------------------------------------------*/
function loadAllHotels(selected) {
    fetch(urlHotel).then(res => res.json()).then(data => {
        data.hotel.forEach(xhotel => {
            console.log("infunc====   " + xhotel.key);
            rowDiv.innerHTML += `<div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src=${xhotel.mainPhoto} alt=""  width="400" 
                        height="250">
                        <a id=${xhotel.code} id="mylink" class="destination-overlay text-white text-decoration-none" href="#" onclick="passInfoHotelSel(this);">
                            <h5 class="text-white">${xhotel.name}</h5>
                            <span id="country">${xhotel.country}</span>
                        </a>
                    </div>
                </div>`;
        });
    });
}
loadAllHotels("");

/*---------------------------------------------------------------
       Display Country in Selected Tag
    --------------------------------------------------------------*/
function loadselectedCountryHotels(selected) {
    rowDiv.innerHTML = "";
    fetch(urlHotel).then(res => res.json()).then(data => {
        data.hotel.forEach(xhotel => {
            console.log("infunc====   " + xhotel.key);
            console.log("selected====   " + selected);
            console.log(String(selected) === String(xhotel.key));
            if (selected === xhotel.key) {
                console.log("hidden");

                rowDiv.innerHTML += `
                    <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src=${xhotel.mainPhoto} alt=""  width="400" 
                        height="250">
                        <a id=${xhotel.code} id="mylink" class="destination-overlay text-white text-decoration-none" href="#" onclick="passInfoHotelSel(this);">
                            <h5 class="text-white">${xhotel.name}</h5>
                            <span id="country">${xhotel.country}</span>
                        </a>
                    </div>
                </div>`;
            }
        });
    });
}
/*---------------------------------------------------------------
       Read Country from json file in url and Display Country in Selected element
    --------------------------------------------------------------*/
function displayCountry(url) {
    ///API for Country using rapid API
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "83a5b67dddmsh07cead2188694edp17cffajsnb7ded68ff6bf"
        }
    }).then(response => response.json())
        .then(response => {
            console.log(response.Countries);
            /////Function to fill Selected items
            fillList(response.Countries);
        })
        .catch(err => {
            console.error(err);
        });

}
function fillList(countries) {

    //Selected Tag for Distination country
    var distParent = document.getElementById("distParent");

    ////////////////  var durSelectList = document.createElement("select");
    var distSelectList = document.createElement("select");


    distSelectList.id = "mySelectdist";
    distSelectList.style.height = "47px";
    distSelectList.className = "custom-select px-4";
    distParent.appendChild(distSelectList);

/*---------------------------------------------------------------
       /////loop  to fill and create option for distination country  name
    --------------------------------------------------------------*/
    
    for (var i = 0; i < countries.length; i++) {
        var option = document.createElement("option");
        option.value = countries[i].Code;
        option.text = countries[i].Name;
        // if (option.value !== "IQ" || option.value !== "EG" || option.value !== "AE")

        /////Adding option created  to selected items
        distSelectList.appendChild(option);
    }
    distSelectList.addEventListener('change', function () {
        var result = distSelectList.options[distSelectList.selectedIndex].value;
        // alert(result);
        loadselectedCountryHotels(result);
    });
}//////End fill list of country

/*---------------------------------------------------------------
       ///call function to display country
    --------------------------------------------------------------*/

displayCountry();



 /*---------------------------------------------------------------
        Function to pass value from one page to another-
    --------------------------------------------------------------*/
function passInfoHotelSel(xId) {
    localStorage.setItem("value1", "50");
    localStorage.setItem("value2", "90");
    localStorage.setItem("idHotel", xId.id);
    // alert("hello");
    // console.log("passInfoHotelSel");
    // var value1="value1";
    // var value2="value2";
    // var queryString = "?para2=" + value1 + "&para2=" + value2;
    // window.location.href = "hotelDetail.html" + queryString;
    window.location.href = "hotelDetail.html";
}



 /*---------------------------------------------------------------
        Function to display Details of Hotel in hotelDetail.html page
    --------------------------------------------------------------*/
function displayHotelDetails(idHotel) {
    // alert("inside javascript    " + idHotel);
    const container = document.getElementById("container");
    const mainDetail=document.getElementById("mainDetail");
    const hotelName = document.getElementById("hotelName");

    fetch(urlhotelDet).then(res => res.json()).then(data => {
        data.hotelDet.forEach(hotel => {
            if (hotel.code.toString() === idHotel.toString()) {
                // alert(hotel.code);
                hotelName.innerHTML = hotel.hotelName;
                container.innerHTML+=`<div class="row" id="row1">
                <div class="col-lg-2">
                    <img src=${hotel.img1}
                        alt="" class="img-fluid mb-5">
                    <img src=${hotel.img2}
                        alt="" class="img-fluid mb-5">
                    <img src=${hotel.img3}
                        alt="" class="img-fluid mb-5">
                    <img src=${hotel.img4}
                        alt="" class="img-fluid mb-5">

                </div>
                <!-- ------------------------Big------------------------------------ -->
                <div class="col-lg-10" >
                    <img src=${hotel.bigImage}
                        alt="" class="img-fluid">
                </div>
            </div>
            <div class="row" id="row2">
                <div class="col-lg-2">
                    <img src=${hotel.img5}
                        alt="" class="img-fluid mr-5">
                </div>
                <div class="col-lg-2">
                    <img src=${hotel.img6}
                        alt="" class="img-fluid mr-5">
                </div>
                <div class="col-lg-2">
                    <img src=${hotel.img7}
                        alt="" class="img-fluid mr-5" >
                </div>
                <div class="col-lg-2">
                    <img src=${hotel.img8}
                        alt="" class="img-fluid mr-5">
                </div>
                <div class="col-lg-2">
                    <img src=${hotel.img9}
                        alt="" class="img-fluid mr-5">

                </div>
                <div class="col-lg-2">
                    <img src=${hotel.img10}
                        alt="" class="img-fluid mr-5">

                </div>
            </div>`;
            }
                       
        });
    });
    // mainDetail.appendChild(container);
}
 /*------------------
        Room Pic Slider
    --------------------*/
    $(".room-pic-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
        smartSpeed: 800,
        autoplay: false,
    });
