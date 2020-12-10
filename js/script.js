// utilizzo Vue per inserire i link nell'header e nel footer
var app = new Vue({
  el: "#root",
  data: {
    logo: "img/h5-logo-divided-header.png",
    headerLinks: ["ORDER ONLINE", "HOME", "PAGES", "MENU", "EVENT", "BLOG", "LANDING", "CART", "SEARCH"],
    restaurants: {
      name: 'FIND OUR RESTAURANTS',
      list: [
        {
          address: '1614 E. Bell Rd #104.',
          city: 'Salerno, AZ 85022',
          phone: '(602) 867-1010'
        },
        {
          address: '204 E. Pizzetta Tommaso',
          city: 'Sorrento, AZ 85022',
          phone: '(358) 867-1010'
        },
        {
          address: 'Viale Puglia 54',
          city: 'Torre Del Greco, AZ 85022',
          phone: '(359) 867-1010'
        },
        {
          address: 'Corso Italia AA',
          city: 'Naples, AZ 85022',
          phone: '(989) 867-1010'
        }
      ]
    },
    openingHours: {
      name: 'WORKING HOURS',
      list: [
        {
          day: 'MONDAY',
          opening: 'Kitchen Closed',
          color: 'red',
          asterisk: false
        },
        {
          day: 'TUESDAY UNTIL FRIDAY',
          opening: '9:00 - 22:00',
          color: 'white',
          asterisk: false
        },
        {
          day: 'SATURDAY',
          opening: 'Saturday 11am to midnight',
          color: 'white',
          asterisk: true
        },
        {
          day: 'SUNDAY',
          opening: '9:00 - 22:00',
          color: 'white',
          asterisk: false
        }
      ]
    },
    socials: {
      name: 'FOLLOW US:',
      list:  ["fab fa-twitter", "fab fa-facebook-f", "fab fa-instagram", "fab fa-linkedin-in"]
    },
    motto: "THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAED SLICE OF PIZZA.",
    credits: {
      firstPart: 'Created with &#10084; by',
      secondPart: 'Qode Interactive'
    }
  }
});
