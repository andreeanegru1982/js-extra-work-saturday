//Cum am facut eu

// let count = 10;

// const interval = setInterval(function() {
//     console.log(` ${count} `);
//     count--;
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval);
//     console.log('The count down in over');
// }, 10000);


//Cum a facut Adi
const renderTime = function() {
    document.querySelector('#seconds').textContent = count;
    document.querySelector('#minutes').textContent = countMin;
    count--;

    if(count == 0){
        if(countMin == 0){
            clearInterval(intervalId);
        document.querySelector('#seconds').textContent = "00"
        document.querySelector('#minutes').textContent = "00:";
        }
        
        else{
            countMin--;
            count = 59;
        } 
    }    
    else{
        count--; 
    }    
    
}   


let countMin = 1;
let count = 59;
const intervalId = setInterval(renderTime, 1000);




