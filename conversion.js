function temperature(){
    //to convert celsius to farenheit
    //[cel * (9/5)+32]
    var c = document.getElementById("celsius").value;
    var f = [c * (9/5)+32];
    document.getElementById("fahrenheit").value=f;
}

function weight(){
    //to convert KGs to Pounds
    //KG * 2.2
    var kg =  document.getElementById("kilo").value;
    var p = kg * 2.2;
    document.getElementById("pounds").value = p;
}

// function distance(){
//     //to convert Kms to miles
//     //kms * 0.62137
//     var km = document.getElementById("km").value;
//     var m = km + 2;
//     document.getElementById("miles").value = m;
//  }

function distance(){
    //to convert KGs to Pounds
    //km * 0.62137
    var km =  document.getElementById("km").value;
    var m = km * 0.62137;
    document.getElementById("miles").value = m;
}

