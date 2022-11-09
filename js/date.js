const date = '2022-11-07T00:00:00.000Z'
let currentDate = Date.parse(new Date());
let days = (currentDate - Date.parse(date));      
console.log(Math.floor(days/8.64e7))

document.querySelector('.dateFrom').innerHTML = 'Прошло ' + Math.floor(days/8.64e7) + ' дня с момента обиды Дозоровой' 