

var urlAirport="../data/airport.json";
var urlAirlines="../data/Airlines.json";

var urlData="../data/data.json";
// var globalContainer=null;
// var counter=0;
const main=document.getElementById("main");

// const containrDiv=document.querySelector('#container');


const idrow=document.getElementById("idrow");
const idcol=document.getElementById("idcol");
const idcontainer=document.getElementById("idcontainer");
const idrowBooking=document.getElementById("idrowBooking");
const idboreder=document.getElementById("idboreder");
const idGrid=document.getElementById("idGrid");

const parentUL=document.getElementById("parentUl");
var flightNo=document.getElementById("flightNo");
var dateTrip=document.getElementById("dateTrip");
var tripHeader=document.getElementById("tripHeader");
var logoComp="";
var nameCompAirline="";

 

var airlineArry=[];
// diaplayAllInfo();
function getAllInfoTrip(xflight_date,xtimezone_from,xschedualed_from,xtimezone_to,xschedualed_to,xgate_from,xgate_to,xairline_code,xflight_number,xisBack,xschedualed_Backfrom,xtimezone_Backto){
    this.flight_date=xflight_date;
    this.timezone_from=xtimezone_from;
    this.schedualed_from=xschedualed_from;
    this.timezone_to=xtimezone_to;
    this.schedualed_to=xschedualed_to;
    this.gatFrom=xgate_from;
    this.gatTo=xgate_to;
    this.airline_code=xairline_code;
    this.flight_number=xflight_number;
    this.isBack=xisBack;
    this.schedualed_Backfrom= xschedualed_Backfrom;
    this.timezone_Backto=xtimezone_Backto;
}
var getAllInfoTripArray=[];

// create object of info country to display all country
function country(xkey,xcode){
    this.key=xkey;
    this.code=xcode;
}
var countryArr=[];
// ########################################################################################################
// ------------------------------------This Function Display All Data----------------------------------
function loadAllTripsComp(){
  
    // get all country key and code
    fetch(urlAirlines).then(res => res.json()).then(data =>{
        data.airline.forEach(trip => {
            console.log("trip.key=Nowwwww======"+trip.key);
            fetchCodeAirline(trip.key);
        });
    });

 }
//loadAllTripsComp();

// ########################################################################################################
function returnLogo(xCode){
    fetch(urlAirlines).then(res => res.json()).then(data =>{
        data.airline.forEach(trip => {
            if(xCode===trip.code)
                return(trip.key);
        });
    });
}

////////////////////////////////////////////////////////
function getTrips(url){
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data);
        showTrips(data.airline);
    });
}


function showTrips(trips){
    trips.forEach(trip => {
        const {name,key, code}=trip;
        console.log(trip.key);
    });
}
//getTrips(urlAirlines);

