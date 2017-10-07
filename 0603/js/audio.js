var audio = document.getElementById('audio');
var playpause = document.getElementById("play-pause");
var volume = document.getElementById("volume");
audio.controls = false;

function togglePlayPause() {
	if(audio.paused || audio.ended) {
		playpause.title = "暂停";
		playpause.innerHTML = '<i class="fa fa-pause fa-3x"></i>';
		audio.play();
	} else {
		playpause.title = "播放";
		playpause.innerHTML = '<i class="fa fa-play fa-3x"></i>';
		audio.pause();
	}
}

function setVolume() {
	audio.volume = volume.value;
}
