let currentQuestion = 1;

const answers = {
  strategist: 0,
  immersive: 0,
  workaholic: 0,
  communicator: 0,
  spontaneous: 0
};

function nextQuestion(type, score) {
  if (answers[type] !== undefined) {
    answers[type] += score;
  }

  document.getElementById(`question-${currentQuestion}`).classList.remove('active');
  currentQuestion++;

  const nextQ = document.getElementById(`question-${currentQuestion}`);
  if (nextQ) {
    nextQ.classList.add('active');
  } else {
    showResult();
  }
}

function showResult() {
  // 가장 높은 점수를 가진 유형을 찾기
  let maxType = "";
  let maxScore = -1;

  for (const type in answers) {
    if (answers[type] > maxScore) {
      maxScore = answers[type];
      maxType = type;
    }
  }

  let resultType = "";
  let resultMessage = "";

  switch (maxType) {
    case "strategist":
      resultType = "🧠 전략가형 CEO";
      resultMessage =
        "📌 특징: 철저하게 계획을 세우고, 시간을 체계적으로 배분하는 스타일이에요.\n" +
        "❗ 단점: 계획에만 집중하다가 유연성이 떨어질 수 있어요.\n" +
        "✅ 해결방안: 예상치 못한 상황에도 대처할 수 있도록 '여유 시간'을 계획에 포함해보세요.";
      break;
    case "immersive":
      resultType = "🌊 몰입형 장인";
      resultMessage =
        "📌 특징: 한 번 시작하면 몰입도가 높아 효율이 좋은 스타일이에요.\n" +
        "❗ 단점: 흐름이 끊기면 다시 집중하기 어려울 수 있어요.\n" +
        "✅ 해결방안: 몰입 시간을 짧게 여러 번 나누어 끊어 읽기·쉬기 패턴을 반복해보세요.";
      break;
    case "workaholic":
      resultType = "🔥 워커홀릭형 임원";
      resultMessage =
        "📌 특징: 체력과 의지력으로 밀어붙이는 노력파예요. 목표 달성에 강한 집착을 보여요.\n" +
        "❗ 단점: 무리하게 공부하면 쉽게 지치거나 번아웃이 올 수 있어요.\n" +
        "✅ 해결방안: 충분한 휴식을 포함한 루틴을 짜고, 성취감을 나눠서 느낄 수 있도록 하세요.";
      break;
    case "communicator":
      resultType = "💬 소통형 매니저";
      resultMessage =
        "📌 특징: 친구들과의 협력과 상호작용을 통해 동기부여를 얻는 스타일이에요.\n" +
        "❗ 단점: 주변 분위기에 따라 흔들릴 수 있고, 집중력이 분산될 수 있어요.\n" +
        "✅ 해결방안: 혼자만의 집중 시간도 따로 정해 균형을 맞춰보세요.";
      break;
    case "spontaneous":
      resultType = "🎨 즉흥형 크리에이티브 디렉터";
      resultMessage =
        "📌 특징: 상황과 기분에 따라 유연하게 공부하는 스타일이에요.\n" +
        "❗ 단점: 목표 설정이 모호하고, 꾸준함이 부족할 수 있어요.\n" +
        "✅ 해결방안: 큰 목표는 유연하게 두더라도, 하루 목표는 구체적으로 정해보세요.";
      break;
    default:
      resultType = "오류";
      resultMessage = "결과를 분석할 수 없습니다.";
  }

  document.getElementById("result-text").innerText = `${resultType}\n\n${resultMessage}`;
  document.getElementById("result").style.display = "block";
}
