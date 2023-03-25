// waiting for a timeout
let prom = new Promise(function(myResolve, myReject) {
    setTimeout(function() {
        myResolve("Test promise");
    }, 3000);
})

prom.then(function(value) {
    document.getElementById('demo-4').innerHTML = value;
});

// waiting for a file
let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "test.htm");
    req.onload = function() {
        if (req.status == 200) {
            myResolve(req.response);
        } else {
            myReject("File not Found");
        }
    };
    req.send();
});

myPromise.then(
    function(value) {myDisplayer1(value);},
    function(error) {myDisplayer2(error);}
);

function myDisplayer1(text) {
    document.getElementById('demo-5').innerHTML = text;
}

function myDisplayer2(text) {
    document.getElementById('demo-5').innerHTML = 'error: ' + text;
}