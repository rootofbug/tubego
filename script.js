document.addEventListener('DOMContentLoaded', function () {
    const ageModal = document.getElementById('age-confirmation');
    const typeModal = document.getElementById('video-type-selection');
    const mainContent = document.getElementById('main-content');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');
    const searchInput = document.getElementById('search-input');
    const videoGrid = document.getElementById('video-grid');
    
    // Age confirmation
    confirmYes.addEventListener('click', function () {
        ageModal.style.display = 'none'; // Hide the age modal
        typeModal.style.display = 'block'; // Show video type selection modal
    });

    confirmNo.addEventListener('click', function () {
        alert('You must be 18 or older to view this content.');
        window.location.href = 'age-restriction.html'; // Redirect to a safe page
    });

    // Load videos based on selected type
    function loadVideos(type) {
        videoGrid.innerHTML = ''; // Clear existing videos

        let videoData = [];

        // Mock AJAX call to load videos based on type
        setTimeout(() => {
            if (type === 'normal') {
                videoData = [
                    { title: 'Sex 1', src: 'normal/sex-1.mp4' },
                    { title: 'Sex 2', src: 'normal/sex-2.mp4' }
                ];
            } else if (type === 'gay') {
                videoData = [
                    { title: 'Gay Video 1', src: 'gay/video1.mp4' },
                    { title: 'Gay Video 2', src: 'gay/video2.mp4' }
                ];
            } else if (type === 'oral') {
                videoData = [
                    { title: 'Oral Video 1', src: 'oral/video1.mp4' },
                    { title: 'Oral Video 2', src: 'oral/video2.mp4' }
                ];
            }

            if (videoData.length === 0) {
                videoGrid.innerHTML = '<p>No videos found in this category.</p>';
                return;
            }

            videoData.forEach(video => {
                const videoCard = document.createElement('div');
                videoCard.classList.add('video-card');
                
                videoCard.innerHTML = `
                    <h3>${video.title}</h3>
                    <video controls>
                        <source src="${video.src}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
                
                const videoElement = videoCard.querySelector('video');

                // Pause all other videos when one is played
                videoElement.addEventListener('play', function() {
                    pauseAllVideos(videoElement);
                });

                videoGrid.appendChild(videoCard);
            });
        }, 500); // Reduced delay for quicker feedback
    }

    // Function to pause all videos except the one that is currently playing
    function pauseAllVideos(currentVideo) {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            if (video !== currentVideo) {
                video.pause(); // Pause other videos
            }
        });
    }

    // Search functionality (real-time)
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const videoCards = document.querySelectorAll('.video-card');
        
        videoCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = 'block'; // Show card if title matches
            } else {
                card.style.display = 'none'; // Hide card if title doesn't match
            }
        });
    });

    // Video type selection
    document.getElementById('normal-videos').addEventListener('click', function() {
        typeModal.style.display = 'none'; // Hide type modal
        loadVideos('normal'); // Load normal videos
        mainContent.classList.remove('hidden'); // Show main content
    });

    document.getElementById('gay-videos').addEventListener('click', function() {
        typeModal.style.display = 'none'; // Hide type modal
        loadVideos('gay'); // Load gay videos
        mainContent.classList.remove('hidden'); // Show main content
    });

    document.getElementById('oral-videos').addEventListener('click', function() {
        typeModal.style.display = 'none'; // Hide type modal
        loadVideos('oral'); // Load oral videos
        mainContent.classList.remove('hidden'); // Show main content
    });
});
