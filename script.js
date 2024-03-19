//1.Solving problems using array functions on the rest countries' data 
//a.Get all the countries from the Asia continent /region using the Filter function

//1st step : create a XHR object
var request = new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
request.open("GET","https://restcountries.com/v2/all");
//3rd step : establishing the bridge
request.send();
//4th step : once the data sucessfully received from server
//onload is an event
//when we use :  once the data / server is showing 200 sataus code
request.onload=function(){
    var result=JSON.parse(request.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(result);
}

//----------------------------------------------------------------------------------------------------

//b.Get all the countries with a population of less than 2 lakhs using Filter function

//1st step : create a XHR object
var request1 = new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
request1.open("GET","https://restcountries.com/v2/all");
//3rd step : establishing the bridge
request1.send();
//4th step : once the data sucessfully received from server
//onload is an event
//when we use :  once the data / server is showing 200 sataus code
request1.onload=function(){
    var result1=JSON.parse(request1.response);
    const pop = result1.filter((element)=>{
        return element.population<200000;
    })
console.log(pop);}

//-----------------------------------------------------------------------------------------
//c.Print the following details name, capital, flag using forEach function

//1st step : create a XHR object
var request2 = new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
request2.open("GET","https://restcountries.com/v2/all");
//3rd step : establishing the bridge
request2.send();
//4th step : once the data sucessfully received from server
//onload is an event
//when we use :  once the data / server is showing 200 sataus code
request2.onload=function(){
    var result2=JSON.parse(request2.response);
   result2.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

   });
}

//---------------------------------------------------------------------------------
//d.Print the total population of countries using reduce function

//1st step : create a XHR object
var request3= new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
request3.open("GET","https://restcountries.com/v2/all");
//3rd step : establishing the bridge
request3.send();
//4th step : once the data sucessfully received from server
//onload is an event
//when we use :  once the data / server is showing 200 sataus code
request3.onload=function(){
    var result3=JSON.parse(request3.response);
    var total = result3.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
 
}

//.......................................................

//e.Print the country which uses US Dollars as currency

//1st step : create a XHR object
var req = new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
req.open("GET","https://restcountries.com/v2/all");
//3rd step : establishing the bridge
req.send();
//4th step : once the data sucessfully received from server
//onload is an event
//when we use :  once the data / server is showing 200 sataus code
req.onload=function(){
    var res=JSON.parse(req.response);
   var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }

    //............................
 

 