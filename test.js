const aArr = document.querySelectorAll("a");
for (let i = 0; i < aArr.length; i++) {
  console.log(aArr.length, aArr[i].getAttribute("href"));
  const href = decodeURIComponent(aArr[i].getAttribute("href"));
  const index = href.indexOf("target");
  let newHref = href;
  if (index > -1) {
    newHref = href.substring(index + 7);
    console.log(newHref);
  }
  aArr[i].setAttribute("href", newHref);
}
