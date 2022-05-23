
// kinda yoinked this from the main site :L


function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh === 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.querySelector(".clock").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);
}

currentTime();







/*

Not needed right now
var draggable = document.querySelector('.draggable');
var offset = { x: 0, y: 0 };


draggable.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseUp() {
    window.removeEventListener('mousemove', draggableMove, true);
}

function mouseDown(e) {
    offset.x = e.clientX - draggable.offsetLeft;
    offset.y = e.clientY - draggable.offsetTop;
    window.addEventListener('mousemove', draggableMove, true);
}

function draggableMove(e) {
    draggable.style.position = 'absolute';
    var top = e.clientY - offset.y;
    var left = e.clientX - offset.x;
    draggable.style.top = top + 'px';
    draggable.style.left = left + 'px';
}



*/



function settings() {
    new WinBox({
        title: "Settings - Komodo",
        url: "./sub-pages/settings.html"
    });
}

function exploits() {
    new WinBox({
        title: "Exploits - Komodo",
        url: "/assets/pages/sub-pages/exploits.html"
    });
}


function chat() { // pretty simple lmao
    new WinBox({
        title: "Chat Window - Komodo ",
        url: "https://kat.term7.repl.co", // change this to whatever chatting thing you are going to use

    });

}

function terminal() { // pretty simple lmao
    new WinBox({
        title: "Terminal - Komodo",
        url: "/assets/pages/sub-pages/terminal.html", // change this to whatever chatting thing you are going to use

    });

  function discord() {
    new WinBox({
        title: "Discord - Komodo",
        url: "https://discord.gg/zfBJ4hKCWz"
    });
}

}

document.querySelector(".exploit-icon").addEventListener("click", function () {
    new WinBox({
        title: "Exploits - Komodo",
        url: "./sub-pages/exploits.html"
    })
})


document.querySelector(".games-ico").addEventListener("click", function () {
    new WinBox({
        title: "Games - Komodo",
        url: "./sub-pages/games.html"
    })
})

document.querySelector(".search-icon").addEventListener("click", function () {
    new WinBox({
        title: "Web Browser - Komodo",
        url: "./sub-pages/proxy.html"
    })
})

document.querySelector(".discord-ico").addEventListener("click", function () {
    new WinBox({
        title: "Discord - Komodo",
        url: "https://discord.gg/zfBJ4hKCWz"
    })
})

document.querySelector(".terminal-icon").addEventListener("click", function () {
    new WinBox({
        title: "Terminal - Komodo",
        url: "/assets/pages/sub-pages/terminal.html"
    })
})
        document.oncontextmenu = rightClick;
        function rightClick(clickEvent) {
            clickEvent.preventDefault();
        } 

document.onclick = hideMenu;
    document.oncontextmenu = rightClick;
      
    function hideMenu() {
        document.getElementById("contextMenu")
                .style.display = "none"
    }
  
    function rightClick(e) {
        e.preventDefault();
  
        if (document.getElementById("contextMenu")
                .style.display == "block")
            hideMenu();
        else{
            var menu = document.getElementById("contextMenu")
  
            menu.style.display = 'block';
            menu.style.left = e.pageX + "px";
            menu.style.top = e.pageY + "px";
        }
    }