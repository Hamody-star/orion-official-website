(() => {
  const root = document.getElementById("vipMembership");
  if (!root) return;
  const prices = {
    basic: { monthly: 2, quarterly: 5.70, semiannual: 10.80, annual: 20 },
    silver: { monthly: 5, quarterly: 14.25, semiannual: 27, annual: 50 },
    gold: { monthly: 10, quarterly: 28.50, semiannual: 54, annual: 100 },
    platinum: { monthly: 20, quarterly: 57, semiannual: 108, annual: 200 }
  };
  const periods = {
    ar: {
      monthly: "لمدة شهر",
      quarterly: "إجمالي 3 شهور",
      semiannual: "إجمالي 6 شهور",
      annual: "إجمالي سنة",
      standard: "السعر الأساسي",
      save5: "وفّر 5% مقارنة بالدفع الشهري",
      save10: "وفّر 10% مقارنة بالدفع الشهري",
      saveAnnual: "وفّر قيمة شهرين",
    },
    en: {
      monthly: "for 1 month",
      quarterly: "total for 3 months",
      semiannual: "total for 6 months",
      annual: "total for 12 months",
      standard: "Standard price",
      save5: "Save 5% vs monthly",
      save10: "Save 10% vs monthly",
      saveAnnual: "Save the cost of 2 months",
    }
  };
  let selected = "monthly";
  const buttons = [...root.querySelectorAll("[data-period]")];
  function render() {
    const lang = document.documentElement.lang === "en" ? "en" : "ar";
    buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.period === selected)));
    root.querySelectorAll("[data-price]").forEach(node => {
      const amount = prices[node.dataset.price][selected];
      node.textContent = "$" + amount.toFixed(2);
    });
    root.querySelectorAll("[data-duration]").forEach(node => {
      node.textContent = periods[lang][selected];
    });
    root.querySelectorAll("[data-saving]").forEach(node => {
      const label = selected === "quarterly" ? "save5" :
        selected === "semiannual" ? "save10" :
        selected === "annual" ? "saveAnnual" : "standard";
      node.textContent = periods[lang][label];
    });
  }
  buttons.forEach(button => button.addEventListener("click", () => {
    selected = button.dataset.period;
    render();
  }));
  const languageButton = document.querySelector(".lang-switch");
  if (languageButton) languageButton.addEventListener("click", () => render());
  render();
})();