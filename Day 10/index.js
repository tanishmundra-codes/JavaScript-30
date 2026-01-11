promise1 = new Promise(resolve => setTimeout(() => resolve (10), 50))
promise2 = new Promise(resolve => setTimeout(() => resolve (10), 50))



resultPromise = new Promise(resolve => setTimeout(() => resolve(
    Promise.all([promise1, promise2]).then(function(valArray){
        return valArray[0] + valArray[1];
    })
), 50)).then(console.log)
