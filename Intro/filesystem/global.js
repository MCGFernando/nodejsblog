

setTimeout(()=>{
    console.log('global in the timeout')  
    clearInterval(interval)  
},3000)

const interval = setInterval(() => {
    console.log('global in the interval')    
}, (1000));

console.log(__dirname)
console.log(__filename)