var unreadCount = 0;
// service worker
window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
    // Set the badge
    setAppBadge();
}

function displayNotification() {

    Notification.requestPermission().then(function(permission) {

    console.log('notification permission status: ', permission)

    });


    if(Notification.permission === 'granted'){
        navigator.serviceWorker.getRegistration()
        .then(reg =>{
            reg.showNotification('Subscribed', options);
            unreadCount++;
        });

    }

    
    setAppBadge();
   
}

function setAppBadge(){
        
navigator.setAppBadge(unreadCount).catch((error) => {
    //Do something with the error.
    unreadCount = 0;
    console.log(error);
  });

}

function clearAppBadge(){
    navigator.clearAppBadge().catch((error) => {
        // Do something with the error.
        console.log(error);
  });  
}

function go() {

}


    const options = {
        body: 'You have subscribed to Travel World',
        icon: 'images/logo-512.png',
        vibrate: [100,500,100],
        badge: 'images/logo-512.png',
        data: {primaryKey:1},
        actions:[
            {action: 'go', title: 'Go to the Website!', icon:'https://vanarragon.ca/nimage/icon.png'},
            {action: 'close', title: 'No Thanks', icon:'https://vanarragon.ca/nimage/icon.png'}
        ]


    };



// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 
// counter design
 document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /  range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
 });
   

 