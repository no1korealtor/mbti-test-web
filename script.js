const questions = [
    { num: 1, text: "주말에 약속이 없다면?", a: "집에 있는다", b: "밖에 나가서 사람들을 만난다" },
    { num: 2, text: "멍 때릴 때 나는?", a: "오늘 저녁 뭐 먹지? 같은 현실적인 생각을 한다", b: "우주에 끝이 있을까? 같은 엉뚱한 상상을 한다" },
    { num: 3, text: "친구가 \"나 우울해서 화분 샀어\" 라고 할 때 나는?", a: "무슨 화분 샀어?", b: "무슨 일 있어? 왜 우울해?" },
    { num: 4, text: "여행을 갈 때 나는?", a: "시간별로 상세한 계획을 짠다", b: "발길 닿는 대로 돌아다닌다" },
    { num: 5, text: "새로운 모임에 나갔을 때 나는?", a: "조용히 남들의 이야기를 듣는 편이다", b: "사람들에게 먼저 다가가서 말을 거는 편이다" },
    { num: 6, text: "요리를 할 때 나는?", a: "레시피에 적힌 정량대로 계량해서 만든다", b: "내 느낌대로 대충 감으로 요리한다" },
    { num: 7, text: "친구가 고민 상담을 할 때 나는?", a: "현실적인 해결책을 제시해 준다", b: "묵묵히 공감하며 들어준다" },
    { num: 8, text: "일을 처리할 때 나는?", a: "기한에 맞춰 미리미리 끝낸다", b: "마감일이 임박해야 능률이 오른다" }
];

let currentQuestionIndex = 0;

function startTest() {
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('questionPage').style.display = 'block';
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById('questionNumber').innerText = `Q${q.num}`;
    document.getElementById('questionText').innerText = q.text;
    document.getElementById('btnA').innerText = q.a;
    document.getElementById('btnB').innerText = q.b;
    
    // 진행바 업데이트
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progressPercent}%`;
}

function selectOption(choice) {
    // 여기에 나중에 MBTI 알파벳을 계산하는 로직이 추가될 수 있습니다.
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        alert("테스트가 완료되었습니다! 결과 페이지로 이동합니다.");
        // 결과 페이지 이동 로직 (추후 구현)
    }
}
