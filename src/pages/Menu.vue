<template lang="pug">
  layout  
    .menu-content-container
      .title.mb-3

      main
        v-flex(xs12 md8 offset-md2)
          //- MenuStartersSection
          MenuSection(
            :sectionPrimaryTitle="$page.startersHeaders.menuSectionTitle"
            :sectionMenuItems="$page.startersContent.edges"
          )
          //- MenuEmpanadasSection
          MenuSection(
            :sectionPrimaryTitle="$page.empanadasHeaders.menuSectionTitle"
            :sectionPrimarySubtext="$page.empanadasHeaders.menuSectionPrimarySubtext"
            :sectionMenuItems="$page.empanadasContent.edges"
          )
          //- MenuArepaLabSection
          MenuSection(
            :sectionPrimaryTitle="$page.arepasHeaders.menuSectionTitle"
            :sectionPrimarySubtext="$page.arepasHeaders.menuSectionPrimarySubtext"
            :sectionSecondarySubtext="$page.arepasHeaders.menuSectionSecondarySubtext"
            :sectionMenuItems="$page.arepasContent.edges"
          )
          //- MenuPlattersSection
          MenuSection(
            id="platters-section"
            twoSteps=true
            :sectionPrimaryTitle="$page.plattersHeaders.menuSectionTitle"
            :sectionPrimarySubtext="$page.plattersHeaders.menuSectionPrimarySubtext"
            :stepOneTitle="$page.plattersHeaders.menuStepOneTitle"
            :stepTwoTitle="$page.plattersHeaders.menuStepTwoTitle"
            :stepOneItems="$page.plattersStepOneContent.edges"
            :stepTwoItems="$page.plattersStepTwoContent.edges"
          )
          //- MenuChurrosSection
          MenuSection(
            id="churros-section"
            twoSteps=true
            :sectionPrimaryTitle="$page.churrosHeaders.menuSectionTitle"
            :stepOneTitle="$page.churrosHeaders.menuStepOneTitle"
            :stepTwoTitle="$page.churrosHeaders.menuStepTwoTitle"
            :stepOneItems="$page.churrosStepOneContent.edges"
            :stepTwoItems="$page.churrosStepTwoContent.edges"
          )
          //- MenuSidesExtrasSection
          MenuSection(
            :sectionPrimaryTitle="$page.sidesExtrasHeaders.menuSectionTitle"
            :sectionMenuItems="$page.sidesExtrasContent.edges"
          )

    .title.mb-3
    

</template>

<page-query>

query {
  metadata {
    seoImages {
      homePageImage(
        quality: 90
      )
      menuPageImage(
        quality: 90
      )
    }
  }
  startersHeaders: menuContent (path: "/markdowns/menu/starters/headers") {
    menuSectionTitle
  }
  startersContent: allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/starters"
        }
      }
    }, sortBy: "number", skip: 1, order: ASC) {
    edges {
      node {
        itemName
        price
        description
      }
    }
  }
  empanadasHeaders: menuContent (path: "/markdowns/menu/empanadas/headers") {
    menuSectionTitle
    menuSectionPrimarySubtext
  }
  empanadasContent: allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/empanadas"
        }
      }
    }, sortBy: "number", skip: 1, order: ASC) {
    edges {
      node {
        itemName
        price
        description
      }
    }
  }
  arepasHeaders: menuContent (path: "/markdowns/menu/arepa-lab/headers") {
    menuSectionTitle
    menuSectionPrimarySubtext
    menuSectionSecondarySubtext
  }
  arepasContent: allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/arepa-lab"
        }
      }
    }, sortBy: "number", skip: 1, order: ASC) {
    edges {
      node {
        itemName
        price
        description
      }
    }
  }
  plattersHeaders: menuContent (path: "/markdowns/menu/platters/headers") {
    menuSectionTitle
    menuSectionPrimarySubtext
    menuStepOneTitle
    menuStepTwoTitle
  }
  plattersStepOneContent: allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/platters/proteins"
        }
      }
    }, sortBy: "number", order: ASC) {
    edges {
      node {
        itemName
        price
      }
    }
  }
  plattersStepTwoContent: allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/platters/styles"
        }
      }
    }, sortBy: "number", order: ASC) {
    edges {
      node {
        itemName
        description
        productImage(
          width: 120
          height: 120
          quality: 90
          fit: outside
        )
        productImageProtein
        productImageStyle
      }
    }
  }
  churrosHeaders: menuContent (path: "/markdowns/menu/churros/headers") {
    menuSectionTitle
    menuStepOneTitle
    menuStepTwoTitle
  }
  churrosStepOneContent: allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/churros/styles"
        }
      }
    }, sortBy: "number", order: ASC) {
    edges {
      node {
        itemName
        price
        description
      }
    }
  }
  churrosStepTwoContent: allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/churros/sauces"
        }
      }
    }, sortBy: "number", order: ASC) {
    edges {
      node {
        itemName
      }
    }
  }
  sidesExtrasHeaders: menuContent (path: "/markdowns/menu/sides-and-extras/headers") {
    menuSectionTitle
  }
  sidesExtrasContent: allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/sides-and-extras"
        }
      }
    }, sortBy: "number", skip: 1, order: ASC) {
    edges {
      node {
        itemName
        price
      }
    }
  }
}

