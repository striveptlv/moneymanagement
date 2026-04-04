const PAYMENT_BANK = {
  accountNumber: "334221098",
  routingNumber: "58293041",
  accountName: "Jordan Lee",
};

const LOGIN = {
  username: "JordanL",
  password: "Teacher",
};

const TODAY = "2026-04-03";
const DUE_DATE = "2026-04-18";
const FULL_PAYMENT = 2513.05;
const MINIMUM_PAYMENT = 35.0;

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value));
}

function setStatus(element, message, type) {
  if (!element) return;
  element.textContent = message;
  element.className = `status ${type || ""}`.trim();
}

function checkAllGoalsCompleted() {
  const goals = document.querySelectorAll("[data-goal-item]");
  const completionModal = document.querySelector("[data-complete-modal]");
  if (!goals.length || !completionModal || completionModal.dataset.shown === "true") return;

  const allDone = Array.from(goals).every((goal) => goal.classList.contains("completed"));
  if (allDone) {
    completionModal.dataset.shown = "true";
    completionModal.classList.remove("hidden");
  }
}

function completeGoal(goalName) {
  document.querySelectorAll(`[data-goal-item="${goalName}"]`).forEach((item) => {
    item.classList.add("completed");
    const box = item.querySelector(".goal-box");
    if (box) box.textContent = "✓";
  });
  checkAllGoalsCompleted();
}

function initializeLogin() {
  const shell = document.querySelector("[data-secure-shell]");
  const loginScreen = document.querySelector("[data-login-screen]");
  const loginForm = document.querySelector("[data-login-form]");
  const loginStatus = document.querySelector("[data-login-status]");
  const dashboardTop = document.querySelector("[data-dashboard-top]");

  if (!shell || !loginScreen || !loginForm) return;

  shell.classList.add("hidden");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const username = String(formData.get("username") || "").trim();
    const password = String(formData.get("password") || "").trim();

    if (username !== LOGIN.username || password !== LOGIN.password) {
      setStatus(loginStatus, "Incorrect username or password.", "error");
      return;
    }

    loginScreen.remove();
    shell.classList.remove("hidden");
    completeGoal("login");
    setStatus(loginStatus, "", "");
    if (dashboardTop) {
      window.history.replaceState(null, "", "#dashboard");
      dashboardTop.scrollIntoView({ behavior: "auto", block: "start" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
    initializeAutoPrompts();
  });
}

function initializePaymentForms() {
  document.querySelectorAll("[data-payment-form]").forEach((form) => {
    const amountInput = form.querySelector("[data-amount]");
    const dateInput = form.querySelector("[data-date]");
    const status = form.querySelector("[data-status]");
    const radioButtons = form.querySelectorAll("input[name='paymentOption']");

    if (dateInput) {
      dateInput.min = TODAY;
      dateInput.max = DUE_DATE;
      dateInput.value = TODAY;
    }

    radioButtons.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (amountInput) {
          amountInput.value = radio.value === "minimum" ? MINIMUM_PAYMENT.toFixed(2) : FULL_PAYMENT.toFixed(2);
        }
        completeGoal("choice");
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const pickedDate = String(formData.get("paymentDate") || "");
      const amount = Number(formData.get("paymentAmount"));
      const paymentOption = String(formData.get("paymentOption") || "");

      if (
        formData.get("bankAccountNumber") !== PAYMENT_BANK.accountNumber ||
        formData.get("routingNumber") !== PAYMENT_BANK.routingNumber ||
        formData.get("accountName") !== PAYMENT_BANK.accountName
      ) {
        setStatus(status, "Bank details do not match the practice checking account.", "error");
        return;
      }

      if (!pickedDate || pickedDate < TODAY || pickedDate > DUE_DATE) {
        setStatus(status, "Choose a payment date on or before April 18, 2026.", "error");
        return;
      }

      if (!amount || amount <= 0) {
        setStatus(status, "Enter a valid payment amount.", "error");
        return;
      }

      if (form.dataset.rejectFull === "true" && paymentOption === "full") {
        setStatus(status, "Payment rejected: insufficient funds in the linked bank account for full balance payment.", "error");
        return;
      }

      completeGoal("choice");
      completeGoal("payment");
      const typeLabel = paymentOption === "minimum" ? "minimum payment" : "full balance payment";
      setStatus(
        status,
        `${formatMoney(amount)} scheduled for ${pickedDate} using ${typeLabel}.`,
        "success"
      );
    });
  });
}

