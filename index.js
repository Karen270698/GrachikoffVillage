function init() {
    const slider = document.querySelector(".slider");
    const nextBtn = slider.querySelector(".slider .nav .next");
    const prevBtn = slider.querySelector(".slider .nav .prev");
    const items = slider.querySelectorAll(".slider .item");
    let current = 0;
    items.forEach((item) => {
        const textWrapper1 = item.querySelector(".item-title");
        textWrapper1.innerHTML = textWrapper1.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );
        const textWrapper2 = item.querySelector(".item-text");
        textWrapper2.innerHTML = textWrapper2.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );
    });
    function anim(current, next, callback) {
        const currentImgs = current.querySelectorAll(".img");
        const currentText = current.querySelectorAll(".content .letter");
        const nextImgs = next.querySelectorAll(".img");
        const nextText = next.querySelectorAll(".content .letter");
        const duration = 400;
        const offset = "-=" + 300;
        const imgOffset = duration * .8;
        const tl = anime.timeline({
            easing: "easeInOutQuint",
            duration: duration,
            complete: callback
        });
        // Add children
        tl.add({
            targets: currentText,
            translateY: [0, '-150px'],
            opacity: [1, 0],
            easing: "easeInQuint",
            duration: 600,
            delay: 0
        })
            .add({
                targets: currentImgs[0],
                translateY: -600,
                rotate: [0, '-15deg'],
                opacity: [1, 0],
                easing: "easeInCubic"
            }, offset)
            .add({
                targets: currentImgs[1],
                translateY: -600,
                rotate: [0, '15deg'],
                opacity: [1, 0],
                easing: "easeInCubic"
            }, "-=" + imgOffset)
            .add({
                targets: currentImgs[2],
                translateY: -600,
                rotate: [0, '-15deg'],
                opacity: [1, 0],
                easing: "easeInCubic"
            }, "-=" + imgOffset)
            .add({
                targets: currentImgs[3],
                translateY: -600,
                rotate: [0, '15deg'],
                opacity: [1, 0],
                easing: "easeInCubic"
            }, "-=" + imgOffset)
            .add({
                targets: current,
                opacity: 0,
                duration: 10,
                easing: "easeInCubic"
            })
            .add({
                targets: next,
                opacity: 1,
                duration: 10
            }, offset)
            .add({
                targets: nextImgs[0],
                translateY: [600, 0],
                rotate: ['15deg', 0],
                opacity: [0, 1],
                easing: "easeOutCubic"
            }, offset)
            .add({
                targets: nextImgs[1],
                translateY: [600, 0],
                rotate: ['-15deg', 0],
                opacity: [0, 1],
                easing: "easeOutCubic"
            }, "-=" + imgOffset)
            .add({
                targets: nextImgs[2],
                translateY: [600, 0],
                rotate: ['15deg', 0],
                opacity: [0, 1],
                easing: "easeOutCubic"
            }, "-=" + imgOffset)
            .add({
                targets: nextImgs[3],
                translateY: [600, 0],
                rotate: ['-15deg', 0],
                opacity: [0, 1],
                easing: "easeOutCubic"
            }, "-=" + imgOffset)
            .add({
                targets: nextText,
                translateY: ['150px', 0],
                opacity: [0, 1],
                easing: "easeOutCubic",
                duration: 600,
                delay: (el, i) => 10 * (i + 1)
            }, offset);
    }
    let isPlaying = false;
    function updateSlider(newIndex) {
        const currentItem = items[current];
        const newItem = items[newIndex];
        function callback() {
            currentItem.classList.remove("is-active");
            newItem.classList.add("is-active");
            current = newIndex;
            isPlaying = false;
        }
        anim(currentItem, newItem, callback);
    }
    function next() {
        if (isPlaying) return;
        isPlaying = true;
        const newIndex = current === items.length - 1 ? 0 : current + 1;
        updateSlider(newIndex);
    }
    function prev() {
        if (isPlaying) return;
        isPlaying = true;
        const newIndex = current === 0 ? items.length - 1 : current - 1;
        updateSlider(newIndex);
    }
    nextBtn.onclick = next;
    prevBtn.onclick = prev;
}
document.addEventListener("DOMContentLoaded", init);
/*----------------------------*/

$(function () {
    let count = 1;
    let click = true;
    let num = $(".cart").length;
    $(".cart").click(function () {
        if (!click) {
            return;
        }
        click = false;
        let card = $(this);
        if (count < num) {
            $(this).addClass("bottom");
            count++;
        } else {
            $(this).addClass("bottom_last");
            count++;
        }
        if (count == num + 1) {
            setTimeout(function () {
                $(".cart").removeClass("bottom").removeClass("bottom_last");
                count = 1;
            }, 1000);
        }
        setTimeout(function () {
            click = true;
        }, 1000);
    });
});
//-----------------------------

//Menu 
/*
var coll = document.getElementsByClassName("menu");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

*/

//--------------Grid-------------
$(function () {
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function () {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})
// при прокрутке окна (window)
$(window).scroll(function () {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 400) {
        // то сделать кнопку scrollup видимой
        $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.scrollup').fadeOut();
    }
});