window.addEventListener("DOMContentLoaded", () => {
    
    const loader = document.querySelector(".loader");

    setTimeout(() => {
	loader.style.opacity = "0";
	setTimeout(() => {
	    loader.style.opacity = "none";
	}, 500);
    }, 2000);

    // Tab
    const tabsParent = document.querySelector(".tabheader__items"),
	tabs = document.querySelectorAll(".tabheader__item"),
	tabsContent = document.querySelectorAll(".tabcontent");

    
    function hideTabContent() {
	tabsContent.forEach(item => {
	    item.classList.add("hide");
	    item.classList.remove("show", "fade");
	});

	tabs.forEach(item => item.classList.remove("tabheader__item_active"));
    }

    function showTabContent(i = 0) {
	tabsContent[i].classList.add("show", "fade");
	tabsContent[i].classList.remove("hide");
	tabs[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (e) => {
	const target = e.target;
	if(target && target.classList.contains("tabheader__item")) {
	    tabs.forEach((item, idx) => {
		if(item == target) {
		    hideTabContent();
		    showTabContent(idx);
		}
	    })
	}
    })
   
    // Timer
    
    const deadline = new Date("2024-02-23 17:55:00");

    function getZero(num) {
	if(num >= 0 && num < 10) {
	    return `0${num}`;
	} else {
	    return num;
	}
    }

    function getTimeRemeaning(endtime){
	let days, hours, minutes, seconds;
	const timer = Date.parse(endtime) - Date.parse(new Date());
	
	if(timer <= 0) {
	    days = 0;
	    hours = 0;
	    minutes = 0;
	    seconds = 0;
	} else {
	    days = Math.floor(timer / (1000 * 60 * 60 * 24)),
	    hours = Math.floor((timer / (1000 * 60 * 60)) % 24),
	    minutes = Math.floor((timer / 1000 / 60) % 60),
	    seconds = Math.floor((timer / 1000) % 60);
	}
	return { timer, days, hours, minutes, seconds };
    }
    
    function setClock(selector, endtime) {
	const timer = document.querySelector(selector),
	    days = timer.querySelector("#days"),
	    hours = timer.querySelector("#hours"),
	    minutes = timer.querySelector("#minutes"),
	    seconds = timer.querySelector("#seconds"),
	    timeInterval = setInterval(updateClock, 1000);

	updateClock();

	function updateClock() {
	    const t = getTimeRemeaning(endtime);
	    days.innerHTML = getZero(t.days);
	    hours.innerHTML = getZero(t.hours);
	    minutes.innerHTML = getZero(t.minutes);
	    seconds.innerHTML = getZero(t.seconds);

	    if(t.timer <= 0) {
		clearInterval(timeInterval);
	    }
	}
    }
    setClock(".timer", deadline);

});
