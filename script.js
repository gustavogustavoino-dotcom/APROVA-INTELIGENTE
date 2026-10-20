/*
 * Aprova Inteligente - versão 0.1.0
 * MVP local: questões de demonstração, correção, caderno de erros e métricas.
 * Futuro: enviar pedidos de geração de questões para um backend seguro com IA.
 * Nunca coloque uma chave privada de API diretamente neste arquivo.
 */

"use strict";

const STORAGE_KEY = "aprova-inteligente-v1";

const questions = [
  {
    id: "ped-001",
    subject: "Pedagogia",
    topic: "Avaliação da aprendizagem",
    prompt: "Uma professora aplica uma atividade no início do semestre para identificar o que os estudantes já sabem e planejar as próximas aulas. Que tipo de avaliação está sendo priorizada?",
    options: {
      A: "Avaliação exclusivamente somativa.",
      B: "Avaliação diagnóstica.",
      C: "Avaliação classificatória final.",
      D: "Avaliação externa em larga escala."
    },
    answer: "B",
    explanation: "A avaliação diagnóstica busca identificar conhecimentos prévios, necessidades e dificuldades dos estudantes. Os resultados ajudam o professor a planejar o ensino.",
    whyOthers: "A avaliação somativa costuma verificar resultados ao final de um período; a avaliação externa em larga escala é aplicada em sistemas ou redes, não é definida apenas por essa atividade inicial.",
    sourceNote: "Questão autoral de demonstração. Confira o conteúdo no material e no edital do seu concurso."
  },
  {
    id: "ped-002",
    subject: "Pedagogia",
    topic: "Planejamento escolar",
    prompt: "Qual alternativa descreve melhor a função do Projeto Político-Pedagógico (PPP) de uma escola?",
    options: {
      A: "Substituir o currículo e as normas educacionais.",
      B: "Ser elaborado exclusivamente por um órgão externo à escola.",
      C: "Expressar a identidade, os objetivos e as ações educativas construídas pela comunidade escolar.",
      D: "Registrar somente as notas dos estudantes ao final do ano."
    },
    answer: "C",
    explanation: "O PPP orienta a organização do trabalho educativo da escola, expressando princípios, objetivos, ações e compromissos construídos de forma participativa.",
    whyOthers: "O PPP não substitui a legislação nem se limita ao registro de notas. Sua elaboração deve considerar a participação da comunidade escolar conforme as normas aplicáveis.",
    sourceNote: "Questão autoral de demonstração. Confira o conteúdo no material e no edital do seu concurso."
  },
  {
    id: "leg-001",
    subject: "Legislação",
    topic: "LDB",
    prompt: "De acordo com a Lei de Diretrizes e Bases da Educação Nacional (LDB), qual alternativa apresenta uma incumbência dos estabelecimentos de ensino?",
    options: {
      A: "Elaborar e executar sua proposta pedagógica.",
      B: "Definir sozinho todas as diretrizes nacionais de educação.",
      C: "Substituir as atribuições dos sistemas de ensino.",
      D: "Dispensar o cumprimento das normas comuns da educação."
    },
    answer: "A",
    explanation: "A LDB, no artigo 12, prevê entre as incumbências dos estabelecimentos de ensino elaborar e executar sua proposta pedagógica, respeitadas as normas comuns e as do sistema de ensino.",
    whyOthers: "As diretrizes nacionais e as atribuições dos sistemas de ensino não são definidas unilateralmente por cada escola, e a instituição deve cumprir as normas aplicáveis.",
    sourceNote: "Confira a redação atualizada da LDB e o conteúdo exigido no edital."
  },
  {
    id: "leg-002",
    subject: "Legislação",
    topic: "Direito à educação",
    prompt: "Na Constituição Federal de 1988, a educação é definida como direito de todos e dever:",
    options: {
      A: "Exclusivo dos municípios.",
      B: "Apenas da família.",
      C: "Somente das instituições privadas.",
      D: "Do Estado e da família, com a colaboração da sociedade."
    },
    answer: "D",
    explanation: "O artigo 205 da Constituição Federal estabelece a educação como direito de todos e dever do Estado e da família, promovida e incentivada com a colaboração da sociedade.",
    whyOthers: "A responsabilidade pela educação não é exclusiva de um ente ou apenas da família; o texto constitucional prevê responsabilidades compartilhadas.",
    sourceNote: "Questão autoral de demonstração. Consulte a Constituição Federal atualizada."
  },
  {
    id: "por-001",
    subject: "Português",
    topic: "Interpretação de texto",
    prompt: "Leia: “Embora tenha estudado bastante, Marina decidiu revisar os tópicos em que ainda apresentava dúvidas.” A palavra “Embora” expressa ideia de:",
    options: {
      A: "Causa.",
      B: "Concessão.",
      C: "Conclusão.",
      D: "Finalidade."
    },
    answer: "B",
    explanation: "“Embora” é uma conjunção subordinativa concessiva. Introduz uma ideia que poderia representar um obstáculo, mas não impede o que é declarado na oração principal.",
    whyOthers: "A causa explica o motivo; a conclusão apresenta uma consequência lógica; a finalidade indica objetivo. Nenhuma dessas relações é a principal no período.",
    sourceNote: "Questão autoral de demonstração."
  },
  {
    id: "por-002",
    subject: "Português",
    topic: "Concordância verbal",
    prompt: "Assinale a alternativa em que a concordância verbal está adequada à norma-padrão.",
    options: {
      A: "Fazem dois anos que ela estuda para concursos.",
      B: "Houveram muitas dúvidas durante a aula.",
      C: "Existem bons motivos para revisar o conteúdo.",
      D: "A maioria dos candidatos chegaram cedo, obrigatoriamente."
    },
    answer: "C",
    explanation: "O verbo “existir” é pessoal e concorda com o sujeito “bons motivos”, por isso “Existem bons motivos” está correto.",
    whyOthers: "Na indicação de tempo decorrido, “fazer” é impessoal: “Faz dois anos”. No sentido de existir, “haver” é impessoal: “Houve muitas dúvidas”. Com “a maioria”, a concordância pode variar conforme a construção e o sentido; a alternativa D ainda traz uma afirmação inadequada ao contexto.",
    sourceNote: "Questão autoral de demonstração. Estude a regra e observe as particularidades de cada construção."
  },
  {
    id: "did-001",
    subject: "Didática",
    topic: "Prática docente",
    prompt: "Uma avaliação formativa tem como objetivo central:",
    options: {
      A: "Acompanhar a aprendizagem durante o processo e orientar ajustes no ensino.",
      B: "Apenas classificar os estudantes ao final do ano.",
      C: "Eliminar a necessidade de feedback.",
      D: "Aplicar uma única prova padronizada para todas as situações."
    },
    answer: "A",
    explanation: "A avaliação formativa acompanha o processo de aprendizagem e fornece informações para que professor e estudante identifiquem avanços e ajustem estratégias.",
    whyOthers: "Classificação final é uma finalidade mais associada à avaliação somativa. A avaliação formativa depende de acompanhamento e devolutivas, não de uma prova única.",
    sourceNote: "Questão autoral de demonstração."
  },
  {
    id: "ped-003",
    subject: "Pedagogia",
    topic: "Inclusão escolar",
    prompt: "Na perspectiva da educação inclusiva, uma prática pedagógica adequada é:",
    options: {
      A: "Oferecer sempre a mesma estratégia, sem considerar necessidades individuais.",
      B: "Separar automaticamente todo estudante com deficiência da turma comum.",
      C: "Reduzir a participação do estudante nas atividades coletivas.",
      D: "Planejar acessibilidade e apoios para ampliar a participação e a aprendizagem de todos."
    },
    answer: "D",
    explanation: "A educação inclusiva busca remover barreiras e organizar apoios e estratégias acessíveis para garantir participação, aprendizagem e pertencimento.",
    whyOthers: "Práticas inclusivas não significam ignorar necessidades, reduzir a participação ou separar automaticamente os estudantes. O planejamento deve considerar barreiras e apoios adequados.",
    sourceNote: "Questão autoral de demonstração. Confira a legislação e as diretrizes de inclusão aplicáveis."
  }
];

