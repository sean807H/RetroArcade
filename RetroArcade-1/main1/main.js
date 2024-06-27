document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.featured-game');
    const totalSlides = slides.length;
    let slideshowInterval;

    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("search-input");
        const games = document.querySelectorAll(".game");
    
        function filterGames() {
            const searchTerm = searchInput.value.trim().toLowerCase();
    
            games.forEach((game) => {
                const title = game.getAttribute("data-title").toLowerCase();
                const gameElement = game.querySelector("img");
    
                if (title.includes(searchTerm)) game.style.display = "inline-block";
                else game.style.display = "none";
            });
        }    

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) slide.style.display = 'inline-block';
                else slide.style.display = 'none';
            });
        }

        function startSlideshow() {
            slideshowInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % totalSlides;
                showSlide(currentIndex);
            }, 3000);
        }

        function stopSlideshow() {
            clearInterval(slideshowInterval);
        }

        // 초기 featured 요소들은 첫 번째만 보이도록 설정
        showSlide(currentIndex);

        // 화면 크기가 768px 이하일 때 슬라이드쇼 기능을 활성화
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        if (mediaQuery.matches) {
            startSlideshow();

            // 창 크기 변경 시 슬라이드쇼를 다시 시작하거나 중지
            mediaQuery.addListener((mq) => {
                if (mq.matches) startSlideshow();
                else {
                    stopSlideshow();
                    showSlide(0); // 크기가 커지면 첫 번째 슬라이드 보이기
                }
            });
        }
    });
});