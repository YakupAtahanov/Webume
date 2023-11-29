function clickMeHandler() {
    console.log("Clicked")
    var btn = document.getElementById("btn-click-me")
    var background = document.getElementById("click-container")
    var items = document.getElementsByClassName("nav-item-container")
    var name = document.getElementById("my-name")
    var personality = document.querySelectorAll(".personality")
    var iAmText = document.getElementsByClassName("i-am-text")[0]

    background.style.transition = "1500ms"
    background.style.background = "rgba(0,0,0,0)"

    btn.style.transition = "1000ms"
    btn.disabled = true
    btn.style.opacity = "0"
    
    for (var item in items) {
        if (items[item].style == undefined) break;
        items[item].style.paddingLeft = "5%"
    }

    name.style.transition = "500ms"
    iAmText.style.transition = "500ms"
    setTimeout(function() {
        console.log("HUDEUI")
        background.remove()
    }, 2100)
    setTimeout(function() {
        name.style.opacity = "1"
    }, 1000)
    setTimeout(function() {
        iAmText.style.opacity = "1"
    }, 1500)

    personality.forEach(e => e.style.transition = "500ms")
    setTimeout(function() {
        cycleRoles(personality, 0)
    }, 2000)
}

function cycleRoles(collection, index) {
    console.log("Worked")
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