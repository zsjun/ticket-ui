export const nfn = () => {};

export const getJson = (obj) => {
  try {
    return JSON.parse(obj);
  } catch (e) {
    return {};
  }
};

export const stringfy = (obj) => {
  try {
    return JSON.stringfy(obj);
  } catch (e) {
    return "";
  }
};

export function textSize(text, fontSize = "14px", fontFamily = "Arial") {
  var span = document.createElement("span");
  var result = {};
  result.width = span.offsetWidth;
  result.height = span.offsetHeight;
  span.style.visibility = "hidden";
  span.style.fontSize = fontSize;
  span.style.fontFamily = fontFamily;
  span.style.display = "inline-block";
  document.body.appendChild(span);
  if (typeof span.textContent != "undefined") {
    span.textContent = text;
  } else {
    span.innerText = text;
  }
  result.width = parseFloat(window.getComputedStyle(span).width) - result.width;
  result.height =
    parseFloat(window.getComputedStyle(span).height) - result.height;
  return result;
}
