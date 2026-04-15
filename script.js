const questions = [
    { num: 1, type: "E", text: "주말에 약속이 없다면?", a: { text: "집에 있는다", value: 0 }, b: { text: "밖에 나가서 사람들을 만난다", value: 1 } },
    { num: 2, type: "S", text: "멍 때릴 때 나는?", a: { text: "오늘 저녁 뭐 먹지? 같은 현실적인 생각을 한다", value: 1 }, b: { text: "우주에 끝이 있을까? 같은 엉뚱한 상상을 한다", value: 0 } },
    { num: 3, type: "T", text: "친구가 \"나 우울해서 화분 샀어\" 라고 할 때 나는?", a: { text: "무슨 화분 샀어?", value: 1 }, b: { text: "무슨 일 있어? 왜 우울해?", value: 0 } },
    { num: 4, type: "J", text: "여행을 갈 때 나는?", a: { text: "시간별로 상세한 계획을 짠다", value: 1 }, b: { text: "발길 닿는 대로 돌아다닌다", value: 0 } },
    { num: 5, type: "E", text: "새로운 모임에 나갔을 때 나는?", a: { text: "조용히 남들의 이야기를 듣는 편이다", value: 0 }, b: { text: "사람들에게 먼저 다가가서 말을 거는 편이다", value: 1 } },
    { num: 6, type: "S", text: "요리를 할 때 나는?", a: { text: "레시피에 적힌 정량대로 계량해서 만든다", value: 1 }, b: { text: "내 느낌대로 대충 감으로 요리한다", value: 0 } },
    { num: 7, type: "T", text: "친구가 고민 상담을 할 때 나는?", a: { text: "현실적인 해결책을 제시해 준다", value: 1 }, b: { text: "묵묵히 공감하며 들어준다", value: 0 } },
    { num: 8, type: "J", text: "일을 처리할 때 나는?", a: { text: "기한에 맞춰 미리미리 끝낸다", value: 1 }, b: { text: "마감일이 임박해야 능률이 오른다", value: 0 } }
];

let currentQuestionIndex = 0;
let scores = { E: 0, S: 0, T: 0, J: 0 };

function startTest() {
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('questionPage').style.display = 'block';
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById('questionNumber').innerText = `Q${q.num}`;
    document.getElementById('questionText').innerText = q.text;
    document.getElementById('btnA').innerText = q.a.text;
    document.getElementById('btnB').innerText = q.b.text;
    
    // 진행바 업데이트
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progressPercent}%`;
}

function selectOption(choice) {
    const q = questions[currentQuestionIndex];
    let selectedValue = choice === 'A' ? q.a.value : q.b.value;
    
    if (selectedValue === 1) {
        scores[q.type]++;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let mbti = "";
    // 점수가 1점 이상이면 해당 지표 선택 (2문제 중 1문제 이상)
    mbti += scores.E >= 1 ? "E" : "I";
    mbti += scores.S >= 1 ? "S" : "N";
    mbti += scores.T >= 1 ? "T" : "F";
    mbti += scores.J >= 1 ? "J" : "P";

    document.getElementById('questionPage').style.display = 'none';
    document.getElementById('resultPage').style.display = 'block';
    document.getElementById('mbtiResult').innerText = mbti;
}
