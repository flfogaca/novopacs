/*  Themis Health – Navigation Bridge (nav.js)
    Injected into every code.html inside frontend_2/telas/.
    Communicates with the parent shell (index.html) via postMessage. */

(function () {
  const isInIframe = window.parent !== window;

  function navigate(screen) {
    if (isInIframe) {
      window.parent.postMessage({ type: "navigate", screen }, "*");
    } else {
      window.location.href = "../" + screen + "/code.html";
    }
  }

  function setTitle(title) {
    if (isInIframe) {
      window.parent.postMessage({ type: "title", title }, "*");
    }
  }

  window.themisNav = { navigate, setTitle };

  function applyTheme(dark) {
    document.documentElement.classList.toggle("dark", !!dark);
  }

  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-nav]");
    if (link) {
      e.preventDefault();
      navigate(link.getAttribute("data-nav"));
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const t = document.querySelector("title");
    if (t) setTitle(t.textContent);
  });

  window.addEventListener("message", (e) => {
    if (e.data && e.data.type === "theme") {
      applyTheme(e.data.dark);
    }
  });
})();
