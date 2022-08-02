// Variables
var items = [{
        "name": "View Gui",
        "disabled": true,
        "hide": false,
        "clicked": onViewGuiClicked
    }, {
        "name": "Download Server Certificate",
        "clicked": onDownloadServerCertificateClicked
    }, {
        "name": "Connect to Screen",
        "clicked": onConnectToScreenClicked
    }, {
        "name": "Playback Mode",
        "className": "border-top",
        "children": [{
            "name": "start",
            "clicked": onPlaybackModeStartClicked
        }, {
            "name": "pause",
            "clicked": onPlaybackModePauseClicked
        }]
    },
    {
        "name": "Loop Mode",
        "className": "border-top",
        "children": [{
            "name": "Play Once",
            "clicked": onLoopModePlayOnceClicked
        }, {
            "name": "Play Loop",
            "clicked": onLoopModePlayLoopClicked
        }, {
            "name": "Play then Rewind",
            "clicked": onLoopModePlayThenRewindClicked
        }, {
            "name": "Play then Eject",
            "clicked": onLoopModePlayThenEjectClicked
        }]
    }
]

// Event functions:
function onViewGuiClicked() {
    document.getElementById("ViewGui");
    console.log("View Gui Clicked");
}
function onDownloadServerCertificateClicked() {
    document.getElementById("DownloadServer");
    console.log("Download Server Certificate Clicked");
}
function onConnectToScreenClicked() {
    document.getElementById("ConnectScreen");
    console.log("Connect Screen Clicked");
}
function onPlaybackModeStartClicked() {
    document.getElementById("PlaybackStart");
    console.log("Playback Start Clicked");
}
function onPlaybackModePauseClicked() {
    document.getElementById("PlaybackPause");
    console.log("Playback Pause Clicked");
}
function onLoopModePlayOnceClicked() {
    document.getElementById("LoopPlayOnce");
    console.log("Loop Play Once Clicked");
}
function onLoopModePlayLoopClicked() {
    document.getElementById("LoopPlayLoop");
    console.log("Loop Play Loop Clicked");
}
function onLoopModePlayThenRewindClicked() {
    document.getElementById("LoopPlayRewind");
    console.log("Loop Play Then Rewind Clicked");
}
function onLoopModePlayThenEjectClicked() {
    document.getElementById("LoopPlayEject");
    console.log("Loop Play Then Eject Clicked");
}