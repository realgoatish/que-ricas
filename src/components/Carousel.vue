<template lang="pug">
  transition-group(class="slider hidden-sm-and-down" name="fade" tag="div")
    div(
      class="images"
      v-for="number in [currentNumber]"
      :key="number"
    )
      v-parallax(
        class="images"
        style="height:400px;"
        :src="currentImage"
        v-on:mouseover="stopRotation"
        v-on:mouseout="startRotation"
      )
</template>

<script>
// import { setTimeout } from 'timers';
export default {
    name: 'Carousel',
    data () {
        return {
        carouselImages: [require('../v-loaded-arepas.jpg'), require('../v-dinner.jpg'), require('../v-emp.jpg'), require('../v-yoyos.jpg')],
        currentNumber: 0,
        timer: null
      }
    },

    mounted: function () {
        this.startRotation();
    },

    methods: {
        startRotation: function() {
            this.timer = setInterval(this.next, 3000);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next: function() {
          if (this.currentNumber === (this.carouselImages.length - 1)) {
            this.currentNumber = 0
        } else {
            this.currentNumber += 1            
        }
      },
    },
    
    computed: {
    	currentImage: function() {
      	return this.carouselImages[Math.abs(this.currentNumber) % this.carouselImages.length];
      }
    }
}


</script>

<style>

.slider, .images, .image-wrapper {
  width: 100%;
  height: 400px;
  display: block;
  border-radius: 0px 0px 15px 15px;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  visibility: hidden;
}

</style>
