const MAX_TRIALS = 10;
const SPEED_NORM_MIN_SECONDS = 1.5;
const SPEED_NORM_MAX_SECONDS = 2.5;
const DIRECT_IMAGES = [
  { side: "left", name: "pexels-75705723-8569753.jpg", url: "Left/pexels-75705723-8569753.jpg" },
  { side: "left", name: "pexels-andy-urdaneta-294961611-13890757.jpg", url: "Left/pexels-andy-urdaneta-294961611-13890757.jpg" },
  { side: "left", name: "pexels-artem-korsakov-132129914-10890527.jpg", url: "Left/pexels-artem-korsakov-132129914-10890527.jpg" },
  { side: "left", name: "pexels-artempodrez-6800934.jpg", url: "Left/pexels-artempodrez-6800934.jpg" },
  { side: "left", name: "pexels-badun-18782642.jpg", url: "Left/pexels-badun-18782642.jpg" },
  { side: "left", name: "pexels-cottonbro-10140812.jpg", url: "Left/pexels-cottonbro-10140812.jpg" },
  { side: "left", name: "pexels-erick-martinez-velasco-247863608-15103177.jpg", url: "Left/pexels-erick-martinez-velasco-247863608-15103177.jpg" },
  { side: "left", name: "pexels-gezerasph-23910018.jpg", url: "Left/pexels-gezerasph-23910018.jpg" },
  { side: "right", name: "pexels-aloevera-20805371.jpg", url: "Right/pexels-aloevera-20805371.jpg" },
  { side: "right", name: "pexels-aloevera-20805379.jpg", url: "Right/pexels-aloevera-20805379.jpg" },
  { side: "right", name: "pexels-anna-nekrashevich-8058965.jpg", url: "Right/pexels-anna-nekrashevich-8058965.jpg" },
  { side: "right", name: "pexels-cottonbro-10204118.jpg", url: "Right/pexels-cottonbro-10204118.jpg" },
  { side: "right", name: "pexels-cottonbro-8860911.jpg", url: "Right/pexels-cottonbro-8860911.jpg" },
  { side: "right", name: "pexels-darina-belonogova-7886394.jpg", url: "Right/pexels-darina-belonogova-7886394.jpg" },
  { side: "right", name: "pexels-jeric-turga-1470183193-28535255.jpg", url: "Right/pexels-jeric-turga-1470183193-28535255.jpg" }
];

