// waiting for a timeout
async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Test async and wait');}, 3000);
    });
    document.getElementById('demo-6').innerHTML = await myPromise;
}

myDisplay();

// waiting for a file
async function getFile() {
    let myPromise1 = new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.open('GET', 'test.html');
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                resolve('File not found');
            }
        };
        req.send();
    });
    document.getElementById('demo-7').innerHTML = await myPromise1;
}

getFile();