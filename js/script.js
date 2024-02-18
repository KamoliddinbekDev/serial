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
});
