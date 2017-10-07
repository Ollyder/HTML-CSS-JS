var myVideo = document.getElementById("myVideo");
function playPause() {
	var ppButton = document.getElementById("playPause");
	if(myVideo.paused) {
		myVideo.play();
		ppButton.innerHTML="暂停";
	}else {
		myVideo.pause();
		ppButton.innerHTML="播放";
	}
}

function goBack(val) {
	myVideo.currentTime += val;
}

function volume(val) {
	myVideo.volume += val;
}

function isMuted() {
	var imButton = document.getElementById("isMuted");
	if(myVideo.muted) {
		myVideo.muted = false;
		imButton.innerHTML="静音";
	}else {
		myVideo.muted = true;
		imButton.innerHTML="声音";
	}
}