const TEXT = {
  en: {
    pageTitle: "STRIVE Independence | Left-Right",
    moduleTag: "Left-Right Discrimination",
    left: "Left",
    or: "or",
    right: "Right",
    moduleDescription: "A left-right discrimination practice activity.",
    startSession: "Start Session",
    setupTag: "Session Setup",
    setupTitle: "Configure Task",
    setupDescription: "Practice left-right discrimination with a starter image set.",
    basicBadge: "",
    instructionsTitle: "Instructions",
    instructions: [
      "Look at each hand picture.",
      "Decide whether it shows a left hand or a right hand.",
      "Press the matching button as quickly and accurately as you can.",
      "Create an account for more pictures and STRIVE AI note generation."
    ],
    imagesPerSet: "Need more clinical flexibility?",
    basicPicturesLabel: "pictures",
    basicLimitDescription: "Create an account to unlock more pictures and STRIVE AI note generation.",
    upgrade: "Upgrade",
    basicUpgradeTitle: "Ready to document faster?",
    basicUpgradeDescription: "Create an account for more pictures and auto-generated notes with STRIVE AI.",
    language: "Language",
    sets: "Sets",
    setSingular: "set",
    setPlural: "sets",
    aiDescription: "Use the session score, timing, and errors to draft a quick note after the activity.",
    identifyHandSide: "Identify hand side",
    answerChoices: "Answer choices",
    picture: "Picture",
    of: "of",
    time: "Time",
    correct: "Correct",
    contact: "Upgrade",
    contactAria: "Upgrade to the full STRIVE Independence version",
    endSession: "End Session",
    endSessionAria: "End current session",
    results: "Results",
    sessionComplete: "Session Complete",
    score: "Score",
    accuracy: "Accuracy",
    rate: "Rate",
    perMinute: "/ min",
    noMissedItems: "No missed items.",
    missedItems: "Missed items",
    photo: "photo",
    photos: "photos",
    missedAlt: "Missed hand item from set {set}, picture {picture}",
    soapNote: "SOAP Note",
    soapLocked: "SOAP note copying is available for paid accounts.",
    runAgain: "Run Again",
    newSetup: "New Setup"
  },
  es: {
    pageTitle: "STRIVE Independence | Izquierda-Derecha",
    moduleTag: "Versión Gratuita",
    left: "Izquierda",
    or: "o",
    right: "Derecha",
    moduleDescription: "Una actividad gratuita para practicar izquierda-derecha.",
    startSession: "Iniciar Sesión",
    setupTag: "Configuración",
    setupTitle: "Configurar Actividad",
    setupDescription: "Practique la discriminación izquierda-derecha con un conjunto inicial de imágenes.",
    basicBadge: "",
    instructionsTitle: "Instrucciones",
    instructions: [
      "Mire cada imagen de la mano.",
      "Decida si muestra una mano izquierda o una mano derecha.",
      "Presione el botón correspondiente lo más rápido y preciso posible.",
      "Cree una cuenta para usar más imágenes y generación de notas con STRIVE AI."
    ],
    imagesPerSet: "¿Necesita más flexibilidad clínica?",
    basicPicturesLabel: "imágenes",
    basicLimitDescription: "Cree una cuenta para desbloquear más imágenes y generación de notas con STRIVE AI.",
    upgrade: "Mejorar",
    basicUpgradeTitle: "¿Listo para documentar más rápido?",
    basicUpgradeDescription: "Cree una cuenta para más imágenes y notas automáticas con STRIVE AI.",
    language: "Idioma",
    sets: "Series",
    setSingular: "serie",
    setPlural: "series",
    aiDescription: "Usa la puntuación, el tiempo y los errores de la sesión para redactar una nota clínica breve después de la actividad.",
    identifyHandSide: "Identificar lado de la mano",
    answerChoices: "Opciones de respuesta",
    picture: "Imagen",
    of: "de",
    time: "Tiempo",
    correct: "Correctas",
    contact: "Mejorar",
    contactAria: "Actualizar a la versión completa de STRIVE Independence",
    endSession: "Terminar Sesión",
    endSessionAria: "Terminar sesión actual",
    results: "Resultados",
    sessionComplete: "Sesión Completa",
    score: "Puntuación",
    accuracy: "Precisión",
    rate: "Ritmo",
    perMinute: "/ min",
    noMissedItems: "No hubo errores.",
    missedItems: "Imágenes incorrectas",
    photo: "foto",
    photos: "fotos",
    missedAlt: "Imagen incorrecta de mano de la serie {set}, imagen {picture}",
    soapNote: "Nota Clínica",
    soapLocked: "La copia de notas clínicas está disponible para cuentas pagas.",
    runAgain: "Repetir",
    newSetup: "Nueva Configuración"
  }
};

const state = {
  images: DIRECT_IMAGES,
  trials: [],
  currentIndex: 0,
  correct: 0,
  answers: [],
  imagesPerSet: 10,
  setCount: 1,
  striveAiEnabled: true,
  startedAt: 0,
  timerId: null,
  elapsedSeconds: 0,
  demoMode: false,
  language: "en"
};

