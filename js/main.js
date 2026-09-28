(function () {
  "use strict";

  var THEME_KEY = "theme";
  var root = document.documentElement;

  function applyStoredTheme() {
    var stored = null;
    try {
      stored = localStorage.getItem(THEME_KEY);
    } catch (e) {
      /* localStorage unavailable (private mode, blocked storage) — default below still applies */
    }
    // Site defaults to light mode regardless of OS preference; dark only applies
    // once a visitor explicitly opts in via the toggle (and it's remembered from then on).
    root.setAttribute("data-theme", stored === "dark" ? "dark" : "light");
  }

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function toggleTheme() {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {
      /* ignore — theme just won't persist across reloads */
    }
  }

  applyStoredTheme();

  document.addEventListener("DOMContentLoaded", function () {
    var themeBtn = document.querySelector("[data-theme-toggle]");
    if (themeBtn) {
      themeBtn.addEventListener("click", toggleTheme);
    }

    var navToggle = document.querySelector("[data-nav-toggle]");
    var navLinks = document.querySelector("[data-nav-links]");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", function () {
        var isOpen = navLinks.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
      });
      navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          navLinks.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    var yearEl = document.querySelector("[data-year]");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });
})();
