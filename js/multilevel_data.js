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
function onViewGuiClicked() {}
function onDownloadServerCertificateClicked() {}
function onConnectToScreenClicked() {}
function onPlaybackModeStartClicked() {}
function onPlaybackModePauseClicked() {}
function onLoopModePlayOnceClicked() {}
function onLoopModePlayLoopClicked() {}
function onLoopModePlayThenRewindClicked() {}
function onLoopModePlayThenEjectClicked() {}