const elements = {
  homeLayout: document.querySelector("#homeLayout"),
  navAction: document.querySelector("#navAction"),
  setupPanel: document.querySelector("#setupPanel"),
  taskPanel: document.querySelector("#taskPanel"),
  resultsPanel: document.querySelector("#resultsPanel"),
  appTitle: document.querySelector("#appTitle"),
  moduleTag: document.querySelector("#moduleTag"),
  basicBadge: document.querySelector("#basicBadge"),
  moduleDescription: document.querySelector("#moduleDescription"),
  setupTag: document.querySelector("#setupTag"),
  setupTitle: document.querySelector("#setupTitle"),
  setupDescription: document.querySelector("#setupDescription"),
  instructionsTitle: document.querySelector("#instructionsTitle"),
  instructionsList: document.querySelector("#instructionsList"),
  imagesPerSetLabel: document.querySelector("#imagesPerSetLabel"),
  basicPicturesLabel: document.querySelector("#basicPicturesLabel"),
  basicLimitDescription: document.querySelector("#basicLimitDescription"),
  upgradeLink: document.querySelector("#upgradeLink"),
  languageSelect: document.querySelector("#languageSelect"),
  languageLabel: document.querySelector("#languageLabel"),
  trialCount: document.querySelector("#trialCount"),
  trialCountValue: document.querySelector("#trialCountValue"),
  setsLabel: document.querySelector("#setsLabel"),
  setCount: document.querySelector("#setCount"),
  striveAiToggle: document.querySelector("#striveAiToggle"),
  aiDescription: document.querySelector("#aiDescription"),
  startButton: document.querySelector("#startButton"),
  timerLabel: document.querySelector("#timerLabel"),
  timer: document.querySelector("#timer"),
  progressText: document.querySelector("#progressText"),
  scoreText: document.querySelector("#scoreText"),
  handImage: document.querySelector("#handImage"),
  demoHand: document.querySelector("#demoHand"),
  answerRow: document.querySelector(".answer-row"),
  answerButtons: document.querySelectorAll("[data-answer]"),
  resultsTag: document.querySelector("#resultsTag"),
  resultsTitle: document.querySelector("#resultsTitle"),
  scoreLabel: document.querySelector("#scoreLabel"),
  accuracyLabel: document.querySelector("#accuracyLabel"),
  timeLabel: document.querySelector("#timeLabel"),
  rateLabel: document.querySelector("#rateLabel"),
  scoreMetric: document.querySelector("#scoreMetric"),
  accuracyMetric: document.querySelector("#accuracyMetric"),
  timeMetric: document.querySelector("#timeMetric"),
  rateMetric: document.querySelector("#rateMetric"),
  missedList: document.querySelector("#missedList"),
  basicUpgradeTitle: document.querySelector("#basicUpgradeTitle"),
  basicUpgradeDescription: document.querySelector("#basicUpgradeDescription"),
  basicUpgradeLink: document.querySelector("#basicUpgradeLink"),
  soapPanel: document.querySelector("#soapPanel"),
  soapTitle: document.querySelector("#soapTitle"),
  soapList: document.querySelector("#soapList"),
  restartButton: document.querySelector("#restartButton"),
  newSetupButton: document.querySelector("#newSetupButton")
};

elements.trialCount.addEventListener("input", updateStartState);
elements.languageSelect.addEventListener("change", updateLanguage);
elements.setCount.addEventListener("change", updateStartState);
elements.striveAiToggle.addEventListener("change", updateStartState);
elements.startButton.addEventListener("click", startSession);
elements.restartButton.addEventListener("click", startSession);
elements.newSetupButton.addEventListener("click", showSetup);
elements.navAction.addEventListener("click", (event) => {
  if (!document.body.classList.contains("session-active")) return;

  event.preventDefault();
  finishSession();
});
elements.soapPanel.addEventListener("copy", preventSoapCopy);
elements.soapPanel.addEventListener("cut", preventSoapCopy);
elements.soapPanel.addEventListener("selectstart", preventSoapCopy);
elements.soapPanel.addEventListener("contextmenu", preventSoapCopy);

elements.answerButtons.forEach((button) => {
  button.addEventListener("click", () => submitAnswer(button.dataset.answer));
});

initializeImages();

