const c_field = document.getElementById("c-field");
const fctx = c_field.getContext("2d");
let size_field;
let size = 10;
let selectElement = null, map = { size: size, elements: [] };
let lengthElements = {};

function NewGame() {
    localStorage.easy = 1;
    localStorage.medium = 1;
    localStorage.hard = 1;
    Continue();
}
function Continue() {
    startLevels();
    if (localStorage.length == 0) return NewGame();
    showLevels();
}

const menu = document.getElementById("menu");
const levels = document.getElementById("levels");
const create = document.getElementById("create");
const goMenu = document.getElementById("goMenu");
const c = document.getElementById("c");
function showMenu() {
    menu.style.display = "flex";
    levels.style.display = "none";
    create.style.display = "none";
    goMenu.style.display = "none";
    c.style.display = "none";
}
function showLevels() {
    menu.style.display = "none";
    levels.style.display = "flex";
    c.style.display = "none";
    create.style.display = "none";
    goMenu.style.display = "flex";
}
function showGame() {
    menu.style.display = "none";
    levels.style.display = "none";
    c.style.display = "block";
    create.style.display = "none";
    goMenu.style.display = "none";
    document.body.style.background = "#151515";
}
function showLevelEditor() {
    menu.style.display = "none";
    levels.style.display = "none";
    c.style.display = "none";
    create.style.display = "flex";
    goMenu.style.display = "none";
    startCreate()
}
// startGame(1, "easy");
// showLevelEditor();
showMenu()


function activeIcons() {
    document.querySelector("#panel .elements").innerHTML += `<div><canvas class="none"></canvas></div>`;
    for (let key in OBJECTS) {
        let obj = OBJECTS[key];
        let div = document.createElement("div");
        div.innerHTML = `<canvas class="${key}"></canvas>`;
        if (obj.required) document.querySelector("#panel .required").append(div);
        else document.querySelector("#panel .elements").append(div);
    }
    for (let c of document.querySelectorAll("#create #panel > div canvas")) {
        let _class = c.getAttribute("class");
        c.width = c.height = 100;
        c.onclick = () => selectElement = _class == "none" ? null : _class;
        if (!Object.keys(OBJECTS).includes(_class)) continue;
        OBJECTS[_class].draw(c.getContext("2d"), c.width, 0, 0);
    }
}
function draw() {
    fctx.clearRect(0, 0, c_field.width, c_field.height);
    for (let name in OBJECTS) lengthElements[name] = 0;
    for (let e of map.elements) {
        let obj = OBJECTS[e.key];
        obj.draw(fctx, size_field, e.x, e.y);
        lengthElements[e.key]++;
    }
    for (let key in lengthElements) {
        let obj = OBJECTS[key];
        if (obj.only) {
            let elem = document.querySelector(`#panel .${key}`).parentElement;
            if (obj.only <= lengthElements[key]) {
                elem.setAttribute("hidden", "");
                if (key == selectElement) {
                    selectElement = null
                    c_field.style.cursor = "default";
                };
            } else {
                elem.removeAttribute("hidden");
            }
        }
    }
}

function resizefcanvas() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return document.getElementById("create").classList.add("m");
    } else document.getElementById("create").classList.remove("m");
    size_field = window.innerHeight / size;
    c_field.width = Math.round(window.innerHeight / size_field) * size_field;
    c_field.height = Math.round(window.innerHeight / size_field) * size_field;
}
function editSize(num) {
    size += num;
    if (size > 30 || size < 5) size -= num;
    resizefcanvas();
    draw();
    map.size = size;
}
function startCreate() {
    for (let c of document.querySelectorAll(".elements, .required")) {
        let nodes = c.childNodes;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].tagName == "DIV") nodes[i--].remove();
        }
    }

    window.addEventListener("resize", () => {
        resizefcanvas();
        draw();
    }, false);
    resizefcanvas();
    activeIcons();
    draw();

    c_field.onmouseout = draw;
    c_field.onmousedown = c_field.oncontextmenu = c_field.onmousemove = e => {
        let x = Math.floor(e.offsetX / size_field),
            y = Math.floor(e.offsetY / size_field);
        let elem = map.elements.find(e => e.x == x && e.y == y);

        if (e.which == 1 && selectElement) {
            // ADD
            if (!elem) {
                map.elements.push({
                    key: selectElement,
                    x: x,
                    y: y
                });
            }
        } else if (e.which == 3) {
            // CLEAR
            if (elem) return map.elements.splice(map.elements.indexOf(elem), 1);
        }
        draw();
        if (e.which == 0 && selectElement && !elem) {
            // HOVER
            fctx.globalAlpha = 0.5;
            OBJECTS[selectElement].draw(fctx, size_field, x, y);
            fctx.globalAlpha = 1;
        }
        return false;
    }
    let save = document.querySelector("#file .save");
    save.onclick = () => {
        if (map.elements.length == 0) return;
        let txt = encode(map);
        let data = "data:charset=utf-8," + encodeURIComponent(txt);
        save.href = data;
        save.target = "_blank";
        save.download = `${new Date().getTime()}.yoot`;
    }
    let fileInput = document.getElementById("fileInput");
    fileInput.addEventListener("change", () => {
        let label = document.querySelector("#file label");
        if (label.classList.contains("loading")) return console.log(1);
        let reader = new FileReader();
        label.classList.add("loading");
        reader.readAsText(fileInput.files[0]);
        reader.onload = function (e) {
            label.classList.remove("loading");
            label.removeAttribute("style");
            try {
                map = decode(e.target.result);
                draw();
            } catch (e) { label.style.color = "#e00"; }
        };
    }, false);
}

