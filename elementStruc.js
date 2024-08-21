/* 
Date: Aug 20, 2024
Author: Michael Marquez
Make JS reusable:

Use JS import exports to create a reusable element structure

Reused Modules: 
elementStruc.js, elementStyle.js

Create Element Tag
  Parameters: (tag, tagAttr, msg, attachedToTag)
       where: tag is the tag name
              tagAttr is the tag attribute e.g. #id, .class
                      include the # or . if the attribute is id or class
  Returns: None
  Purpose: creates an element tag and appends it to the body

*/

const createElementTag = (tag, tagAttr, msg, attachedTag) => {
  /* create a tag */
  const bodyTag = document.querySelector(`${attachedTag}`);
  const header = document.createElement(`${tag}`);
  if (tagAttr.includes("#")) {
    header.setAttribute("id", `${tagAttr}`);
  }
  if (tagAttr.includes(".")) {
    header.setAttribute("class", `${tagAttr}`.substring(1));
    console.log(tagAttr.substring(1));
  }
  bodyTag.appendChild(header);
  header.textContent = `${msg}`;
};

export { createElementTag };