const state = {
  selectedOption: null,
  answered: false,
  currentIndex: 0,
  mode: "all", // all | review
  reviewQueue: [],
  reviewIndex: 0,
  records: {},
  reviewIds: [],
  attempts: []
};

const $ = (id) => document.getElementById(id);
const letters = ["A", "B", "C", "D"];
let toastTimer = null;

function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (saved && typeof saved === "object") {
      state.records = saved.records && typeof saved.records === "object" ? saved.records : {};
      state.reviewIds = Array.isArray(saved.reviewIds) ? saved.reviewIds.filter(id => questions.some(q => q.id === id)) : [];
      state.attempts = Array.isArray(saved.attempts) ? saved.attempts : [];
    }
  } catch (error) {
    console.warn("Não foi possível carregar o progresso salvo.", error);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      records: state.records,
      reviewIds: state.reviewIds,
      attempts: state.attempts
    }));
    $("savedStatus").textContent = "Progresso salvo neste dispositivo";
  } catch (error) {
    $("savedStatus").textContent = "Não foi possível salvar";
    console.warn("Não foi possível salvar o progresso.", error);
  }
}

function activeQuestions() {
  if (state.mode === "review") {
    return state.reviewQueue.map(id => questions.find(q => q.id === id)).filter(Boolean);
  }
  return questions;
}