function updateStartState() {
  state.imagesPerSet = getRequestedTrialCount();
  state.setCount = getRequestedSetCount();
  state.striveAiEnabled = elements.striveAiToggle.checked;
  elements.startButton.disabled = state.images.length === 0 || state.imagesPerSet < 1 || state.setCount < 1;
  if (elements.trialCountValue) {
    elements.trialCountValue.textContent = state.imagesPerSet;
  }
}

function updateLanguage() {
  state.language = elements.languageSelect.value === "es" ? "es" : "en";
  applyLanguage();
}

function startSession() {
  updateStartState();

  if (!state.images.length) return;

  state.demoMode = false;
  state.trials = buildSessionTrials(state.imagesPerSet, state.setCount);
  state.currentIndex = 0;
  state.correct = 0;
  state.answers = [];
  state.elapsedSeconds = 0;

  elements.setupPanel.classList.add("hidden");
  elements.homeLayout.classList.add("hidden");
  elements.resultsPanel.classList.add("hidden");
  elements.soapPanel.classList.add("hidden");
  elements.taskPanel.classList.remove("hidden");
  document.body.classList.add("session-active");
  setNavAction("session");
  setQuestionHeader();
  elements.timer.textContent = formatTime(0);

  state.startedAt = Date.now();
  clearInterval(state.timerId);
  state.timerId = setInterval(updateTimer, 500);

  showCurrentTrial();
}

function showCurrentTrial() {
  const copy = getCopy();
  const trial = state.trials[state.currentIndex];
  elements.progressText.textContent = `${copy.picture} ${trial.itemNumber} ${copy.of} ${state.imagesPerSet}`;
  elements.scoreText.textContent = `${copy.correct}: ${state.correct}`;
  elements.demoHand.classList.add("hidden");
  elements.handImage.classList.remove("hidden");
  elements.handImage.src = trial.url;
}

function submitAnswer(answer) {
  const trial = state.trials[state.currentIndex];
  const isCorrect = answer === trial.side;

  if (isCorrect) state.correct += 1;

  state.answers.push({
    image: trial.name,
    url: trial.url,
    setNumber: trial.setNumber,
    itemNumber: trial.itemNumber,
    correctSide: trial.side,
    answer,
    isCorrect
  });

  state.currentIndex += 1;

  if (state.currentIndex >= state.trials.length) {
    finishSession();
  } else {
    showCurrentTrial();
  }
}

function finishSession() {
  const copy = getCopy();
  clearInterval(state.timerId);
  updateTimer();

  const total = state.answers.length;
  const accuracy = total ? Math.round((state.correct / total) * 100) : 0;
  const minutes = Math.max(state.elapsedSeconds / 60, 1 / 60);
  const rate = total ? (total / minutes).toFixed(1) : "0.0";

  elements.taskPanel.classList.add("hidden");
  elements.resultsPanel.classList.remove("hidden");
  elements.homeLayout.classList.add("hidden");
  document.body.classList.remove("session-active");
  setNavAction("contact");
  setQuestionHeader();
  elements.scoreMetric.textContent = `${state.correct} / ${total}`;
  elements.accuracyMetric.textContent = `${accuracy}%`;
  elements.timeMetric.textContent = formatTime(state.elapsedSeconds);
  elements.rateMetric.textContent = `${rate} ${copy.perMinute}`;
  elements.scoreText.textContent = `${copy.correct}: ${state.correct}`;

  renderMissedItems();
  renderSoapNotes({
    total,
    accuracy,
    rate,
    missedCount: total - state.correct,
    plannedTotal: state.trials.length
  });
}

