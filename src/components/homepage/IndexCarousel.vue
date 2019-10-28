<template lang="pug">
  transition-group(class="slider" name="fade" tag="div")
    div(
      class="images"
      v-for="number in [currentNumber]"
      :key="number"
    )
      v-parallax(
        class="images"
        style="height:560px;"
        :src="currentImage"
        alt="Large slider images of Venezuelan food"
        v-on:mouseover="stopRotation"
        v-on:mouseout="startRotation"
      )
</template>

<script>

export default {
    name: 'IndexCarousel',
    data () {
        return {
        carouselImages: ['https://res.cloudinary.com/caribou-images/image/upload/q_auto,f_auto/empanada-basket.jpg', 'https://res.cloudinary.com/caribou-images/image/upload/q_auto,f_auto/rice-beans-beef-plantains.jpg', 'https://res.cloudinary.com/caribou-images/image/upload/q_auto,f_auto/loaded-arepas.jpg'],
        currentNumber: 0,
        timer: null
      }
    },

    async created() {
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
  height: 560px;
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
