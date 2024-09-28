const video_1 = document.getElementById('video');
const autoplayToggle = document.getElementById('autoplay-toggle');
const nextEpisodeUrl = "{% if current_episode.episode_number < episodes.count %}{% url 'play' anime.id current_episode.episode_number|add:1 %}{% endif %}";

video_1.addEventListener('ended', function() {
    if (autoplayToggle && autoplayToggle.checked && nextEpisodeUrl) {
        // Delay the page redirect slightly to allow for any post-video logic to finish
        setTimeout(function() {
            window.location.href = nextEpisodeUrl;
        }, 500); // 500ms delay before loading next episode
    }
});