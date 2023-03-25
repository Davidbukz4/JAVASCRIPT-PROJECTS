// asynchronous function using setTimeout
setTimeout(func1, 3000); // time in milliseconds

function func1() {
    document.getElementById('demo-3').innerHTML = "Test async";
}

// asynchronous function using setInterval
setInterval(func2, 1000);

function func2() {
    let d = new Date();
    const hrs = d.getHours() + ':';
    const min = d.getMinutes() + ':';
    const sec = d.getSeconds();
    document.getElementById('demo-3').innerHTML = hrs + min + sec;
}