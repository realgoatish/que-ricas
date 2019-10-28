<template lang="pug">

    v-menu(class="hidden-md-and-up")
      v-toolbar-side-icon(
        slot="activator"
        aria-label="Hamburger Menu"
      )
        v-icon(
        x-large
        color="black"
        ) reorder
      v-list
        v-list-tile(:to="{ path: '/' }")
          v-list-tile-content
            v-list-tile-title Home
        v-list-tile(:to="{ path: '/menu' }")
          v-list-tile-content
            v-list-tile-title Menu
        v-list-tile(:to="{ path: '/story' }")
          v-list-tile-content
            v-list-tile-title Our Story

</template>

<script>

export default {
    name: 'HeaderHamburger'
}

</script>