function renderMissedItems() {
  const copy = getCopy();
  const missed = state.answers.filter((answer) => !answer.isCorrect);

  if (!missed.length) {
    elements.missedList.innerHTML = `<div class="missed-empty">${copy.noMissedItems}</div>`;
    return;
  }

  const photoItems = missed
    .map((item) => `
      <figure class="missed-photo">
        <img src="${escapeHtml(item.url)}" alt="${escapeHtml(formatText(copy.missedAlt, { set: item.setNumber, picture: item.itemNumber }))}" loading="lazy" />
        <figcaption>${copy.sets} ${item.setNumber} · ${copy.picture} ${item.itemNumber}</figcaption>
      </figure>
    `)
    .join("");

  elements.missedList.innerHTML = `
    <details class="missed-details">
      <summary>
        <span>${copy.missedItems}</span>
        <strong>${missed.length} ${missed.length === 1 ? copy.photo : copy.photos}</strong>
      </summary>
      <div class="missed-photo-grid">${photoItems}</div>
    </details>
  `;
}

function showSetup() {
  clearInterval(state.timerId);
  elements.timer.textContent = "00:00";
  elements.taskPanel.classList.add("hidden");
  elements.resultsPanel.classList.add("hidden");
  elements.soapPanel.classList.add("hidden");
  elements.homeLayout.classList.remove("hidden");
  elements.setupPanel.classList.remove("hidden");
  document.body.classList.remove("session-active");
  setNavAction("contact");
  setQuestionHeader();
}

function updateTimer() {
  if (!state.startedAt) return;

  state.elapsedSeconds = Math.floor((Date.now() - state.startedAt) / 1000);
  elements.timer.textContent = formatTime(state.elapsedSeconds);
}

function getRequestedTrialCount() {
  elements.trialCount.value = MAX_TRIALS;
  return MAX_TRIALS;
}

function getRequestedSetCount() {
  elements.setCount.value = "1";
  return 1;
}

function buildSessionTrials(imagesPerSet, setCount) {
  const cappedImagesPerSet = Math.min(imagesPerSet, state.images.length, MAX_TRIALS);
  const trials = [];

  for (let setIndex = 0; setIndex < setCount; setIndex += 1) {
    const setImages = shuffle(state.images).slice(0, cappedImagesPerSet);
    setImages.forEach((image, itemIndex) => {
      trials.push({
        ...image,
        setNumber: setIndex + 1,
        itemNumber: itemIndex + 1
      });
    });
  }

  return trials;
}

function initializeImages() {
  applyLanguage();
  setNavAction("contact");
  setQuestionHeader();
  updateStartState();
}

function setNavAction(mode) {
  const copy = getCopy();
  if (mode === "session") {
    elements.navAction.textContent = copy.endSession;
    elements.navAction.href = "#end-session";
    elements.navAction.setAttribute("aria-label", copy.endSessionAria);
    return;
  }

  elements.navAction.textContent = copy.contact;
  elements.navAction.href = "https://www.striveptlv.com/independence/contact.html";
  elements.navAction.setAttribute("aria-label", copy.contactAria);
}

function setQuestionHeader() {
  const copy = getCopy();
  const isSpanish = state.language === "es";
  elements.appTitle.classList.toggle("is-stacked", isSpanish);

  if (isSpanish) {
    elements.appTitle.innerHTML = `
      <span class="left-word">${copy.left}</span>
      <span class="or-word">${copy.or}</span>
      <span class="right-cluster"><span class="right-word">${copy.right}</span><span class="question-mark">?</span></span>
    `;
    return;
  }

  elements.appTitle.innerHTML = `
    <span class="left-word">${copy.left}</span>
    <span class="or-word">${copy.or}</span>
    <span class="right-word">${copy.right}</span><span class="question-mark">?</span>
  `;
}

