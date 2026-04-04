const credentials = {
  username: "Jordan Lee",
  password: "Occupational",
};

const trainingCard = {
  cardName: "Jordan Lee",
  cardNumber: "5293847102938475",
  expiry: "09/31",
  cvv: "001",
};

const loginScreen = document.querySelector("#loginScreen");
const appShell = document.querySelector("#appShell");
const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");
const passwordInput = document.querySelector("#passwordInput");
const togglePassword = document.querySelector("#togglePassword");
const navItems = document.querySelectorAll(".nav-item");
const panels = document.querySelectorAll(".panel");
const paymentForm = document.querySelector("#paymentForm");
const paymentMessage = document.querySelector("#paymentMessage");
const downloadBill = document.querySelector("#downloadBill");
const downloadModal = document.querySelector("#downloadModal");
const closeModal = document.querySelector("#closeModal");
const body = document.body;
const goalChecks = document.querySelectorAll(".goal-item input[type='checkbox']");

const goalState = {
  bill: false,
  charges: false,
  usage: false,
  account: false,
  contact: false,
  payment: false,
  download: false,
};

function syncGoals() {
  goalChecks.forEach((checkbox) => {
    checkbox.checked = Boolean(goalState[checkbox.dataset.goal]);
  });
}

function completeGoal(goal) {
  if (!goalState[goal]) {
    goalState[goal] = true;
    syncGoals();
  }
}

function activatePanel(panelId) {
  if (body.classList.contains("locked")) return;

  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.target === panelId);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === panelId);
  });

  if (panelId === "billing") {
    completeGoal("charges");
  }

  if (panelId === "usage") {
    completeGoal("usage");
  }

  if (panelId === "account") {
    completeGoal("account");
  }

  if (panelId === "support") {
    completeGoal("contact");
  }
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    activatePanel(item.dataset.target);
  });
});

document.querySelectorAll(".primary-button[data-target]").forEach((button) => {
  button.addEventListener("click", () => {
    activatePanel(button.dataset.target);
  });
});

document.querySelectorAll("[data-goal-trigger]").forEach((element) => {
  element.addEventListener("click", () => {
    const goal = element.dataset.goalTrigger;
    completeGoal(goal);
  });
});

togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePassword.textContent = isHidden ? "Hide" : "Show";
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const username = (formData.get("username") || "").toString().trim();
  const password = (formData.get("password") || "").toString();

  loginMessage.className = "form-message";

  if (username === credentials.username && password === credentials.password) {
    loginMessage.textContent = "Login successful.";
    loginMessage.classList.add("success");
    loginScreen.classList.add("hidden");
    appShell.classList.remove("hidden");
    body.classList.remove("locked");
    appShell.inert = false;
    appShell.removeAttribute("aria-hidden");
    return;
  }

  loginMessage.textContent = "Username or password is incorrect.";
  loginMessage.classList.add("error");
});

document.addEventListener("keydown", (event) => {
  if (!body.classList.contains("locked")) return;

  if (event.key === "Tab") {
    const focusable = loginForm.querySelectorAll("input, button");
    const items = Array.from(focusable);
    const first = items[0];
    const last = items[items.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

function normalizeDigits(value) {
  return value.replace(/\D/g, "");
}

downloadBill.addEventListener("click", () => {
  if (body.classList.contains("locked")) return;

  completeGoal("download");

  if (typeof downloadModal.showModal === "function") {
    downloadModal.showModal();
    return;
  }

  downloadModal.setAttribute("open", "open");
});

closeModal.addEventListener("click", () => {
  if (typeof downloadModal.close === "function") {
    downloadModal.close();
    return;
  }

  downloadModal.removeAttribute("open");
});

downloadModal.addEventListener("click", (event) => {
  if (event.target === downloadModal) {
    if (typeof downloadModal.close === "function") {
      downloadModal.close();
      return;
    }

    downloadModal.removeAttribute("open");
  }
});

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (body.classList.contains("locked")) return;

  const formData = new FormData(paymentForm);
  const values = {
    cardName: (formData.get("cardName") || "").toString().trim(),
    cardNumber: normalizeDigits((formData.get("cardNumber") || "").toString()),
    expiry: (formData.get("expiry") || "").toString().trim(),
    cvv: normalizeDigits((formData.get("cvv") || "").toString()),
  };

  const isMatch =
    values.cardName.toLowerCase() === trainingCard.cardName.toLowerCase() &&
    values.cardNumber === trainingCard.cardNumber &&
    values.expiry === trainingCard.expiry &&
    values.cvv === trainingCard.cvv;

  paymentMessage.className = "form-message";

  if (isMatch) {
    paymentMessage.textContent = "Practice payment accepted. The training card was entered correctly.";
    paymentMessage.classList.add("success");
    completeGoal("payment");
    paymentForm.reset();
    return;
  }

  paymentMessage.textContent = "Payment was not accepted. Recheck the mock card information and try again.";
  paymentMessage.classList.add("error");
});

appShell.inert = true;
appShell.setAttribute("aria-hidden", "true");
syncGoals();
