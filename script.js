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

const mbtiData = {
    ISTJ: { nick: "청렴결백한 논리주의자", desc: "한 번 시작한 일은 끝까지 해내는 책임감을 가졌어요.", sit: "[상황] 내일 봬요~", res: "[대답] (내일 스케줄표 확인 중)" },
    ISFJ: { nick: "용감한 수호자", desc: "조용하지만 따뜻한 마음으로 주변을 세심하게 챙겨줘요.", sit: "[상황] 저기 혹시...", res: "[대답] (벌써 티슈 꺼냄)" },
    INFJ: { nick: "선의의 옹호자", desc: "깊은 통찰력으로 사람들에게 영감을 주고 부드럽게 이끌어요.", sit: "[상황] 무슨 생각해?", res: "[대답] (우주의 기원에 대해 생각하다가) 아무것도 아니야." },
    INTJ: { nick: "용의주도한 전략가", desc: "독창적인 아이디어로 목표를 달성할 완벽한 계획을 세워요.", sit: "[상황] 우리 그냥 가볼까?", res: "[대답] (플랜 D까지 짠 뒤) 그래." },
    ISTP: { nick: "만능 재주꾼", desc: "논리적이고 뛰어난 상황 적응력으로 문제를 빠르게 해결해요.", sit: "[상황] (기계 고장남)", res: "[대답] 비켜봐." },
    ISFP: { nick: "호기심 많은 예술가", desc: "자유롭고 따뜻한 감성으로 현재의 아름다움을 즐길 줄 알아요.", sit: "[상황] 주말에 뭐해?", res: "[대답] 누워있을 예정." },
    INFP: { nick: "열정적인 중재자", desc: "이상적인 세상을 꿈꾸며 따뜻하고 낭만적인 마음을 가졌어요.", sit: "[상황] (슬픈 노래 듣는 중)", res: "[대답] 아... 난 왜 태어났을까..." },
    INTP: { nick: "논리적인 사색가", desc: "끊임없이 지적 호기심을 발휘하여 새로운 것을 탐구해요.", sit: "[상황] 이건 왜 이런걸까?", res: "[대답] (3시간째 구글링 중)" },
    ESTP: { nick: "모험을 즐기는 사업가", desc: "에너지가 넘치고 직관적인 판단력으로 현실의 문제를 즐겁게 풀어나가요.", sit: "[상황] 이거 해볼 사람?", res: "[대답] 나! 나!!" },
    ESFP: { nick: "자유로운 영혼의 연예인", desc: "에너지가 넘치며 주변 사람들을 항상 웃게 만드는 분위기 메이커예요.", sit: "[상황] (길거리에서 신나는 노래 나옴)", res: "[대답] (이미 춤추고 있음)" },
    ENFP: { nick: "재기발랄한 활동가", desc: "상상력이 풍부하고 열정적이며 사람들과 노는 것을 가장 좋아해요.", sit: "[상황] 나 내일 제주도 가!", res: "[대답] 헐 나도 갈래!!" },
    ENTP: { nick: "뜨거운 논쟁을 즐기며 변론가", desc: "발상이 기발하고 재치있는 말솜씨로 논쟁을 즐기는 아이디어 뱅크예요.", sit: "[상황] 이건 이렇게 해야지.", res: "[대답] 왜요?" },
    ESTJ: { nick: "엄격한 관리자", desc: "철저한 계획과 강력한 추진력으로 주변을 이끌어가는 타고난 리더예요.", sit: "[상황] 우리 내일 뭐할까?", res: "[대답] 엑셀 켰어. 말해." },
    ESFJ: { nick: "사교적인 외교관", desc: "주변 사람들을 챙기고 화합을 중요시하는 따뜻한 평화주의자예요.", sit: "[상황] (친구가 우울함)", res: "[대답] 무슨 일 있어? 밥은 먹었어? 기프티콘 보냈어." },
    ENFJ: { nick: "정의로운 사회운동가", desc: "따뜻한 공감 능력으로 사람들을 이끄는 카리스마 넘치는 리더예요.", sit: "[상황] 나 이거 못하겠어...", res: "[대답] 넌 할 수 있어! 내가 도와줄게!" },
    ENTJ: { nick: "대담한 통솔자", desc: "단호한 결단력과 강력한 카리스마로 목표를 향해 거침없이 전진해요.", sit: "[상황] 이거 안 될 것 같은데...", res: "[대답] 되게 해." }
};

function showResult() {
    let mbti = "";
    // 점수가 1점 이상이면 해당 지표 선택 (2문제 중 1문제 이상)
    mbti += scores.E >= 1 ? "E" : "I";
    mbti += scores.S >= 1 ? "S" : "N";
    mbti += scores.T >= 1 ? "T" : "F";
    mbti += scores.J >= 1 ? "J" : "P";

    const resultData = mbtiData[mbti];

    document.getElementById('questionPage').style.display = 'none';
    document.getElementById('resultPage').style.display = 'block';
    document.getElementById('mbtiResult').innerText = mbti;
    document.getElementById('mbtiNickname').innerText = `"${resultData.nick}"`;
    document.getElementById('mbtiDesc').innerText = resultData.desc;
    document.getElementById('humorSituation').innerText = resultData.sit;
    document.getElementById('humorResponse').innerText = resultData.res;
}

function retryTest() {
    currentQuestionIndex = 0;
    scores = { E: 0, S: 0, T: 0, J: 0 };
    document.getElementById('resultPage').style.display = 'none';
    document.getElementById('startPage').style.display = 'block';
}