function initializeTabs() {
  document.querySelectorAll("[data-tabs]").forEach((group) => {
    const buttons = group.querySelectorAll("[data-target]");
    const panels = group.parentElement.querySelectorAll("[data-tab-panel]");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.target;
        buttons.forEach((item) => item.classList.remove("active"));
        panels.forEach((panel) => panel.classList.add("hidden"));
        button.classList.add("active");
        const selected = document.getElementById(target);
        if (selected) selected.classList.remove("hidden");
      });
    });
  });
}

function initializeScoreButtons() {
  document.querySelectorAll("[data-show-score]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector("[data-score-modal]");
      if (modal) modal.classList.remove("hidden");
      completeGoal("score");
    });
  });

  document.querySelectorAll("[data-close-score]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector("[data-score-modal]");
      if (modal) modal.classList.add("hidden");
    });
  });
}

function initializeDismissButtons() {
  document.querySelectorAll("[data-dismiss]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.closest(".modal, .popup, .toast");
      if (target) target.classList.add("hidden");
    });
  });
}

function initializeDisputes() {
  const modal = document.querySelector("[data-transaction-modal]");
  const modalTitle = document.querySelector("[data-transaction-title]");
  const modalText = document.querySelector("[data-transaction-text]");
  const disputeButton = document.querySelector("[data-transaction-dispute]");
  const fraudButton = document.querySelector("[data-transaction-fraud]");
  let activeRow = null;

  document.querySelectorAll("[data-transaction-row]").forEach((row) => {
    row.addEventListener("click", () => {
      activeRow = row;
      if (modalTitle) modalTitle.textContent = row.dataset.merchant || "Selected transaction";
      if (modalText) modalText.textContent = `${row.dataset.date || "Pending"} • ${row.dataset.amount || ""}`;
      if (modal) modal.classList.remove("hidden");
    });
  });

  if (disputeButton) {
    disputeButton.addEventListener("click", () => {
      const statusTarget = document.querySelector("[data-dispute-status]");
      if (activeRow) {
        activeRow.dataset.state = "submitted";
        activeRow.classList.add("resolved");
      }
      completeGoal("dispute");
      setStatus(statusTarget, "Dispute request submitted for the selected charge.", "success");
      if (modal) modal.classList.add("hidden");
    });
  }

  if (fraudButton) {
    fraudButton.addEventListener("click", () => {
      const statusTarget = document.querySelector("[data-fraud-status]");
      if (activeRow) {
        activeRow.dataset.state = "submitted";
        activeRow.classList.add("resolved");
      }
      completeGoal("fraud");
      setStatus(statusTarget, "Fraud alert submitted for the selected transaction.", "success");
      if (modal) modal.classList.add("hidden");
    });
  }
}

function initializeReferenceLinks() {
  document.querySelectorAll("[data-reference-link]").forEach((link) => {
    link.addEventListener("click", () => {
      completeGoal("reference");
    });
  });
}

function initializeStatusChips() {
  const modal = document.querySelector("[data-chip-modal]");
  const title = document.querySelector("[data-chip-title]");
  const body = document.querySelector("[data-chip-body]");

  document.querySelectorAll("[data-status-chip]").forEach((chip) => {
    chip.addEventListener("click", () => {
      if (title) title.textContent = chip.dataset.title || chip.textContent.trim();
      if (body) body.textContent = chip.dataset.body || "";
      if (modal) modal.classList.remove("hidden");
    });
  });
}

function initializeAutoPrompts() {
  const loginScreen = document.querySelector("[data-login-screen]");
  if (loginScreen && !loginScreen.classList.contains("hidden")) return;

  const promoModal = document.querySelector("[data-promo-modal]");
  if (promoModal) {
    window.setTimeout(() => promoModal.classList.remove("hidden"), 700);
  }

  const popup = document.querySelector("[data-chat-popup]");
  if (popup) {
    window.setTimeout(() => popup.classList.remove("hidden"), 1800);
  }

  const toast = document.querySelector("[data-toast]");
  if (toast) {
    window.setTimeout(() => toast.classList.remove("hidden"), 2600);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initializeLogin();
  initializePaymentForms();
  initializeTabs();
  initializeScoreButtons();
  initializeDismissButtons();
  initializeDisputes();
  initializeReferenceLinks();
  initializeStatusChips();
  initializeAutoPrompts();
});
