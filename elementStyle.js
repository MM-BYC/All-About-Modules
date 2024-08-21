// import { createElementTag } from "./elementStruc.js";
import { setFontGreyQo } from "./font.js";

/* let us define the attributes */
export const applyElementStyle = (tagLocator, borderColor) => {
  console.log(`locator ${tagLocator}`);
  const targetTag = document.body.querySelector(`${tagLocator}`);
  targetTag.style.backgroundColor = "lightGray";
  targetTag.style.border = `5px solid ${borderColor}`; // Add this line to set the border style
  targetTag.style.fontSize = "1.5em";
  targetTag.style.textAlign = "center";
};

export const applyTitleStyle = (tagLocator) => {
  const titleLocator = document.querySelector(tagLocator);
  titleLocator.style.fontSize = "2.5em";
  titleLocator.style.fontWeight = "bold";
  titleLocator.style.fontFamily = "Chakra Petch";
  titleLocator.style.textAlign = "center";
};

export const applyImageStyle = (tagLocator) => {
  const img = document.querySelector(tagLocator);
  img.setAttribute("width", "100%");

  img.setAttribute(
    `src`,
    `https://cdn.britannica.com/06/72006-050-5EF22ECB/Michael-Lopez-Alegria-space-module-station-assembly-International-October-2000.jpg`
  );
};
