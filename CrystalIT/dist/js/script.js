// function getTimeRemaining(endtime) {
//     var t = Date.parse(endtime) - Date.parse(new Date());
//     var seconds = Math.floor((t / 1000) % 60);
//     var minutes = Math.floor((t / 1000 / 60) % 60);
//     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     var days = Math.floor(t / (1000 * 60 * 60 * 24));
//     return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds
//     };
// }
//
// function initializeClock(id, endtime) {
//     var clock = document.getElementById(id);
//     var daysSpan = clock.querySelector('.days');
//     var hoursSpan = clock.querySelector('.hours');
//     var minutesSpan = clock.querySelector('.minutes');
//     var secondsSpan = clock.querySelector('.seconds');
//
//     function updateClock() {
//         var t = getTimeRemaining(endtime);
//
//         daysSpan.innerHTML = t.days;
//         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//
//         if (t.total <= 0) {
//             clearInterval(timeinterval);
//         }
//     }
//
//     updateClock();
//     var timeinterval = setInterval(updateClock, 1000);
// }
//
// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// initializeClock('clock', deadline);

//instagram

var userFeed = new Instafeed({
    get: 'user',
    userId: '5738866778',
    clientId: '7e30fdd9d40e4e15814ab149e3f1cf66',
    accessToken: '1505594984.7e30fdd.f2ed00d630234991ad4a4226cd932d61',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
    sortBy: 'most-recent',
    limit: 5,
    links: false
});
userFeed.run();







// $(document).ready(function () {
//     function get_timer(){
//
//         var date_new = "March 24, 2018 13:00";
//
//         var date = new Date();
//         var date_t = new Date(date_new);
//
//         var timer = date_t - date;
//
//         if(date_t > date){
//             var day = parseInt(timer/(24*60*60*1000));
//             if(day<10){
//                 day = day;
//             }
//             day = day.toString();
//
//             var hour = parseInt(timer/(60*60*1000))%24;
//             if(hour<10){
//                 hour = '0' + hour;
//             }
//             hour = hour.toString();
//
//             var min = parseInt(timer/(60*1000))%60;
//             if(min<10){
//                 min = '0' + min;
//             }
//             min = min.toString();
//
//             var sec = parseInt(timer/1000)%60;
//             if(sec<10){
//                 sec = '0' + sec;
//             }
//             sec = sec.toString();
//             $("#clock").html("<span id='stop'>" + day + " days" + ":" + hour + ":" + min + ":" + sec +"</span>")
//
//             setTimeout(get_timer,1000);
//         }
//         else{
//             $("#clock").html("<span id='stop'>Отсчет закончен!</span>")
//         }
//     }
//     get_timer();
// } );

