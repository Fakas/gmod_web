const spinners = ["bafl", "bmo", "camper", "fakas", "mafn", "megafire", "n00beh", "tsouki", "kean", "weirdwolf", "jay", "randomgamer"];
const spinner_name = spinners[Math.floor(Math.random() * spinners.length)];
const spinner_src = "images/spinners/" + spinner_name + ".png";
const spinner = new Image();
spinner.src = spinner_src;

const messages = [
    "Extending Bafl's hitbox...",
    "Raising BMO's karma...",
    "Discombobulating Camper...",
    "Removing Fakas from your head...",
    "Yeeting Mafn out of an airlock...",
    "Turning MegaFire's corpse into a bomb...",
    "Spawning an explosive barrel near n00beh...",
    "Lowering Tsouki's karma...",
    "Infecting Kean...",
    "Yiffing WeirdWolf...",
    "Deleting Jay's textures...",
    "Distracting RandomGamer with breasts..."
];

var files_total = 0;
var files_needed = 0;
var file_downloading;
var status = "";
var rotation = 0;

const debug = false;

// Garry's Mod Functions
function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    document.getElementById("title").innerText = servername;
    document.getElementById("map_name").innerText = mapname;
    document.getElementById("gamemode_name").innerText = gamemode;
    document.getElementById("status").innerText = "Retrieving server info...";
    showPage();
}

function SetFilesTotal(total) {
    files_total = total;
}

function SetFilesNeeded(needed) {
    files_needed = 0;
}

function DownloadingFile(name) {
    file_downloading = name;
    //document.getElementById("loading").innerText = name;

}

function SetStatusChanged(gmod_status) {
    if(gmod_status.indexOf(" Loading ") !== -1) {
        status = "Loading addons...";
        load_status = gmod_status;
    } else {
        status = messages[Math.floor(Math.random() * messages.length)];
        load_status = "";
    }
    document.getElementById("status").innerText = status;
    document.getElementById("loading").innerText = load_status;
}

// Internal functions
function showPage() {
    renderSpinner();
    setInterval(function() {
        advanceSpinner();
    }, 5);
}

function renderSpinner() {
    document.getElementById("spinner").src = spinner_src;
}

function advanceSpinner() {
    rotation += 1;
    document.getElementById("spinner").style.webkitTransform = "rotate("+rotation+"deg)";
}

window.onload = function() {
    console.log("HERE WE GO!");
    if(debug) {
        GameDetails(
            "ServeyMcServeface (TTT)",
            "https://serveymcserveface.com/gameserver/gmod/ttt/loading.html",
            "ttt_minecraft",
            8,
            "76561197995176031",
            "terrortown"
        );
    }
};

