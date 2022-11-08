document.addEventListener("DOMContentLoaded", () => {
  const URL_PARTS = new URLSearchParams(window.location);
  const originalHost = URL_PARTS.get("origin");

  const SEARCH_PARAMS = new URLSearchParams(window.location.search);
  const originalParams = SEARCH_PARAMS.get("duo.originalurl.key");

  if (!originalUrl) return;

  const originalUrl = originalHost + originalParams;

  const button = document.createElement("a");
  button.innerText = "Gå tilbake til original url";
  button.setAttribute("href", originalUrl);
  button.classList.add("duoBackLink");

  document.body.append(button);
});
