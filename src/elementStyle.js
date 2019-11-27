export const addCSSStyleOnElement = (element, declaration) => {
  var sheet = document.createElement("style");
  sheet.innerHTML = element + declaration;
  document.head.appendChild(sheet);
}