function applyLanguage() {
  const copy = getCopy();
  document.documentElement.lang = state.language;
  document.body.dataset.language = state.language;
  document.title = copy.pageTitle;

  elements.moduleTag.textContent = copy.moduleTag;
  if (elements.basicBadge) {
    elements.basicBadge.textContent = copy.basicBadge;
  }
  elements.moduleDescription.textContent = copy.moduleDescription;
  elements.startButton.textContent = copy.startSession;
  elements.setupTag.textContent = copy.setupTag;
  elements.setupTitle.textContent = copy.setupTitle;
  elements.setupDescription.textContent = copy.setupDescription;
  elements.instructionsTitle.textContent = copy.instructionsTitle;
  elements.instructionsList.innerHTML = copy.instructions.map((item) => `<li>${item}</li>`).join("");
  elements.imagesPerSetLabel.textContent = copy.imagesPerSet;
  if (elements.basicPicturesLabel) {
    elements.basicPicturesLabel.textContent = copy.basicPicturesLabel;
  }
  elements.basicLimitDescription.textContent = copy.basicLimitDescription;
  elements.basicLimitDescription.hidden = !copy.basicLimitDescription;
  elements.upgradeLink.textContent = copy.upgrade;
  elements.languageLabel.textContent = copy.language;
  elements.setsLabel.textContent = copy.sets;
  elements.aiDescription.textContent = copy.aiDescription;
  elements.timerLabel.textContent = copy.time;
  elements.taskPanel.setAttribute("aria-label", copy.identifyHandSide);
  elements.answerRow.setAttribute("aria-label", copy.answerChoices);
  elements.resultsTag.textContent = copy.results;
  elements.resultsTitle.textContent = copy.sessionComplete;
  elements.scoreLabel.textContent = copy.score;
  elements.accuracyLabel.textContent = copy.accuracy;
  elements.timeLabel.textContent = copy.time;
  elements.rateLabel.textContent = copy.rate;
  elements.basicUpgradeTitle.textContent = copy.basicUpgradeTitle;
  elements.basicUpgradeDescription.textContent = copy.basicUpgradeDescription;
  elements.basicUpgradeDescription.hidden = !copy.basicUpgradeDescription;
  elements.basicUpgradeLink.textContent = copy.upgrade;
  elements.soapPanel.setAttribute("aria-label", `${copy.soapNote} options`);
  elements.soapPanel.querySelector(".section-tag").textContent = "STRIVE AI";
  elements.soapTitle.textContent = copy.soapNote;
  elements.restartButton.textContent = copy.runAgain;
  elements.newSetupButton.textContent = copy.newSetup;

  elements.answerButtons.forEach((button) => {
    button.textContent = button.dataset.answer === "left" ? copy.left : copy.right;
  });

  updateSetOptions();
  setQuestionHeader();
  setNavAction(document.body.classList.contains("session-active") ? "session" : "contact");

  if (!elements.taskPanel.classList.contains("hidden") && state.trials.length) {
    showCurrentTrial();
  }

  if (!elements.resultsPanel.classList.contains("hidden")) {
    const total = state.answers.length;
    const minutes = Math.max(state.elapsedSeconds / 60, 1 / 60);
    const rate = total ? (total / minutes).toFixed(1) : "0.0";
    elements.rateMetric.textContent = `${rate} ${copy.perMinute}`;
    elements.scoreText.textContent = `${copy.correct}: ${state.correct}`;
    renderMissedItems();
  }
}

function updateSetOptions() {
  const copy = getCopy();
  Array.from(elements.setCount.options).forEach((option) => {
    const count = Number.parseInt(option.value, 10);
    option.textContent = `${count} ${count === 1 ? copy.setSingular : copy.setPlural}`;
  });
}

function getCopy() {
  return TEXT[state.language] || TEXT.en;
}

function formatText(template, values) {
  return Object.entries(values).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, value), template);
}

function renderSoapNotes(summary) {
  elements.soapList.innerHTML = "";

  if (!state.striveAiEnabled) {
    elements.soapPanel.classList.add("hidden");
    return;
  }

  const note = generateSoapNote(summary);
  const option = document.createElement("article");
  option.className = "soap-option";

  const paragraph = document.createElement("p");
  paragraph.className = "soap-note-text";
  paragraph.textContent = note;

  const lockedMessage = document.createElement("div");
  lockedMessage.className = "soap-locked-message";
  lockedMessage.textContent = getCopy().soapLocked;

  option.append(paragraph, lockedMessage);
  elements.soapList.append(option);

  elements.soapPanel.classList.remove("hidden");
}

