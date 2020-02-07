// Create a request variable and assign a new XMLHttpRequest object to it.

//<!DOCTYPE html>
//<html>
//<body>

//<h2>Use the XMLHttpRequest to get the content of a file.</h2>
//<p>The content is written in JSON format, and can easily be converted into a JavaScript object.</p>


    //<script>
//</script>

function parseJsonshourly(){
    var x = document.getElementById("myText").value;
    var y = document.getElementById("StateCode").value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            //document.write(myObj);

            document.getElementById("demo").innerHTML = myObj.data[0].wind_spd+"m/s";
            document.getElementById("demo1").innerHTML = myObj.data[0].rh+"%";
            document.getElementById("demo2").innerHTML = myObj.data[0].pres+"mb";
            document.getElementById("demo3").innerHTML = myObj.data[0].temp+"celcius";
        }
    };
    //xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+x+"&APPID=1eda3204a9b631abba8d6724f5b4c91a", true);
    xmlhttp.open("GET", "https://api.weatherbit.io/v2.0/current?city="+x+","+y+"&key=826452db8586427f8a08cacac318a514", true);
    //https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=API_KEY
    xmlhttp.send();



    var xmlhttp1 = new XMLHttpRequest();
    xmlhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj1 = JSON.parse(this.responseText);
            var i, addintostr = "",addanotherdata="",addtimeframe="",addwind="";

            for (i = 0; i < myObj1.data.length; i++) {
                addintostr += myObj1.data[i].rh+"%" + "<br>";
                addanotherdata +=myObj1.data[i].temp+"Celsius" + "<br>";
                addtimeframe +=myObj1.data[i].timestamp_local + "<br>";
                addwind +=myObj1.data[i].wind_spd+"m/s" + "<br>"
            }
            var list = ["hourlydata","hourlydata2","timeframe","winddata"];
            var list1 = [addintostr,addanotherdata,addtimeframe,addwind];
            for(j = 0;j < list.length;j++){
                document.getElementById(list[j]).innerHTML = list1[j];
            }
        }
    };
    xmlhttp1.open("GET", "http://api.weatherbit.io/v2.0/forecast/hourly?city="+x+","+y+"&key=826452db8586427f8a08cacac318a514&hours=5", true);
    xmlhttp1.send();


}



