/* This JavaScript code is creating a new `<link>` element, setting its `rel` attribute to "stylesheet"
and its `href` attribute to a Google Fonts URL for the "Grey Qo" font. Finally, it appends this
newly created `<link>` element to the `<head>` section of the HTML document. This is a common way to
dynamically load external stylesheets into a web page. */
export const setFontGreyQo = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap";
  /* append to head */
  document.head.appendChild(link);
};