function generateSoapNote({ total, accuracy, rate, missedCount, plannedTotal }) {
  const setPhrase = `${state.setCount} ${state.setCount === 1 ? "set" : "sets"} of ${state.imagesPerSet} images`;
  const participationPhrase = total >= plannedTotal ? `completed ${setPhrase}` : `attempted ${total} of ${plannedTotal} planned images across ${setPhrase}`;
  const scorePhrase = `${state.correct}/${total} correct (${accuracy}% accuracy)`;
  const timePhrase = `${formatTime(state.elapsedSeconds)} with a response rate of ${rate} images/min`;
  const errorPhrase = missedCount === 0 ? "no left/right discrimination errors" : `${missedCount} left/right discrimination ${missedCount === 1 ? "error" : "errors"}`;
  const speedPhrase = getSpeedInterpretation(total, missedCount);
  const trendPhrase = getSetTrendInterpretation();
  const performancePhrase = trendPhrase ? `${speedPhrase} ${trendPhrase}` : speedPhrase;
  const noteOptions = [
    `Patient participated in STRIVE Independence left-right discrimination activity and was instructed to identify whether each image showed a left or right hand. Patient ${participationPhrase}, scoring ${scorePhrase} in ${timePhrase}, with ${errorPhrase}. ${performancePhrase} Performance indicates current visual laterality discrimination accuracy and processing speed during a timed recognition task. Continue left-right discrimination training with graded image volume and monitor accuracy, response speed, and consistency across sets.`,
    `Patient engaged in a timed hand laterality task targeting left/right discrimination. Patient ${participationPhrase} and identified ${scorePhrase}; total task time was ${timePhrase}, with ${errorPhrase}. ${performancePhrase} Patient demonstrated measurable performance in visual discrimination, attention, and rapid motor response selection. Continue practice using STRIVE Independence tasks and adjust set/image count based on accuracy and fatigue.`,
    `Patient completed left-right hand identification practice to support body schema, laterality, and visual perceptual skills. Patient ${participationPhrase}, achieved ${scorePhrase} in ${timePhrase}, and session included ${errorPhrase}. ${performancePhrase} Results suggest functional level of accuracy and speed for left/right discrimination under timed conditions. Progress or maintain task demands by modifying sets, image count, and pacing during future sessions.`,
    `Patient worked on a structured left-right discrimination activity using randomized hand images. Patient ${participationPhrase}, with ${scorePhrase}, task time/rate of ${timePhrase}, and ${errorPhrase}. ${performancePhrase} Results give a practical snapshot of laterality recognition, attention to visual details, and response efficiency. Continue practice with repeated trials and compare performance across sessions to guide grading.`,
    `Patient was presented with randomized hand images and asked to select left or right for each stimulus. Patient ${participationPhrase}; score was ${scorePhrase}, time/rate was ${timePhrase}, and errors totaled ${missedCount}. ${performancePhrase} Patient demonstrated current capacity for timed left-right visual discrimination with documented accuracy and speed. Continue left-right discrimination practice and increase or decrease set volume according to performance and clinical tolerance.`,
    `Patient engaged in left-right discrimination task as part of STRIVE Independence visual perceptual training. Patient ${participationPhrase}, correctly identifying ${scorePhrase} with total time/rate of ${timePhrase} and ${errorPhrase}. ${performancePhrase} Performance reflects visual scanning, laterality judgment, sustained attention, and decision speed during a structured task. Continue task-based training and use accuracy/time data to support ongoing documentation and progression.`,
    `Patient practiced identifying left versus right hand images in a timed therapeutic activity. Patient ${participationPhrase} and scored ${scorePhrase}; completion time was ${timePhrase}, with ${errorPhrase}. ${performancePhrase} Patient showed quantifiable left-right discrimination performance with objective measures for accuracy and efficiency. Continue STRIVE Independence laterality training, repeat comparable sets, and track changes in score, time, and error pattern over time.`
  ];

  return noteOptions[Math.floor(Math.random() * noteOptions.length)];
}

