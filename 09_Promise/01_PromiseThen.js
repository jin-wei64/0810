function longTimeWork(workFine = true, errorMessage = "test") {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            (workFine) ? resolve("ryu") : reject(errorMessage);
        }, 1000);
    })
}
//resolve >> then , reject >> catch;
function usingLongTimeWork() {
    longTimeWork(true, "test")  // try true/false
    .then(function (e) {
        console.log(e);
    })
    .catch(function (e) {
        console.log(e);
    })
}

usingLongTimeWork();
