// utilizzo Vue per inserire i link nell'header e nel footer
var app = new Vue({
  el: "#root",
  data: {
    logo: "img/h5-logo-divided-header.png",
    headerLinks: ["ORDER ONLINE", "HOME", "PAGES", "MENU", "EVENT", "BLOG", "LANDING", "CART", "SEARCH"],
  }
});
