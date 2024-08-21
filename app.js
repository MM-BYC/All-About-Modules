import { createElementTag } from "./elementStruc.js";
import { applyElementStyle } from "./elementStyle.js";
import { applyImageStyle } from "./elementStyle.js";
import { applyTitleStyle } from "./elementStyle.js";
import { setFontGreyQo } from "./font.js";
import { menuLinks } from "./elementnav.js";
import { colorScheme } from "./theme.js";

function phone() {
  console.log("Console log: Phone function from self app.js!");
}

/* runs first*/
// document.querySelector(".staticClass").innerHTML =
//   "module name: app.js I am a staticClass";

/* runs second - create <div>*/
createElementTag(
  "div",
  ".dynamicClass",
  `rtt31 - assignment: All About Modules`,
  "body"
);
applyElementStyle(`.dynamicClass`, `lightGray`);

createElementTag(
  "div",
  ".dynamicDiv",
  `date: Aug 21, 2024 author: Michael Marquez`,
  "body"
);
applyElementStyle(`.dynamicDiv`, `lightGray`);

createElementTag("div", ".dynamicT", `SPACE TOURISM`, "body");
applyTitleStyle(`.dynamicT`);

/* runs third - create <header> */
createElementTag("header", ".dynamicHdrClass", ``, "body");
/*apply Style */
applyElementStyle(`.dynamicHdrClass`, `blue`);
createElementTag("nav", ".top-menu", ``, "header");

/* runs fourth - create <main> */
createElementTag("main", ".dynamicMainClass", ``, "body");

const mainEl = document.querySelector("main");
mainEl.style.color = colorScheme.mainBg;

const topMenuEl = document.querySelector(`.top-menu`);
topMenuEl.setAttribute(`height`, `100%`);
topMenuEl.classList.add(`flex-around`);
topMenuEl.style.backgroundColor = colorScheme.subMenuBg;

menuLinks.forEach((link) => {
  const anchor = document.createElement("a");
  // Set the href attribute
  anchor.href = link.href;
  console.log(`anchor is ${anchor}`);

  // Set the text content
  anchor.textContent = link.text;

  topMenuEl.appendChild(anchor);
});

/* create img tag */
createElementTag("img", ".dynamicImage", ``, "body");
/* set font */
setFontGreyQo();
/*apply Style */
applyImageStyle(`.dynamicImage`);
