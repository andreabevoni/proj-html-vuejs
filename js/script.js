// utilizzo Vue per inserire i link nell'header e nel footer
var app = new Vue({
  el: "#root",
  data: {
    logo: "img/h5-logo-divided-header.png",
    headerLinks: ["ORDER ONLINE", "HOME", "PAGES", "MENU", "EVENT", "BLOG", "LANDING", "CART", "SEARCH"],
    jumboIndex: 0,
    jumboImages: ["img/h3-rev-img-2.png", "img/h3-rev-img-4.png", "img/h3-rev-img-6.png"],
    jumboBgs: ["firstbg", "secondbg", "thirdbg"],
    quoteIndex: 0,
    quotes: [
      {
        journal: 'WASHINGTON POST 2018',
        quote: '"FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES"'
      },
      {
        journal: 'THE GUARDIAN 2020',
        quote: '"HIGH PRICES AND HIGH QUALITY, THIS PLACE IS WHERE YOU WANT TO EAT IF YOU ARE NO PEASANT"'
      },
      {
        journal: 'CORRIERE DELLA SERA 2019',
        quote: '"PINEAPPLE PIZZA IS A SIN AGAINST HUMANITY, PLEASE NEVER EAT IN THIS PLACE IF YOU ARE ITALIAN"'
      }
    ],
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
  },
  methods: {
    // funzione immagine jumbotron precedente
    prevImage: function() {
      this.jumboIndex = this.jumboIndex === 0 ? this.jumboImages.length - 1 : this.jumboIndex - 1;
    },
    // funzione immagine jumbotron successiva
    nextImage: function() {
      this.jumboIndex = this.jumboIndex === this.jumboImages.length - 1 ? 0 : this.jumboIndex + 1;
    },
    // funzione citazione precedente
    prevQuote: function() {
      this.quoteIndex = this.quoteIndex === 0 ? this.quotes.length - 1 : this.quoteIndex - 1;
    },
    // funzione citazione successiva
    nextQuote: function() {
      this.quoteIndex = this.quoteIndex === this.quotes.length - 1 ? 0 : this.quoteIndex + 1;
    },
    // funzione salta citazione al pallino relativo
    selectQuote: function(i) {
      this.quoteIndex = i;
    }
  }
});