function encode(map) {
    return btoa(JSON.stringify(map))
}
function decode(str) {
    return JSON.parse(atob(str))
}

function startLevels() {
    let easy = LEVELS.easy.length,
        medium = LEVELS.medium.length,
        hard = LEVELS.hard.length;

    for (let span of document.querySelectorAll(`#levels > div > div`)) {
        span.innerHTML = "";
    }
    for (let d of ["easy", "medium", "hard"]) {
        for (let i = 0; i < eval(d); i++) {
            let l = localStorage[d];
            document.querySelector(`#levels .${d} > div`).innerHTML += `<span ${i < l ? "class='sel'" : ""}><b>${i + 1}</b></span>`;
        }
    }

    for (let span of document.querySelectorAll("#levels span.sel")) {
        span.onclick = function () {
            let lvl = +this.textContent;
            let d = this.parentElement.parentElement.classList[0];
            startGame(lvl, d);
        }
    }
}

function startGame(lvl, d) {
    let c = document.getElementById("c");
    let ctx = c.getContext("2d");
    let _c = document.getElementById("coins");
    let s = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
    c.width = c.height = s;
    showGame()
    let code = LEVELS[d][lvl - 1];
    if (code === undefined) return true;
    let map = decode(code);
    let coin_length = Object.entries(map.elements).filter(a => a[1].key == "coin").length;
    let coins = 0;
    function updateCoins() {
        _c.innerHTML = `${coins}/${coin_length}`;
    }
    if (coin_length > 0) {
        _c.style.display = "flex";
        updateCoins();
    }
    let size = map.size; // MAP SIZE
    let size_elem = s / size; // ELEMENT's SIZE
    let elem = map.elements;

    function draw() {
        ctx.clearRect(0, 0, c.width, c.height);
        for (let e of elem) {
            let obj = OBJECTS[e.key];
            obj.draw(ctx, size_elem, e.x, e.y);
        }
        requestAnimationFrame(draw);
    } draw();


    function Player() {
        let player = elem.find(obj => obj.key == "player");
        function getElem(x, y) {
            if (x < 0 || x > size - 1 || y < 0 || y > size - 1) return;
            return elem.find(o => o.x == x && o.y == y) || null;
        }
        function block(obj) {
            if (obj === undefined) return true;
            if (!obj) return false;
            return OBJECTS[obj.key].block;
        }
        this.standingOn = () => {
            let x = player.x,
                y = player.y;
            if (x < 0 || x > size - 1 || y < 0 || y > size - 1) return;
            return elem.find(o => o.x == x && o.y == y && o.key != player.key) || null;
        }

        this.moveRight = () => {
            if (block(getElem(player.x + 1, player.y))) return;
            player.x++;
        }
        this.moveLeft = () => {
            if (block(getElem(player.x - 1, player.y))) return;
            player.x--;
        }
        this.moveDown = () => {
            if (block(getElem(player.x, player.y + 1))) return;
            player.y++;
        }
        this.moveUp = () => {
            if (block(getElem(player.x, player.y - 1))) return;
            player.y--;
        }
    }
    function back() {
        startLevels();
        showLevels();
        document.onkeydown = null;
        document.body.style.background = "#262626"
        document.getElementById("coins").style.display = "none";
    }
    const player = new Player();
    document.onkeydown = e => {
        switch (e.keyCode) {
            case 68: case 39:
                // RIGHT
                player.moveRight()
                break;
            case 83: case 40:
                // DOWN
                player.moveDown()
                break;
            case 65: case 37:
                // LEFT
                player.moveLeft()
                break;
            case 87: case 38:
                // UP
                player.moveUp();
                break;

            case 27:
                back();
                break;
        }
        let obj = player.standingOn()
        if (!obj) return;
        function nextLevel() {
            document.getElementById("coins").style.display = "none";
            if (lvl == localStorage[d]) localStorage[d]++;
            if (startGame(lvl + 1, d)) {
                // END
                back();
            }
        }
        switch (obj.key) {
            case "finish":
                nextLevel()
                break;
            case "coin":
                coins++;
                map.elements.splice(map.elements.indexOf(obj), 1)
                updateCoins();
                if (coins == coin_length) nextLevel();
                break;
        }
    }
}