<template>

    
    <transition-group class='slider' name='fade' tag='div'>
      <div
        class="images"
        v-for="number in [currentNumber]"
        :key='number'
       >
         <img
             class="images"
             :src="currentImage"
             v-on:mouseover="stopRotation"
             v-on:mouseout="startRotation"
             />
      </div>
    </transition-group>
</template>

<script>
// import { setTimeout } from 'timers';
export default {
    name: 'Carousel',
    data () {
        return {
        images: [require('../spockspecs.jpg'), require('../cartoonspock.jpg'), require('../rockspock.jpg'), require('../concernedspock.jpg'), require('../dudespock.jpg')],
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
          if (this.currentNumber === (this.images.length - 1)) {
            this.currentNumber = 0
        } else {
            this.currentNumber += 1            
        }
      },
    },
    
    computed: {
    	currentImage: function() {
      	return this.images[Math.abs(this.currentNumber) % this.images.length];
      }
    }
}


</script>

<style>

.slider, .images {
  width: 1000px;
  height: 700px;
  display: block;
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
