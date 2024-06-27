document.addEventListener("DOMContentLoaded", () => {
    // Example of setting game title and description
    document.getElementById("game-title").textContent = "Subway surfers - 상세정보";
    document.getElementById("game-name").textContent = "Subway surfers";
});

function toggleRow(className) {
    // 내용div.innerHTML = "";
    // 클래스 이름이 커뮤니케이션 이면 커뮤니케이션에 내용을 내용 div에 넣는다
    // 클래스 이름이 data1 이면 data1에 내용을 내용 div에 넣는다
    // 내용div.innerHTML = data1내용;
    // 클래스 이름이 data2 이면 data2에 내용을 내용 div에 넣는다
    // 클래스 이름이 data3 이면 data3에 내용을 내용 div에 넣는다
    const contentDiv = document.getElementById('details');
    let contentHTML = '';

    switch (className) {
        case 'communication':
            contentHTML = ``;
            break;
        case 'data1':
            contentHTML = `게임 중에 화면을 빠르게 2번 터치하면 보드를 사용할 수 있다. 보드는 충돌해도 게임오버가 되지 않도록 보호해 주며, 30초간 유지된다. 특수능력이 있는 보드들도 있다.
                            <br><br>
                        1. 2단 점프<br>
                        2. 슈퍼 점프: 점프 높이가 2배로 높아진다.<br>
                        3. 초고속: 속도가 2배가량 빨라진다.<br>
                        4. 선로 순간이동: 옆 선로로 빠르게 이동할 수 있다.<br>
                        5. 부드러운 드리프트: 점프 상태에서 하늘다람쥐처럼 약 3초간 활공할 수 있다. 2단 점프나 슈퍼 점프와 함께 사용하면 더 오랫동안 활공할 수 있다.<br>
                        6. 낮은 자세 유지: 눕거나 엎드린 자세가 되므로 낮은 장애물을 지날 때 자세를 숙이지 않아도 된다.`;
            break;
        case 'data2':
            contentHTML = `얻을 수 있는 점수의 배수를 높이기 위한 미션과 데일리 미션이 있다. 전자는 다음과 같다.
                            <br><br>
                            1. X24 Pick up 500 coins with power jumper<br>
                            2. Roll 200 times<br>
                            3. Complete 4 daily challenges<br>
                            파워 점퍼 아이템으로 500코인 먹기, 200번 구르기, 일일미션 4회 완료를 하게 되면 점수의 배수가 1올라가 24배가 된다.
                            데일리 미션은 매일 리필되며 게임 중 특수 아이템이 나올 자리에 특별하게 알파벳이 나온다. 간단한 영어단어이며 이것을 모두 모으면 일일미션 보상이 주어진다. 5일
                            연속 달성 시 슈퍼 미스테리상자를 얻을 수 있다.
                            <br><br>
                            이밖에도 맵이 바뀌었을 때 맵의 상징을 10개 수집하는 미션도 있다.`;
            break;
    }

    // 내용 div 업데이트
    contentDiv.innerHTML = contentHTML;

}

document.addEventListener("DOMContentLoaded", function () {
    const clickableElements = document.querySelectorAll('.click-data1, .click-data2, .click-data3');

    clickableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            const isActive = this.classList.contains('active');

            // 모든 요소에서 active 클래스 제거
            clickableElements.forEach(function (el) {
                el.classList.remove('active');
            });

            // 클릭된 요소에 active 클래스 추가/제거
            if (!isActive) {
                this.classList.add('active');
            }
        });
    });
});