function getSpeedInterpretation(total, missedCount) {
  if (!total) {
    return `Speed comparison was not calculated because no responses were recorded; average reference speed is ${SPEED_NORM_MIN_SECONDS}-${SPEED_NORM_MAX_SECONDS} seconds per hand/foot image.`;
  }

  const secondsPerImage = state.elapsedSeconds / total;
  const roundedSeconds = secondsPerImage.toFixed(1);
  const accuracyRatio = total ? state.correct / total : 0;
  const recognitionWasGood = accuracyRatio > 0.7;
  const normPhrase = `average reference speed is ${SPEED_NORM_MIN_SECONDS}-${SPEED_NORM_MAX_SECONDS} seconds per hand/foot image`;

  if (secondsPerImage < SPEED_NORM_MIN_SECONDS) {
    const accuracyContext = missedCount > 0
      ? "errors were present, which may suggest the patient rushed the activity and prioritized speed over accuracy"
      : "accurate recognition was maintained during this trial";
    return `Average speed was ${roundedSeconds} seconds per image, faster than average (${normPhrase}); ${accuracyContext}.`;
  }

  if (secondsPerImage > SPEED_NORM_MAX_SECONDS) {
    const accuracyContext = recognitionWasGood
      ? "recognition remained good at greater than 7/10 accuracy, suggesting deliberate processing with preserved discrimination"
      : "accuracy was also reduced, suggesting increased processing time with difficulty in left-right discrimination";
    return `Average speed was ${roundedSeconds} seconds per image, slower than average (${normPhrase}); ${accuracyContext}.`;
  }

  return `Average speed was ${roundedSeconds} seconds per image, within the average range (${normPhrase}).`;
}

function getSetTrendInterpretation() {
  if (state.setCount < 2) return "";

  const setSummaries = Array.from({ length: state.setCount }, (_, index) => {
    const setNumber = index + 1;
    const answers = state.answers.filter((answer) => answer.setNumber === setNumber);
    const correct = answers.filter((answer) => answer.isCorrect).length;
    const total = answers.length;
    const accuracy = total ? correct / total : 0;

    return { setNumber, correct, total, accuracy };
  }).filter((summary) => summary.total > 0);

  if (setSummaries.length < 2) return "";

  const first = setSummaries[0];
  const last = setSummaries[setSummaries.length - 1];
  const improvedWithRepetition = last.accuracy - first.accuracy >= 0.1 && last.correct > first.correct;
  const fatiguePattern = first.accuracy >= 0.8 && first.accuracy - last.accuracy >= 0.2;
  const steadyDecline = setSummaries.every((summary, index) => index === 0 || summary.accuracy <= setSummaries[index - 1].accuracy);
  const steadyImprovement = setSummaries.every((summary, index) => index === 0 || summary.accuracy >= setSummaries[index - 1].accuracy);
  const setScorePhrase = setSummaries
    .map((summary) => `set ${summary.setNumber}: ${summary.correct}/${summary.total}`)
    .join(", ");

  if (fatiguePattern || (steadyDecline && first.accuracy > last.accuracy)) {
    return `Set pattern (${setScorePhrase}) showed stronger initial performance followed by lower accuracy, which may indicate mental fatigue or reduced consistency as the activity continued.`;
  }

  if (improvedWithRepetition || (steadyImprovement && last.accuracy > first.accuracy)) {
    return `Set pattern (${setScorePhrase}) showed improved recognition with repetition, suggesting benefit from practice and task familiarity across sets.`;
  }

  return `Set pattern (${setScorePhrase}) was relatively stable without a clear repetition gain or fatigue-related decline.`;
}

function preventSoapCopy(event) {
  if (!event.target.closest("#soapPanel")) return;
  event.preventDefault();
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[character];
  });
}
