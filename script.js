const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

const weekdays = [
    'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'
];

const deadline = document.querySelector(".deadline");

const end_date = new Date(2022,5,28,15,40,10);
const year = end_date.getFullYear();
const month = months[end_date.getMonth()];
const date = end_date.getDate();
const day = weekdays[end_date.getDay()-1];
const hour = end_date.getHours();
const minute = end_date.getMinutes();
const sec = end_date.getSeconds();

deadline.textContent = `The end date is ${day}, ${date} ${month} ${year} ${hour} : ${minute} am`;


const item = document.querySelectorAll(".box h2");

const end_time = end_date.getTime();

function getremaining_time(){
    const current_time = new Date().getTime();
    const remaining_time = end_time-current_time;

    const day_ms = 24*60*60*1000; //ms = mili second
    const hour_ms = 60*60*1000;
    const minute_ms = 60*1000;
    const second_ms = 1*1000;

    let days = Math.floor(remaining_time/day_ms);
    console.log(days);
    let hours = Math.floor((remaining_time % day_ms)/hour_ms);
    console.log(hours);
    let minutes = Math.floor((remaining_time % hour_ms)/minute_ms);
    console.log(minutes);
    let seconds = Math.floor((remaining_time % minute_ms)/second_ms);
    console.log(seconds);

    //array to store these values
    const countdown = [days,hours,minutes,seconds];

    function formatting(item){
        if(item<10){
            return (item = `0${item}`)
        }
        else{
            return item;
        }
    }
    item.forEach(function(item,index){
        item.innerHTML = formatting(countdown[index]);
    });

    if(remaining_time<0){
        clearInterval(real_time);
        deadline.textContent = `END DATE EXPIRED`
    }
}

let real_time = setInterval(getremaining_time,1000);
getremaining_time();