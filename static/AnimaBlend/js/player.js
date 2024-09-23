// Get elements
const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPause');
const skipBackBtn = document.getElementById('skipBack');
const skipForwardBtn = document.getElementById('skipForward');
const volumeSlider = document.getElementById('volume');
const fullScreenBtn = document.getElementById('fullScreen');
const progressBar = document.getElementById('progress');
const progressContainer = document.getElementById('progressContainer');

// Play or pause the video
function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '⏸'; // Change icon to pause
    } else {
        video.pause();
        playPauseBtn.textContent = '▶'; // Change icon to play
    }
}

// Skip backward 10 seconds
function skipBack() {
    video.currentTime -= 10;
}

// Skip forward 10 seconds
function skipForward() {
    video.currentTime += 10;
}

// Adjust the volume
function handleVolumeChange() {
    video.volume = volumeSlider.value;
}

// Update progress bar as the video plays
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
}

// Seek in the video when clicking on progress bar
function scrub(e) {
    const scrubTime = (e.offsetX / progressContainer.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Allow progress bar drag-and-drop
let isDragging = false;

progressContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    scrub(e);
});

progressContainer.addEventListener('mousemove', (e) => {
    if (isDragging) scrub(e);
});

progressContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

progressContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});

// Fullscreen mode
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        videoContainer.requestFullscreen();
        videoContainer.classList.add('fullscreen');
        showControlsOnMouseMove();  // Ensure controls show on mouse move in fullscreen
    } else {
        document.exitFullscreen();
        videoContainer.classList.remove('fullscreen');
        videoContainer.classList.remove('hide-controls');
    }
}

// Show controls on mouse move and hide after 2 seconds in fullscreen
let hideControlsTimeout;

function showControlsOnMouseMove() {
    videoContainer.classList.remove('hide-controls');
    
    if (hideControlsTimeout) {
        clearTimeout(hideControlsTimeout);
    }

    hideControlsTimeout = setTimeout(() => {
        videoContainer.classList.add('hide-controls');
    }, 2000); // Hide controls after 2 seconds of inactivity
}

// Hook up event listeners
playPauseBtn.addEventListener('click', togglePlayPause);
skipBackBtn.addEventListener('click', skipBack);
skipForwardBtn.addEventListener('click', skipForward);
volumeSlider.addEventListener('input', handleVolumeChange);
fullScreenBtn.addEventListener('click', toggleFullScreen);
video.addEventListener('timeupdate', updateProgress);

// Progress bar scrubbing
progressContainer.addEventListener('click', scrub);

// Show controls on mouse move in fullscreen
videoContainer.addEventListener('mousemove', showControlsOnMouseMove);

// Ensure mouse move shows controls in normal mode
videoContainer.addEventListener('mouseover', () => {
    videoContainer.classList.add('show-controls');
});

videoContainer.addEventListener('mouseleave', () => {
    videoContainer.classList.remove('show-controls');
});
