document.addEventListener("DOMContentLoaded", () => {
    // Example of setting game title and description
    document.getElementById("game-title").textContent = "철권 - 상세정보";
    document.getElementById("game-name").textContent = "Tekken";
    document.getElementById("game-description").textContent = "기본 캐릭터 32명의 IF 또는 사이드 스토리를 진행하는 모드...";
    document.getElementById("game-image").src = "path/to/game-image.jpg"; // Set the game image source
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
            contentHTML = `  `;
            break;
        case 'data1':
            contentHTML = `
                각각 방향키 / WASD로 불 캐릭터 / 물 캐릭터를 조작할 수 있다.<br>
                게임을 시작하게 되면 불 형태를 띤 파이어보이(남자)와, 물 형태를 띤 워터걸(여자)을 조작할 수 있다.<br>
                파이어보이는 용암에서는 자유롭게 움직일 수 있지만, 물에 닿으면 녹아서 죽는다.<br>
                그리고 워터걸은 파이어보이와 반대로 물에서는 자유롭게 움직일 수 있지만, 용암에 닿으면 타 죽는다.<br>
                그리고 검은색(혹은 초록색) 액체는 닿으면 둘 다 죽는다. 한쪽이 죽은 경우 게임 오버.<br>
                곳곳에 빨간색/파란색의 보석이 있으며, 자신의 색깔에 맞는 보석만을 먹을 수 있다. 흰색(혹은 초록색) 보석은 두 캐릭터가 모두 먹을 수 있다.<br>
                이 보석은 후술할 레벨의 랭크를 결정한다. 또, 스위치 같은 것은 돌려서 어떤 것의 상태를 바꿀 수 있고, 발판은 밟아서 상태를 바꿀 수 있다.<br>
                가끔씩 정사각형의 박스 또는 돌 같은 것이 나오며, 자신의 캐릭터로 밀어서 떨어뜨리거나, 발판 위에 세우거나, 빛을 반사시키거나 할 수 있다<br>
                국내에선 2010부터 플래시게임으로 플레이한 사람이 많아서 어느 정도 인기가 많았다.<br>
                하지만 스마트폰이 등장하고 국내에서 플래시 게임이 사양길을 걷기 시작한 이후로는 가끔 하는 정도를 빼고는 그닥 인지도가 없는 편.<br>
            `;
            break;
        case 'data2':
            contentHTML = `
                클리어 시 전체 맵이 나오는데, 밑의 도형들로 이루어져서 미로 형태로 되어 있다. 시간 내에 모든 보석을 먹고 문으로 가면 A, 둘 중 하나만 충족시키면 B, 모두<br>
                충족시키지 못하면 C다. 이 랭크는 클리어했을 때의 도형 색깔을 나타낸다.<br>
                육각형: 일반적인 레벨로, 보석을 모두 먹어 최대한 빨리 문으로 이동하는 레벨.<br>
                삼각형: 위와 비슷하지만 BGM이 다르며 캐릭터를 동시에 움직여서 각자 빠르게 길을 갈 수 있는 타임어택 형태이다.<br>
                보석: 일반 보석이 없지만 녹색(회색) 보석을 먹어야 하며 안 먹을 경우 랭크가 F로 기록된다.라이트 템플까지는 클리어하면 무조건 A 랭크였지만 아이스<br>
                템플부터는 시간 내에 들어와야 하는 룰이 생기며 B 랭크가 가능해지고, 크리스탈 템플에서는 이 레벨에서도 일반 보석이 생기면서 C 랭크가 가능해졌다.<br>
                마름모: 보석이 없고, 빛이 없어서 캐릭터 주변만 빛이 표시된다. 게다가 어두워서 길을 찾기도 어렵다. BGM도 매우 조용하다.<br>`;
            break;
        case 'data3':
            contentHTML = `
                A :정해진 시간 안에 들어오고 모든 보석을 먹으면 된다.<br>
                B :정해진 시간 안에 들어오지 못하고 모든 보석을 먹으면 된다.<br>
                C :정해진 시간 안에 들어오지 못하고 보석을 1개라도 안 먹으면 된다.<br>
                F :보석 레벨에서만 등장하는 랭크이며 초록색 보석을 안 먹으면 되며 이 경우에는 레벨을 깨지 못한 것으로 인정되어 다시 깨야 해서 다음 스테이지는 열리지 않았다.<br>
                정해진 시간 없이 초록색 보석 1개만 먹으면 A랭크가 뜬다.<br>
                보석을 다 먹고 문에 들어갔을 때 A랭크가 뜬다면 정해진 시간 안에 들어왔다는 뜻이고 B랭크가 뜬다면 정해진 시간 안에 들어오지 못했다는 뜻이 된다.<br>
                A랭크부터 C랭크까지 레벨을 깬 것으로 인정되나 보석 모양 레벨에서 F랭크를 받을 경우 레벨을 깨지 못한 것으로 인정된다.<br>
            `;
            break;
        default:
            contentHTML = '내용 1 - Communication을 클릭했을 때 보이는 내용입니다.';
    }

    // 내용 div 업데이트
    contentDiv.innerHTML = contentHTML;

}

document.addEventListener("DOMContentLoaded", function () {
    const clickableElements = document.querySelectorAll('.click-data1, .click-data2, .click-data3, .click-data4');

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