function currentQuestion() {
  const list = activeQuestions();
  if (!list.length) return null;
  const index = state.mode === "review" ? state.reviewIndex : state.currentIndex;
  return list[Math.min(index, list.length - 1)];
}

function currentPosition() {
  return state.mode === "review" ? state.reviewIndex : state.currentIndex;
}

function setCurrentPosition(value) {
  if (state.mode === "review") state.reviewIndex = value;
  else state.currentIndex = value;
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function renderQuestion() {
  const list = activeQuestions();
  const q = currentQuestion();
  if (!q) {
    $("subjectPill").textContent = state.mode === "review" ? "REVISÃO" : "ESTUDOS";
    $("questionCounter").textContent = "Nenhuma questão";
    $("questionText").textContent = state.mode === "review"
      ? "Seu caderno de erros está vazio."
      : "Não há questões disponíveis.";
    $("optionsList").innerHTML = "";
    $("feedbackPanel").hidden = true;
    $("checkButton").hidden = true;
    $("nextButton").hidden = true;
    $("skipButton").hidden = true;
    $("quizProgress").style.width = "0%";
    return;
  }

  state.selectedOption = null;
  state.answered = false;
  $("subjectPill").textContent = q.subject.toUpperCase();
  $("questionCounter").textContent = `Questão ${currentPosition() + 1} de ${list.length}`;
  $("questionText").textContent = q.prompt;
  $("quizProgress").style.width = `${((currentPosition()) / Math.max(list.length, 1)) * 100}%`;
  $("feedbackPanel").hidden = true;
  $("feedbackPanel").className = "feedback-panel";
  $("checkButton").hidden = false;
  $("checkButton").disabled = true;
  $("nextButton").hidden = true;
  $("skipButton").hidden = false;

  $("optionsList").innerHTML = letters.map(letter => `
    <button type="button" class="option-button" data-option="${letter}" aria-pressed="false">
      <span class="option-letter">${letter}</span>
      <span>${escapeHTML(q.options[letter])}</span>
    </button>
  `).join("");

  $("optionsList").querySelectorAll(".option-button").forEach(button => {
    button.addEventListener("click", () => selectOption(button.dataset.option));
  });

  // Questions can be attempted again; every new answer is recorded as a new attempt.
}

function selectOption(letter) {
  if (state.answered) return;
  state.selectedOption = letter;
  $("optionsList").querySelectorAll(".option-button").forEach(button => {
    const selected = button.dataset.option === letter;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  $("checkButton").disabled = false;
}

function showPreviousAnswer(q, record) {
  state.selectedOption = record.lastAnswer;
  state.answered = true;
  $("optionsList").querySelectorAll(".option-button").forEach(button => {
    button.disabled = true;
    if (button.dataset.option === q.answer) button.classList.add("correct");
    if (button.dataset.option === record.lastAnswer && record.lastAnswer !== q.answer) button.classList.add("incorrect");
  });
  showFeedback(q, record.lastAnswer === q.answer, record.lastAnswer, true);
  $("checkButton").hidden = true;
  $("nextButton").hidden = false;
  $("skipButton").hidden = true;
  $("quizProgress").style.width = `${((currentPosition() + 1) / Math.max(activeQuestions().length, 1)) * 100}%`;
}

function checkAnswer() {
  const q = currentQuestion();
  if (!q || !state.selectedOption || state.answered) return;

  const chosen = state.selectedOption;
  const isCorrect = chosen === q.answer;
  state.answered = true;

  $("optionsList").querySelectorAll(".option-button").forEach(button => {
    button.disabled = true;
    if (button.dataset.option === q.answer) button.classList.add("correct");
    if (button.dataset.option === chosen && !isCorrect) button.classList.add("incorrect");
  });

  const oldRecord = state.records[q.id] || { attempts: 0, correct: 0, wrong: 0 };
  oldRecord.attempts += 1;
  oldRecord.lastAnswer = chosen;
  oldRecord.lastCorrect = isCorrect;
  oldRecord.lastSeen = new Date().toISOString();
  if (isCorrect) {
    oldRecord.correct += 1;
    // Remove from the review list only after answering correctly in review mode.
    if (state.mode === "review") {
      state.reviewIds = state.reviewIds.filter(id => id !== q.id);
      showToast("Boa! Você acertou a questão na revisão.");
    }
  } else {
    oldRecord.wrong += 1;
    if (!state.reviewIds.includes(q.id)) state.reviewIds.push(q.id);
  }
  state.records[q.id] = oldRecord;
  state.attempts.push({ questionId: q.id, correct: isCorrect, at: new Date().toISOString() });
  saveState();
  showFeedback(q, isCorrect, chosen, false);
  $("checkButton").hidden = true;
  $("nextButton").hidden = false;
  $("skipButton").hidden = true;
  $("quizProgress").style.width = `${((currentPosition() + 1) / Math.max(activeQuestions().length, 1)) * 100}%`;
  updateDashboard();
}

function showFeedback(q, isCorrect, chosen, isPrevious) {
  const panel = $("feedbackPanel");
  panel.hidden = false;
  panel.className = `feedback-panel ${isCorrect ? "is-correct" : "is-wrong"}`;
  $("feedbackTitle").textContent = isCorrect ? "Resposta correta! Muito bem." : `Ainda não! A alternativa correta é ${q.answer}.`;
  $("feedbackExplanation").textContent = q.explanation;
  $("feedbackExtra").textContent = `${q.whyOthers} ${q.sourceNote}${isPrevious ? " Esta é a última resposta registrada para esta questão." : ""}`;
}

function nextQuestion() {
  const list = activeQuestions();
  if (!list.length) return;
  const nextIndex = currentPosition() + 1;
  if (nextIndex >= list.length) {
    if (state.mode === "review") {
      switchView("review");
      showToast("Você chegou ao fim desta rodada de revisão.");
      return;
    }
    state.currentIndex = 0;
    showToast("Fim da rodada! Você pode praticar novamente.");
  } else {
    setCurrentPosition(nextIndex);
  }
  renderQuestion();
}

function skipQuestion() {
  const list = activeQuestions();
  if (!list.length) return;
  const nextIndex = currentPosition() + 1;
  if (nextIndex >= list.length) {
    if (state.mode === "review") {
      renderReviewView();
      return;
    }
    state.currentIndex = 0;
    showToast("Fim da lista. A rodada recomeçou.");
  } else {
    setCurrentPosition(nextIndex);
  }
  renderQuestion();
}

function getStats() {
  const total = state.attempts.length;
  const correct = state.attempts.filter(item => item.correct).length;
  const wrong = total - correct;
  return { total, correct, wrong, accuracy: total ? Math.round((correct / total) * 100) : null };
}

function updateDashboard() {
  const stats = getStats();
  $("totalAnswered").textContent = stats.total;
  $("accuracyRate").textContent = stats.accuracy === null ? "—" : `${stats.accuracy}%`;
  $("reviewCount").textContent = state.reviewIds.length;
  $("reviewNavCount").textContent = state.reviewIds.length;
  $("reviewHeadingCount").textContent = `${state.reviewIds.length} ${state.reviewIds.length === 1 ? "questão" : "questões"}`;
  $("progressTotal").textContent = stats.total;
  $("progressCorrect").textContent = stats.correct;
  $("progressWrong").textContent = stats.wrong;
  $("questionTotalLabel").textContent = `${questions.length} questões disponíveis`;

  if (stats.total === 0) {
    $("focusText").textContent = "Responda às questões para descobrir quais assuntos merecem mais atenção.";
    $("focusSubtext").textContent = "Seu plano se ajustará ao seu desempenho.";
    $("focusMeter").style.width = "0%";
  } else {
    const weakSubject = getWeakestSubject();
    $("focusText").textContent = weakSubject
      ? `Continue praticando ${weakSubject.subject}. Seu aproveitamento atual nessa matéria é ${weakSubject.accuracy}%.`
      : "Continue respondendo às questões para descobrir seu próximo foco.";
    $("focusSubtext").textContent = `${stats.total} resposta(s) registrada(s) até agora.`;
    $("focusMeter").style.width = `${stats.accuracy}%`;
  }
  renderSubjectPerformance();
}

function getWeakestSubject() {
  const subjects = {};
  questions.forEach(q => {
    const rec = state.records[q.id];
    if (!rec || !rec.attempts) return;
    if (!subjects[q.subject]) subjects[q.subject] = { total: 0, correct: 0 };
    subjects[q.subject].total += rec.attempts;
    subjects[q.subject].correct += rec.correct;
  });
  const entries = Object.entries(subjects).map(([subject, values]) => ({
    subject, total: values.total, accuracy: Math.round(values.correct / values.total * 100)
  }));
  if (!entries.length) return null;
  entries.sort((a, b) => a.accuracy - b.accuracy || b.total - a.total);
  return entries[0];
}

function renderSubjectPerformance() {
  const container = $("subjectPerformance");
  const subjects = {};
  questions.forEach(q => {
    const rec = state.records[q.id];
    if (!subjects[q.subject]) subjects[q.subject] = { total: 0, correct: 0 };
    if (rec) {
      subjects[q.subject].total += rec.attempts;
      subjects[q.subject].correct += rec.correct;
    }
  });
  container.innerHTML = Object.entries(subjects).map(([subject, values]) => {
    const accuracy = values.total ? Math.round(values.correct / values.total * 100) : 0;
    return `
      <div class="subject-row">
        <div class="subject-row-head"><span>${escapeHTML(subject)}</span><span>${values.total ? `${accuracy}% · ${values.total} tentativa(s)` : "Ainda sem respostas"}</span></div>
        <div class="subject-row-track"><span style="width:${accuracy}%"></span></div>
      </div>
    `;
  }).join("");
}

function renderReviewView() {
  const container = $("reviewContent");
  $("reviewHeadingCount").textContent = `${state.reviewIds.length} ${state.reviewIds.length === 1 ? "questão" : "questões"}`;
  if (!state.reviewIds.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">✓</div>
        <h3>Seu caderno de erros está vazio</h3>
        <p>Quando você errar uma questão, ela aparecerá aqui. Depois, você poderá revisar a explicação e tentar novamente.</p>
        <button class="button button-primary" type="button" data-action="go-study">Voltar aos estudos →</button>
      </div>`;
    container.querySelector('[data-action="go-study"]').addEventListener("click", () => switchView("study"));
    return;
  }

  container.innerHTML = `<div class="review-list">${state.reviewIds.map(id => {
    const q = questions.find(item => item.id === id);
    const record = state.records[id];
    if (!q) return "";
    return `
      <article class="review-item">
        <div class="review-item-top">
          <span class="pill">${escapeHTML(q.subject.toUpperCase())}</span>
          <span class="review-tag">PARA REVISAR</span>
        </div>
        <h3>${escapeHTML(q.prompt)}</h3>
        <p><strong>Última resposta:</strong> ${record && record.lastAnswer ? `${record.lastAnswer}) ${escapeHTML(q.options[record.lastAnswer])}` : "Ainda não respondida"}<br>
        <strong>Resposta correta:</strong> ${q.answer}) ${escapeHTML(q.options[q.answer])}<br>
        <strong>Explicação:</strong> ${escapeHTML(q.explanation)}</p>
        <div class="review-item-actions">
          <button class="button button-primary" type="button" data-review="${q.id}">Tentar novamente →</button>
          <button class="button button-quiet" type="button" data-remove="${q.id}">Remover do caderno</button>
        </div>
      </article>`;
  }).join("")}</div>`;

  container.querySelectorAll("[data-review]").forEach(button => {
    button.addEventListener("click", () => startReviewQuestion(button.dataset.review));
  });
  container.querySelectorAll("[data-remove]").forEach(button => {
    button.addEventListener("click", () => {
      state.reviewIds = state.reviewIds.filter(id => id !== button.dataset.remove);
      saveState();
      updateDashboard();
      renderReviewView();
      showToast("Questão removida do caderno.");
    });
  });
}

function startReviewQuestion(id) {
  state.mode = "review";
  state.reviewQueue = [id];
  state.reviewIndex = 0;
  switchView("study");
  renderQuestion();
}

function switchView(view) {
  document.querySelectorAll(".view").forEach(section => section.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  if (view === "study") {
    $("studyView").classList.add("active");
    $("pageTitle").textContent = "Painel de estudos";
    if (state.mode === "review") {
      state.mode = "all";
      state.reviewQueue = [];
      state.reviewIndex = 0;
    }
    renderQuestion();
  } else if (view === "review") {
    $("reviewView").classList.add("active");
    $("pageTitle").textContent = "Caderno de erros";
    renderReviewView();
  } else {
    $("progressView").classList.add("active");
    $("pageTitle").textContent = "Meu desempenho";
    renderSubjectPerformance();
  }
}

function resetProgress() {
  state.records = {};
  state.reviewIds = [];
  state.attempts = [];
  state.mode = "all";
  state.currentIndex = 0;
  state.reviewQueue = [];
  state.reviewIndex = 0;
  saveState();
  updateDashboard();
  renderQuestion();
  renderReviewView();
  showToast("Progresso apagado neste navegador.");
}

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach(button => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });
  $("checkButton").addEventListener("click", checkAnswer);
  $("nextButton").addEventListener("click", nextQuestion);
  $("skipButton").addEventListener("click", skipQuestion);
  $("resetButton").addEventListener("click", () => $("resetDialog").showModal());
  $("confirmResetButton").addEventListener("click", event => {
    // The dialog closes via method="dialog"; reset only when confirmation was chosen.
    event.preventDefault();
    $("resetDialog").close();
    resetProgress();
  });
  $("resetDialog").querySelector('[value="cancel"]').addEventListener("click", () => $("resetDialog").close());
}

function init() {
  loadSavedState();
  bindEvents();
  updateDashboard();
  renderQuestion();
  renderReviewView();
}

document.addEventListener("DOMContentLoaded", init);
