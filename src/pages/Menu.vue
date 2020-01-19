<template lang="pug">
  layout  
    .menu-content-container
      .title.mb-3

      main
        v-flex(xs12 md8 offset-md2)
          MenuStartersSection
          MenuEmpanadasSection
          MenuArepaLabSection
          MenuPlattersSection
          MenuChurrosSection
          MenuSidesExtrasSection

    .title.mb-3
    

</template>

<page-query>

query {
  metadata {
    seoImages {
      menuPageImage
    }
  }
}

</page-query>

<script>

import MenuStartersSection from '~/components/menu/MenuStartersSection.vue';
import MenuEmpanadasSection from '~/components/menu/MenuEmpanadasSection.vue';
import MenuArepaLabSection from '~/components/menu/MenuArepaLabSection.vue';
import MenuSidesExtrasSection from '~/components/menu/MenuSidesExtrasSection.vue';
import MenuPlattersSection from '~/components/menu/MenuPlattersSection.vue';
import MenuChurrosSection from '~/components/menu/MenuChurrosSection.vue';


export default {
  metaInfo() {
    return {
      title: 'Menu',
      link: [
        {
          rel: 'canonical', href: 'https://wwww.que-ricas.com/menu/'
        }
      ],
      meta: [
        { property: 'og:title', content: 'Haddon Township Venezuelan Street Food Menu' },
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: 'Whether you are in Collingswood, Audubon, Cherry Hill, Haddonfield or Pennsauken, Que Ricas has South American street food you will love' },
        { property: 'og:url', content: 'https://www.que-ricas.com/menu/'},
        { property: 'og:image', content: `https://www.que-ricas.com${this.$page.metadata.seoImages.menuPageImage.src}` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'description', content: 'Haddon Township Venezuelan Street Food Menu.  Whether you are in Collingswood, Audubon, Cherry Hill, Haddonfield or Pennsauken, Que Ricas has South American street food you will love'}
      ],
      script: [{
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org", 
          "@type": "Menu", 
          "image": `https://www.que-ricas.com${this.$page.metadata.seoImages.menuPageImage.src}`,
          "name": "Que Ricas Menu", 
          "mainEntityOfPage": "https://www.que-ricas.com/menu/",
          "inLanguage": "English",
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
                  "suitableForDiet": "http://schema.org/GlutenFreeDiet",
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
                  "suitableForDiet": "http://schema.org/GlutenFreeDiet",
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
                  "suitableForDiet": "http://schema.org/GlutenFreeDiet",
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
                  "suitableForDiet": "http://schema.org/GlutenFreeDiet",
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
                  "suitableForDiet": "http://schema.org/GlutenFreeDiet",
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
                },
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
                        "name": "Heritage with Chocolate Dipping Sauce",
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
                      "name": "Heritage with Chocolate Dipping Sauce",
                    },
                    {
                      "@type": "Offer",
                      "name": "Heritage with Vegan Glaze Dipping Sauce"
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
                        "name": "Mozzarella",
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
        }
      }]
    }
  },
  components: {
    MenuStartersSection,
    MenuEmpanadasSection,
    MenuArepaLabSection,
    MenuSidesExtrasSection,
    MenuPlattersSection,
    MenuChurrosSection
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

</style>
