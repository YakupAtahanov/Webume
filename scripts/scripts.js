const TRANSITION_RATE_1 = "500ms"
const TRANSITION_RATE_2 = "1000ms"
const TRANSITION_RATE_3 = "1500ms"
const TRANSITION_RATE_4 = "2000ms"
const TRANSITION_RATE_5 = "2500ms"
const TRANSITION_RATE_6 = "2500ms"
const TRANSITION_RATES = [TRANSITION_RATE_1, TRANSITION_RATE_2, TRANSITION_RATE_3, TRANSITION_RATE_4, TRANSITION_RATE_5]

const TIMEOUT_TIME_1 = 500
const TIMEOUT_TIME_2 = 1000
const TIMEOUT_TIME_3 = 1500
const TIMEOUT_TIME_4 = 2000
const TIMEOUT_TIME_5 = 2500

var currentOpenedSession = -1;

// var btn_click_me = document.getElementById("btn-click-me")
var click_container = document.getElementById("click-container")
var left_item_container = document.getElementsByClassName("left-item-container")
var right_item_container = document.getElementsByClassName("right-item-container")

var background_image = document.getElementsByClassName("background-image")[0]
var text_container = document.getElementById("text-container")
var my_name = document.getElementById("my-name")
var personality = document.querySelectorAll(".personality")
var i_am_text = document.getElementsByClassName("i-am-text")[0]

var scroll_up = document.getElementById("scroll-up")
var scroll_up_content = document.getElementsByClassName("scroll-up-content")

var background_information_content = document.getElementsByClassName("background-information-content")[0]
var experience_information_content = document.getElementsByClassName("experience-information-content")[0]
var education_information_content = document.getElementsByClassName("education-information-content")[0]

var information_sections = [background_information_content, experience_information_content, education_information_content]
var information_sections_handlers = [backgroundButtonClicked, experienceButtonClicked, educationButtonClicked]

var picture_border = document.getElementById("picture-border")
var arr = picture_border.childNodes

var personal_image = document.getElementsByClassName("")
var images = []
var i = 1
var j = 1
while (i < arr.length / 2) {
    arr[j].style.transition = TRANSITION_RATE_1
    images.push(arr[j])
    j = i * 2 + 1
    i++
    console.log(arr[j])
}
console.log(images)

background_image.style.transition = TRANSITION_RATE_4
text_container.style.transition = TRANSITION_RATE_4
// btn_click_me.style.transition = TRANSITION_RATE_4
my_name.style.transition = TRANSITION_RATE_3
i_am_text.style.transition = TRANSITION_RATE_3
personality.forEach(e => e.style.transition = TRANSITION_RATE_3)
information_sections.forEach(e => e.style.transition = TRANSITION_RATE_2)
scroll_up.style.transition = TRANSITION_RATE_4
click_container.style.transition = TRANSITION_RATE_3

function clickMeHandler() {
    click_container.style.background = "rgba(255,255,255,1)"
    setTimeout(function() {
        click_container.style.background = "rgba(255,255,255,0)"
    }, TIMEOUT_TIME_2 - 300)

    // btn_click_me.disabled = true
    // btn_click_me.style.opacity = "0"
    
    setTimeout(function() {
        for (var item in left_item_container) {
            if (left_item_container[item].style == undefined) break;
            left_item_container[item].style.paddingLeft = "2vw"
        }
        for (var item2 in right_item_container) {
            if (right_item_container[item2].style == undefined) break;
            right_item_container[item2].style.paddingRight = "1vw"
        }
    
        text_container.style.display = "flex"
        setTimeout(function() {
            click_container.remove()
        }, TIMEOUT_TIME_4 + 100)
        setTimeout(function() {
            my_name.style.opacity = "1"
        }, TIMEOUT_TIME_2)
        setTimeout(function() {
            i_am_text.style.opacity = "1"
        }, TIMEOUT_TIME_3)
    
        setTimeout(function() {
            cycleRoles(personality, 0)
        }, TIMEOUT_TIME_4)
    }, TIMEOUT_TIME_1 + 200)
}

function cycleRoles(collection, index) {
    if (index < collection.length) {
        collection[index].style.opacity = 1;
        setTimeout(function() {
            collection[index].style.opacity = 0;
            cycleRoles(collection, index + 1);
        }, 2000)
    }
    else {
        cycleRoles(collection, 0)
    }
}

function navButtonClicked(n) {
    information_sections_handlers[n]()
    background_image.style.filter = "blur(2px)"

    text_container.style.opacity = "0"

    scroll_up.style.marginTop = "-85vh"
    scroll_up.style.paddingTop = "2vh"
    scroll_up.style.height = "83vh"

    text_container.style.zIndex = "-1"
    setTimeout(function() {
        scrollUpContent(n)
    }, TIMEOUT_TIME_1)
    currentOpenedSession = n

}

function scrollUpContent(n) {
    information_sections[n].style.height = "85vh"
    information_sections[n].style.opacity = "1"
    picture_border.style.marginTop = "0.5%"
    picture_border.style.marginBottom = "0.25%"
} 

function mainMenuClicked() {
    text_container.style.zIndex = "0"
    background_image.style.filter = "blur(0px)"

    text_container.style.opacity = "1"

    scroll_up.style.marginTop = "0"
    scroll_up.style.paddingTop = "0"
    scroll_up.style.height = "0"
    picture_border.style.marginTop = "0"

    currentOpenedSession = -1
    clearPreviouslyOpenedSections(-1)
}


function backgroundButtonClicked() {
    clearPreviouslyOpenedSections(0)
    images[0].style.height = "100%"
    images[0].style.marginTop = "0"
    information_sections[0].style.height = "100%"
}
function experienceButtonClicked() {
    clearPreviouslyOpenedSections(1)
    images[1].style.height = "100%"
    images[1].style.marginTop = "0"
    information_sections[1].style.height = "100%"
}
function educationButtonClicked() {
    clearPreviouslyOpenedSections(2)
    images[2].style.height = "100%"
    images[2].style.marginTop = "0"
    information_sections[2].style.height = "100%"
}

function clearPreviouslyOpenedSections(n) {
    for (var section in information_sections) {
        if (information_sections[section].style == undefined) break
        if (section == n) continue
        information_sections[section].style.height = "0"
        information_sections[section].style.marginTop = "0"
        images[section].style.height = "0%"
        images[section].style.marginTop = "50%"
    }
}

document.addEventListener('DOMContentLoaded', clickMeHandler)