</page-query>

<script>

import MenuSection from '~/components/menu/MenuSection.vue'

export default {
  metaInfo() {
    return {
      title: `Haddon Township's Only Venezuelan Street Food Menu`,
      link: [
        {
          rel: 'canonical', href: 'https://wwww.que-ricas.com/menu/'
        }
      ],
      meta: [
        { property: 'og:title', content: `Haddon Township's Only Venezuelan Street Food Menu` },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'Featuring Empanadas, Arepas, Pabellon Bowls, Churros, local specialties, gluten free and vegan options' },
        { property: 'og:url', content: 'https://www.que-ricas.com/menu/'},
        { property: 'og:image', content: `https://www.que-ricas.com${this.$page.metadata.seoImages.menuPageImage.src}` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'description', content: 'Featuring Empanadas, Arepas, Pabellon Bowls, Churros, local specialties, gluten free and vegan options'}
      ],
      script: [{
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://www.que-ricas.com/#website",
              "name": "Que Ricas - Venezuelan Street Food in Haddon Township, NJ",
              "url": "https://www.que-ricas.com/",
              "publisher": {
                "@type": "Restaurant", 
                "@id": "https://www.que-ricas.com/#westmont",
                "name": "Que Ricas", 
                "logo": "https://www.que-ricas.com/assets/static/qrNewLogo.e904f79.819f5522c7cd39ba76ef8cafecbbdede.png",
                "menu": "https://www.que-ricas.com/menu",
                "image": {
                  "@type": "ImageObject",
                  "@id": "https://www.que-ricas.com/#primaryimage",
                  "url": `https://www.que-ricas.com${this.$page.metadata.seoImages.homePageImage.src}`
              },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ],
                    "opens": "11:00",
                    "closes": "20:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday",
                    "opens": "11:00",
                    "closes": "18:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Monday",
                    "opens": "00:00",
                    "closes": "00:00"
                  }
                ], 
                "telephone": "(856)-858-8500",
                "url": "https://www.que-ricas.com",
                "sameAs": [
                  "mailto:info@que-ricas.com",
                  "https://www.instagram.com/quericas_haddon/",
                  "https://www.facebook.com/quericashaddon/",
                  "https://www.yelp.com/biz/que-ricas-haddon-township",
                  "https://www.happycow.net/reviews/que-ricas-haddon-township-191931"
                ],
                "hasMap": "https://goo.gl/maps/QCdVZf88xPeTprvL9",
                "email": "info@que-ricas.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "46 A Haddon Avenue",
                  "addressLocality": "Haddon Township",
                  "addressRegion": "NJ",
                  "postalCode": "08108",
                  "addressCountry": "US"
                  },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "39.911812",
                  "longitude": "-75.053812"
                },
                "servesCuisine": [ "Venezuelan", "South American" ], 
                "priceRange": "$",
                "paymentAccepted": "Cash, Credit Card",
                "currenciesAccepted": "USD",
                "acceptsReservations": "No",
                "description": "Authentic South American fare with a funky vibe.  Featuring Empanadas, Arepas, Pabellon Bowls, Churros, local specialties, lunch specials, gluten free and vegan options"
              }
            },
            {
              "@type": "Menu", 
              "image": `https://www.que-ricas.com${this.$page.metadata.seoImages.menuPageImage.src}`,
              "name": "Que Ricas Menu", 
              "mainEntityOfPage": "https://www.que-ricas.com/menu/",
              "inLanguage": "en-US",
              "isPartOf": {
                "@id": "https://www.que-ricas.com/menu/#webpage"
              },
              "offers": {
                "@type": "Offer",
                "availabilityStarts": "T11:00",
                "availabilityEnds": "T20:00"
              },
              "hasMenuSection": [
                {
                  "@type": "MenuSection",
                  "name": "Starters",
                  "hasMenuItem": [
                    {
                      "@type": "MenuItem",
                      "name": "Tajadas",
                      "description": "sweet plantains topped with crema and cotija cheese",
                      "offers": {
                        "@type": "Offer",
                        "price": "5",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Yuca Fries",
                      "description": "tender, cripsy, fried yuca wedges",
                      "offers": {
                        "@type": "Offer",
                        "price": "5",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Loaded Yuca Fries",
                      "description": "shredded beef or chicken, beans, cheese, pico, sabroso sauce, house-pickled jalapeño",
                      "offers": {
                        "@type": "Offer",
                        "price": "10",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Tequeños",
                      "description": "meet the mozzarella stick's suave cousin, made with queso blanco and hand-wrapped in artisan dough",
                      "offers": {
                        "@type": "Offer",
                        "price": "5",
                        "priceCurrency": "USD"
                      }
                    }
                  ]
                },
                {
                  "@type": "MenuSection",
                  "name": "Empanadas",
                  "hasMenuItem": [
                    {
                      "@type": "MenuItem",
                      "name": "Pollo",
                      "description": "all-natural shredded chicken",
                      "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                      "offers": {
                        "@type": "Offer",
                        "price": "3",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Carne",
                      "description": "all-natural shredded beef",
                      "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                      "offers": {
                        "@type": "Offer",
                        "price": "3.25",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Jawn",
                      "description": "cheesesteak, fried onions",
                      "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                      "offers": {
                        "@type": "Offer",
                        "price": "3.25",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Besitos",
                      "description": "guava and mozzarella cheese",
                      "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                      "offers": {
                        "@type": "Offer",
                        "price": "3",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Harvest",
                      "description": "black beans, sweet potato, kale, vegan",
                      "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                      "offers": {
                        "@type": "Offer",
                        "price": "3",
                        "priceCurrency": "USD"
                      }
                    }
                  ]
                },
                {
                  "@type": "MenuSection",
                  "name": "Arepa Lab",
                  "hasMenuItem": [
                    {
                      "@type": "MenuItem",
                      "name": "Rica",
                      "description": "shredded beef, sweet plantain, black beans and cotija cheese",
                      "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                      "offers": {
                        "@type": "Offer",
                        "price": "9.50",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Sombrero",
                      "description": "milanesa (fried steak), fried queso blanco, sweet pepper cabbage slaw, rosa sauce",
                      "offers": {
                        "@type": "Offer",
                        "price": "9.50",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Shaggy",
                      "description": "shredded chicken, sweet plantain, fried queso blanco, pico de gallo, cilantro mojo",
                      "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                      "offers": {
                        "@type": "Offer",
                        "price": "9.50",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Curvy Queen",
                      "description": "Venezuela's favorite - shredded chicken & avocado salad, sweet plantains, smoked gouda",
                      "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                      "offers": {
                        "@type": "Offer",
                        "price": "9.50",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Cartel",
                      "description": "chorizo, carmelized peppers, onions, smoked gouda",
                      "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                      "offers": {
                        "@type": "Offer",
                        "price": "9.50",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Jersey",
                      "description": "pork roll, fried cage-free egg, melted cotija cheese",
                      "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                      "offers": {
                        "@type": "Offer",
                        "price": "8",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Elsita",
                      "description": "scrambled eggs with tomato and onion topped with cotija cheese",
                      "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                      "offers": {
                        "@type": "Offer",
                        "price": "8",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Black Betty",
                      "description": "home-made black bean burger with sweet plantains, guasacaca, vegan",
                      "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                      "offers": {
                        "@type": "Offer",
                        "price": "8.50",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Dario",
                      "description": "falafel, hummus, sweet pepper cabbage slaw, pico de gallo, vegan",
                      "suitableForDiet": "https://schema.org/GlutenFreeDiet",
                      "offers": {
                        "@type": "Offer",
                        "price": "8.50",
                        "priceCurrency": "USD"
                      }
                    }
                  ]
                },
                {
                  "@type": "MenuSection",
                  "name": "Platters",
                  "hasMenuItem": [
                    {
                      "@type": "MenuItem",
                      "name": "Shredded Beef",
                      "offers": {
                        "@type": "AggregateOffer",
                        "price": "13.50",
                        "priceCurrency": "USD",
                        "offers": [
                          {
                            "@type": "Offer",
                            "name": "Shredded Beef Caracas Platter",
                            "description": "shredded beef, black beans, Venezuelan white rice, sweet plantains, cotija cheese, cilantro mojo"
                          },
                          {
                            "@type": "Offer",
                            "name": "Shredded Beef Flower Power Platter",
                            "description": "shredded beef, seasoned cauliflower rice, peppers and onions, guacamole, pico, low carb"
                          },
                          {
                            "@type": "Offer",  
                            "name": "Shredded Beef Hangover Platter",
                            "description": "shredded beef, yuca hash browns, fried egg, cilantro mojo",
                            "image": `https://www.que-ricas.com${this.$page.metadata.seoImages.menuPageImage.src}`
                          },
                          {
                            "@type": "Offer",
                            "name": "Shredded Beef Cozy Platter",
                            "description": "shredded beef, rica fried rice with tomato, peppers and onions with sweet plantains on the side"
                          }
                        ]
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Shredded Chicken",
                      "offers": {
                        "@type": "AggregateOffer",
                        "price": "12.50",
                        "priceCurrency": "USD",
                        "offers": [
                          {
                            "@type": "Offer",
                            "name": "Shredded Chicken Caracas Platter",
                            "description": "shredded chicken, black beans, Venezuelan white rice, sweet plantains, cotija cheese, cilantro mojo"
                          },
                          {
                            "@type": "Offer",
                            "name": "Shredded Chicken Flower Power Platter",
                            "description": "shredded chicken, seasoned cauliflower rice, peppers and onions, guacamole, pico, low carb"
                          },
                          {
                            "@type": "Offer",  
                            "name": "Shredded Chicken Hangover Platter",
                            "description": "shredded chicken, yuca hash browns, fried egg, cilantro mojo"
                          },
                          {
                            "@type": "Offer",
                            "name": "Shredded Chicken Cozy Platter",
                            "description": "shredded chicken, rica fried rice with tomato, peppers and onions with sweet plantains on the side"
                          }
                        ]
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Milanesa (fried steak)",
                      "offers": {
                        "@type": "AggregateOffer",
                        "price": "13.50",
                        "priceCurrency": "USD",
                        "offers": [
                          {
                            "@type": "Offer",
                            "name": "Milanesa Caracas Platter",
                            "description": "milanesa, black beans, Venezuelan white rice, sweet plantains, cotija cheese, cilantro mojo"
                          },
                          {
                            "@type": "Offer",
                            "name": "Milanesa Flower Power Platter",
                            "description": "milanesa, seasoned cauliflower rice, peppers and onions, guacamole, pico, low carb"
                          },
                          {
                            "@type": "Offer",  
                            "name": "Milanesa Hangover Platter",
                            "description": "milanesa, yuca hash browns, fried egg, cilantro mojo"
                          },
                          {
                            "@type": "Offer",
                            "name": "Milanesa Cozy Platter",
                            "description": "milanesa, rica fried rice with tomato, peppers and onions with sweet plantains on the side"
                          }
                        ]
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Chorizo",
                      "offers": {
                        "@type": "AggregateOffer",
                        "price": "12.50",
                        "priceCurrency": "USD",
                        "offers": [
                          {
                            "@type": "Offer",
                            "name": "Chorizo Caracas Platter",
                            "description": "chorizo, black beans, Venezuelan white rice, sweet plantains, cotija cheese, cilantro mojo"
                          },
                          {
                            "@type": "Offer",
                            "name": "Chorizo Flower Power Platter",
                            "description": "chorizo, seasoned cauliflower rice, peppers and onions, guacamole, pico, low carb"
                          },
                          {
                            "@type": "Offer",  
                            "name": "Chorizo Hangover Platter",
                            "description": "chorizo, yuca hash browns, fried egg, cilantro mojo"
                          },
                          {
                            "@type": "Offer",
                            "name": "Chorizo Cozy Platter",
                            "description": "chorizo, rica fried rice with tomato, peppers and onions with sweet plantains on the side"
                          }
                        ]
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Black Bean Burger",
                      "offers": {
                        "@type": "AggregateOffer",
                        "price": "12.50",
                        "priceCurrency": "USD",
                        "offers": [
                          {
                            "@type": "Offer",
                            "name": "Black Bean Burger Caracas Platter",
                            "description": "black bean burger, black beans, Venezuelan white rice, sweet plantains, cotija cheese, cilantro mojo"
                          },
                          {
                            "@type": "Offer",
                            "name": "Black Bean Burger Flower Power Platter",
                            "description": "black bean burger, seasoned cauliflower rice, peppers and onions, guacamole, pico, low carb"
                          },
                          {
                            "@type": "Offer",  
                            "name": "Black Bean Burger Hangover Platter",
                            "description": "black bean burger, yuca hash browns, fried egg, cilantro mojo"
                          },
                          {
                            "@type": "Offer",
                            "name": "Black Bean Burger Cozy Platter",
                            "description": "black bean burger, rica fried rice with tomato, peppers and onions with sweet plantains on the side"
                          }
                        ]
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Huevos (eggs)",
                      "offers": {
                        "@type": "AggregateOffer",
                        "price": "12.50",
                        "priceCurrency": "USD",
                        "offers": [
                          {
                            "@type": "Offer",
                            "name": "Huevos Caracas Platter",
                            "description": "huevos, black beans, Venezuelan white rice, sweet plantains, cotija cheese, cilantro mojo"
                          },
                          {
                            "@type": "Offer",
                            "name": "Huevos Flower Power Platter",
                            "description": "huevos, seasoned cauliflower rice, peppers and onions, guacamole, pico, low carb"
                          },
                          {
                            "@type": "Offer",  
                            "name": "Huevos Hangover Platter",
                            "description": "huevos, yuca hash browns, fried egg, cilantro mojo"
                          },
                          {
                            "@type": "Offer",
                            "name": "Huevos Cozy Platter",
                            "description": "huevos, rica fried rice with tomato, peppers and onions with sweet plantains on the side"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "@type": "MenuSection",
                  "name": "Churros",
                  "hasMenuItem": [
                    {
                      "@type": "MenuItem",
                      "name": "Heritage",
                      "description": "raw sugar, cinnamon",
                      "offers": {
                        "@type": "AggregateOffer",
                        "price": "5",
                        "priceCurrency": "USD",
                        "offers": [
                          {
                            "@type": "Offer",
                            "name": "Heritage with Chocolate Dipping Sauce"
                          },
                          {
                            "@type": "Offer",
                            "name": "Heritage with Vegan Glaze Dipping Sauce"
                          }
                        ]
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Birds of Paradise",
                      "description": "raw sugar, fruity cereal",
                      "offers": [
                        {
                          "@type": "Offer",
                          "name": "Birds of Paradise with Chocolate Dipping Sauce"
                        },
                        {
                          "@type": "Offer",
                          "name": "Birds of Paradise with Vegan Glaze Dipping Sauce"
                        }
                      ]
                    }
                  ]
                },
                {
                  "@type": "MenuSection",
                  "name": "Sides and Extras",
                  "hasMenuItem": [
                    {
                      "@type": "MenuItem",
                      "name": "Venezuelan White Rice",
                      "offers": {
                        "@type": "Offer",
                        "price": "3",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Rica White Rice",
                      "offers": {
                        "@type": "Offer",
                        "price": "3.50",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Black Beans",
                      "offers": {
                        "@type": "Offer",
                        "price": "3",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Add Guasacaca",
                      "offers": {
                        "@type": "Offer",
                        "price": "2",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Add Cheese",
                      "offers": {
                        "@type": "AggregateOffer",
                        "price": "1",
                        "priceCurrency": "USD",
                        "offers": [
                          {
                            "@type": "Offer",
                            "name": "Mozzarella"
                          },
                          {
                            "@type": "Offer",
                            "name": "Cotija"
                          },
                          {
                            "@type": "Offer",
                            "name": "Smoked Gouda"
                          }
                        ]
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Extra Protein",
                      "offers": {
                        "@type": "AggregateOffer",
                        "price": "3",
                        "priceCurrency": "USD",
                        "offers": [
                          {
                            "@type": "Offer",
                            "name": "Extra Beef"
                          },
                          {
                            "@type": "Offer",
                            "name": "Extra Chicken"
                          },
                          {
                            "@type": "Offer",
                            "name": "Extra Milanesa"
                          },
                          {
                            "@type": "Offer",
                            "name": "Extra Chorizo"
                          },
                          {
                            "@type": "Offer",
                            "name": "Extra Black Bean Burger"
                          },
                          {
                            "@type": "Offer",
                            "name": "Extra Huevos"
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "@type": "ImageObject",
              "@id": "https://www.que-ricas.com/menu/#primaryimage",
              "url": `https://www.que-ricas.com${this.$page.metadata.seoImages.menuPageImage.src}`
            },
            {
              "@type": "WebPage",
              "@id": "https://www.que-ricas.com/menu/#webpage",
              "url": "https://www.que-ricas.com/menu/",
              "inLanguage": "en-US",
              "name": "Que Ricas - Menu",
              "isPartOf": {
                "@id": "https://www.que-ricas.com/#website"
              },
              "primaryImageOfPage": {
                "@id": "https://www.que-ricas.com/menu/#primaryimage"
              },
              "description": "Haddon Township Venezuelan Street Food Menu.  Whether you are in Collingswood, Audubon, Cherry Hill, Haddonfield or Pennsauken, Que Ricas has South American street food you will love"
            }
          ]
        }
      }]
    }
  },
  components: {
    MenuSection
  }
}
</script>

<style>

.menu-section-header {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5em;
  display: inline-block;
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.sub-header-text {
  font-style: italic;
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  padding-top: 1em;
  padding-bottom: 1em;
}

.menu-item-text-content-styles {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  border-bottom: 1px solid;
  border-color: #eae7db;
  margin: 10px 0px 0px 0px;
  text-align: left;
  line-height: 1.75;
}

article>div.menu-section-header {
  font-size: 18px;
  padding-left: 18px;
  padding-right: 18px;
}

.menu-item-text-content-styles:last-child {
  border-bottom: none;
}

article {
  width: 100%;
}

/* 1.7.2020 - Override default Vuetify paddings for .v-card__title and .v-card__title--primary.  So far Story and Menu pages have slightly different custom paddings to set up their content layouts */

div.menu-content-container > main > div > div > div.v-card__title.v-card__title--primary {
  padding: 24px 18px 20px 18px;
}

/* 1.7.2020 - Keep in mind, on this page only, you're currently not doing a Media Query to change font-size to 14px on small screens.  See how you feel about it and change if needed */

/* #platters-step-two-grid */
#platters-section article:nth-of-type(3) > div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  grid-template-rows: auto;
  grid-template-areas: 
    ". . . image"
    "header header . image"
    "text text text image"
    ". . . image";
}

#platters-section article:nth-of-type(3) > div h3 {
  width: fit-content;
  grid-area: header;
}

#platters-section article:nth-of-type(3) > div p {
  width: fit-content;
  grid-area: text;
}

#platters-section article:nth-of-type(3) > div figure {
  margin: 0px 0px 5px 5px;
  grid-area: image;
}

#platters-section article:nth-of-type(3) > div figure a img {
  border-radius: 10px;
}

#platters-section article:nth-of-type(3) > div figcaption {
  font-size: 12px;
  line-height: 1.4;
}

#churros-section article:nth-of-type(2) > div {
  text-align: center;
}

#churros-section article:nth-of-type(2) > div:first-child {
  border-bottom: none;
}

#churros-section article:nth-of-type(2) > div:last-child {
  padding-bottom: 2em;
}



</style>
