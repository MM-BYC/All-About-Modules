/* 
Inside href, navigate to the the root by prefixing with a forward slash  sample: http://ww.example.com/blog/post
clicking on the link: 
<a href="/about"> 
will take you to 
http://ww.example.com/about
*/
const menuLinks = [
  { text: "home", href: "index.html" },
  { text: "about", href: "about.html" },
  { text: "catalog", href: "catalog.html" },
  { text: "orders", href: "orders.html" },
  { text: "account", href: "account.html" },
];

export { menuLinks };
