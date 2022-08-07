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
            "clicked": onPlaybackModeStartClicked,
            "children":[{
                "name": "Avenger",
                "clicked": onPlaybackModeStartMovie1Clicked
            },{
                "name": "Superman",
                "clicked": onPlaybackModeStartMovie2Clicked
            }]
        }, {
            "name": "pause",
            "clicked": onPlaybackModePauseClicked
        }, {
            "name": "stop",
            "clicked": onPlaybackModeStopClicked
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
    },
    {
        "name": "Testing Mode",
        "className": "border-top",
        "children": [{
            "name": "Play Once",
            "clicked": onLoopModePlayOnceClicked
        }, {
            "name": "Play Loop",
            "clicked": onLoopModePlayLoopClicked
        }, {
            "name": "Play then Eject",
            "clicked": onLoopModePlayThenEjectClicked
        }]
    }
]

// Event functions:
function onViewGuiClicked() {
    console.log("View Gui Clicked");
}
function onDownloadServerCertificateClicked() {
    console.log("Download Server Certificate Clicked");
}
function onConnectToScreenClicked() {
    console.log("Connect Screen Clicked");
}
function onPlaybackModeStartClicked() {
    console.log("Playback Start Clicked");
}
function onPlaybackModePauseClicked() {
    console.log("Playback Pause Clicked");
}
function onPlaybackModeStopClicked() {
    console.log("Playback Stop Clicked");
}
function onPlaybackModeStartMovie1Clicked() {
    console.log("Avenger Clicked");
}
function onPlaybackModeStartMovie2Clicked() {
    console.log("Superman Clicked");
}
function onLoopModePlayOnceClicked() {
    console.log("Loop Play Once Clicked");
}
function onLoopModePlayLoopClicked() {
    console.log("Loop Play Loop Clicked");
}
function onLoopModePlayThenRewindClicked() {
    console.log("Loop Play Then Rewind Clicked");
}
function onLoopModePlayThenEjectClicked() {
    console.log("Loop Play Then Eject Clicked");
}