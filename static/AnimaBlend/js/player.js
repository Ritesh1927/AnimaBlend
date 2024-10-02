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
const controls = document.getElementById('controls');
const timeDisplay = document.getElementById('timeDisplay');

// Play or pause the video
function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '❚❚'; // Change icon to pause
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

// Show controls on mouse move and hide after 2 seconds if video is playing
let hideControlsTimeout;

function showControlsOnMouseMove() {
    videoContainer.classList.remove('hide-controls');
    videoContainer.classList.add('controls-visible');

    // Only hide controls if the video is playing (works for both fullscreen and normal mode)
    if (!video.paused) {
        if (hideControlsTimeout) {
            clearTimeout(hideControlsTimeout);
        }

        hideControlsTimeout = setTimeout(() => {
            videoContainer.classList.add('hide-controls');
            videoContainer.classList.remove('controls-visible');
        }, 2000); // Hide controls after 2 seconds of inactivity
    }
}

// Hook up event listeners
playPauseBtn.addEventListener('click', togglePlayPause);
skipBackBtn.addEventListener('click', skipBack);
skipForwardBtn.addEventListener('click', skipForward);
volumeSlider.addEventListener('input', handleVolumeChange);
fullScreenBtn.addEventListener('click', toggleFullScreen);
video.addEventListener('timeupdate', updateProgress);

// Detect when video starts or pauses to control hiding of controls
video.addEventListener('play', showControlsOnMouseMove);
video.addEventListener('pause', () => {
    videoContainer.classList.remove('hide-controls'); // Show controls when paused
    videoContainer.classList.add('controls-visible');
    if (hideControlsTimeout) {
        clearTimeout(hideControlsTimeout); // Clear the timeout to prevent hiding
    }
});

// Progress bar scrubbing
progressContainer.addEventListener('click', scrub);

// Show controls on mouse move in both fullscreen and normal modes
videoContainer.addEventListener('mousemove', showControlsOnMouseMove);

// Keep track of time and show current time/total time
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update time display
function updateTimeDisplay() {
    const currentTime = video.currentTime;
    const duration = video.duration;
    timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
}

// Ensure time updates as the video plays
video.addEventListener('timeupdate', updateTimeDisplay);

// Set the duration once the video metadata is loaded
video.addEventListener('loadedmetadata', () => {
    updateTimeDisplay(); // Initialize the time display with correct duration
});

// Hide controls after 2 seconds of inactivity in both normal and fullscreen modes
function handleMouseInactivity() {
    if (!video.paused) {
        if (hideControlsTimeout) {
            clearTimeout(hideControlsTimeout); // Clear existing timeout if any
        }

        hideControlsTimeout = setTimeout(() => {
            videoContainer.classList.add('hide-controls');
            videoContainer.classList.remove('controls-visible');
        }, 2000); // Hide after 2 seconds of inactivity
    }
}

// Listen for mouse movement in both normal and fullscreen mode
videoContainer.addEventListener('mousemove', handleMouseInactivity);
