<template lang="pug">

    div(class="text-md-center hidden-sm-and-down")
      v-btn(outline large color="orange" aria-label="Home Page Icon" :to="{ path: '/' }") Home
      v-btn(outline large color="orange" aria-label="Menu Page Icon" :to="{ path: '/menu' }") Menu
      v-btn(outline large color="orange" aria-label="Our Story Page Icon" :to="{ path: '/story' }") Our Story

</template>

<script>

export default {
    name: 'HeaderRegularMenu'
}

</script>