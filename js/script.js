// utilizzo Vue per inserire i link nell'header e nel footer
var app = new Vue({
  el: "#root",
  data: {
    // indirizzo del logo stampato in header ed in footer
    logo: "img/h5-logo-divided-header.png",
    // lista di data da stampare nell'header
    headerLinks: [
      {
        name: "ORDER ONLINE",
        link: "#",
        symbol: ''
      },
      {
        name: "HOME",
        link: "#",
        symbol: 'svg/svg-0.svg'
      },
      {
        name: "PAGES",
        link: "#",
        symbol: ''
      },
      {
        name: "MENU",
        link: "#",
        symbol: ''
      },
      {
        name: "EVENT",
        link: "#",
        symbol: ''
      },
      {
        name: "BLOG",
        link: "#",
        symbol: ''
      },
      {
        name: "LANDING",
        link: "#",
        symbol: ''
      },
      {
        name: "CART",
        link: "#",
        symbol: 'svg/svg-1.svg'
      },
      {
        name: "SEARCH",
        link: "#",
        symbol: 'fas fa-search symbol'
      }
    ],
    cart: 0,
    // data per il funzionamento del carousel nel jumbotron
    jumboIndex: 0,
    jumboImages: ["img/h3-rev-img-2.png", "img/h3-rev-img-4.png", "img/h3-rev-img-6.png"],
    jumboBgs: ["firstbg", "secondbg", "thirdbg"],
    // data per il funzionamento del carousel nella sezione quote
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
    // lista di data da stampare nel footer
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
          color: 'grey',
          asterisk: false
        },
        {
          day: 'SATURDAY',
          opening: 'Saturday 11am to midnight',
          color: 'grey',
          asterisk: true
        },
        {
          day: 'SUNDAY',
          opening: '9:00 - 22:00',
          color: 'grey',
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