//-------------------------------get code for Airline Company in Airline.json File---------------------------------------//
function fetchCodeAirline(id){
    var i=0;
    fetch(urlAirlines).then(res => res.json()).then(data =>{
        data.airline.forEach(trip => {
        if (id === trip.key ){
            console.log("code="+trip.code);
            var code=trip.code;
            logoComp=trip.logo;
            nameCompAirline=trip.name;
            fetchDataOfTrip(code,trip.country);
        }
        else{
            console.log(trip.key);
        }
    });
        
    });
    
}
//-------------------------------get code for data of trip in data.json File---------------------------------------//
function fetchDataOfTrip(code,country){
    try {
        
    
    getAllInfoTripArray=[];
    fetch(urlData).then(res => res.json()).then(info =>{
        info.data.forEach(trip => {
            if(trip.airline.code===code){
                console.log("trip.flight.number== "+trip.departure.schedualed);
                console.log("date==  "+trip.departure.timezone+ ","+country+" - " + trip.arrival.timezone);//from json
                tripHeader.innerHTML=trip.departure.timezone + ","+country+" - " + trip.arrival.timezone;//from json
                
                
                                    // function getAllInfoTrip(xflight_date,xtimezone_from,xschedualed_from,xtimezone_to,xschedualed_to,xgate_from,xgate_to,xairline_code,xflight_number,xisBack,xschedualed_Backfrom,xtimezone_Backto){
                getAllInfoTripArray.push(new getAllInfoTrip(trip.flight_date,trip.departure.timezone,trip.departure.schedualed,trip.arrival.timezone,trip.arrival.schedualed,trip.departure.gate,trip.arrival.gate,trip.airline.code,trip.flight.number,trip.back.isBack,trip.back.schedualed_from,trip.back.estimated_arrive));
        // // -----------------------------display information about trip------------------------------------///
                    // displayTrips(getAllInfoTripArray);
                    console.log(trip.arrival);
                
            }///if condition
            console.log("getAllInfoTripArray.length)==  "+getAllInfoTripArray.length);
        });///forEach
        displayTrips(getAllInfoTripArray);
    });///fetch
} catch (error) {
        console.log(error.number);
}
}///end function
// ------------------------------Display Trips ---------------------------------------------------//
function displayTrips(getAllInfoTripArray){
    
    main.innerHTML+=` 
    <div class="col-md-1">
    </div>
    <div class="col-md-10 mt-3">
    <!-------------------------------- Go ----------------------------------------------->
    <div class="bg-white p-3 rounded border">
        <div class="fltDptrGrid "> 
            <div class="tripTitle">
                <span class="destinationGrid">
                <strong class="icon-flight onw">
                </strong>
                
                <em><i  class="fa fa-plane myFontAwo" ></i>Departure </em>  
                </span>
                <small> Wed, 15 Sep 2021 </small> 
            </div>
            <div class="departureGrid"> Baghdad <i  class="fa fa-plane myFontAwo pl-5" ></i><small>  
            Baghdad Intl.
            </small> 
            </div>
            <div class="returnGrid"> Alexandria <small> 
            Borg El Arab International Airport
            </small> </div>
        </div><!-------------fltDptrGrid  -->
        <div class="fltResultsGrid">
            <div class="fltResultsGridBrd parentUl" id="parentUl">`;
             // Stat UL/LI
                        // --------------------------------------------------------------------------------------

                        
                        var ul = document.createElement('ul');
                       
                        ul.className="fltResults _flight_trip2";
                        // document.getElementById("parentUl").appendChild(ul);
                    console.log("nameCompAirline ====  "+nameCompAirline)
                    ////------------------------------------loop for all trips in airline company----------------------------------//
                        getAllInfoTripArray.forEach(function(getAllInfoTrip){
                            var li = document.createElement('li');
                            console.log("getAllInfoTrip.flight_date  === "+ getAllInfoTrip.flight_date);
                            li.className="legResult";
                            ul.appendChild(li);
                            li.innerHTML =`<div class="row d-inline-flex w-100 ml-2">
                                        <div class="col-xs-4 ml-3  mt-2 pt-3">
                                            <input class="customRadio " type="radio" data-date="2021-10-12T02:40:00" data-index="1" id="trip1_0"
                                            name="trip1">
                                        </div>
                                        <div class="col-xs-4 ml-3 pt-3">
                                            <figure class="imgComp "><span><img src=${logoComp} alt="Turkish Airlines" title=${nameCompAirline}></span></figure>
                                        
                                        </div>
                                        <div class="col-xs-4 ml-2 mt-2 pt-3 ">
                                            <em title="Turkish Airlines">${nameCompAirline}</em>
                                            <span class="airlineNum ml-1 mr-1 align-middle"> </span>
                                        </div>
                                        <div class="col-xs-4 ml-5 ml-schedualed_from3 mt-2 pt-3">
                                            <em title="Turkish Airlines">${getAllInfoTrip.flight_number}</em>
                                            <span class="airlineNum ml-1 mr-1 align-middle"> TK -  303</span>
                                        </div>
                                        <div class="col-xs-4 ml-5 mt-2 pt-3">
                                            <em title="Turkish Airlines">${getAllInfoTrip.flight_date}</em>
                                            <span class="airlineNum ml-1 mr-1 align-middle"> TK -  303</span>
                                        </div>
                                        <div class="col-xs-4  ml-auto">
                                            <button class="slide_from_left lign-middle" data-toggle="tooltip" data-placement="top" title="booking"><span><i  class="fa fa-plane myFontAwo myFontAwo-button fa-spin fa-3x" ></i></span></button>
                                            <!-- <i class='fas fa-hand-point-left fa-spin fa-3x'></i> -->
                                        </div>
                                    </div>`;
                            
                                    // li.innerHTML += name;
                            
                                });
                                document.getElementById("parentUl").appendChild(ul);
    main.innerHTML+= `</div><!--Result Grid-->
            <!--      end from to -->
        </div><!--fltResultsGrid-->

    </div><!--bg-white-->
    </div><!--Main Col-->
<div class="col-md-1">
</div>
`;

//     allTripParintDiv.innerHTML=`
//    `;
//         main.appendChild(allTripParintDiv);

}
//-------------------------------When click on airline Comapany logo---------------------------------------//
function getIDAirlines(linkID) {
main.innerHTML="";
// getAllInfoTripArray.length=0;
console.log("linkID========================"+linkID);
fetchCodeAirline(linkID.id);
// fetch(url).then(res => res.json()).then(data =>{
//     console.log(data);
//     showTrips(data.airline);
// });
}
// -----------------------------Display All Data---------------------------------------------------------

// ----------------------------Make Filter Date----------------------------------------------------------------------
function filterDate(){
    var startDate = new Date("2015-08-04");
        var endDate = new Date("2015-08-12");

        var resultProductData = product_data.filter(function (a) {
            var hitDates = a.ProductHits || {};
            // extract all date strings
            hitDates = Object.keys(hitDates);
            // improvement: use some. this is an improment because .map()
            // and .filter() are walking through all elements.
            // .some() stops this process if one item is found that returns true in the callback function and returns true for the whole expression
            hitDateMatchExists = hitDates.some(function(dateStr) {
                var date = new Date(dateStr);
                return date >= startDate && date <= endDate
            });
            return hitDateMatchExists;
        });
        console.log(resultProductData);
}


/*---------------------------------
javascript for room page
 ----------------------------------*/


'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Date Picker
	--------------------*/
    $(".datepicker-1").datepicker();
    $(".datepicker-2").datepicker();

    /*------------------
		Nice Selector
	--------------------*/
    $('.suit-select').niceSelect();


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

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.pop-up').magnificPopup({
        type: 'iframe'
    });

})(jQuery);