<template lang="pug">

  g-image(alt="Que Ricas Logo" class="header-logo" :src="logo" :width="width")

</template>

<script>

export default {
    name: 'HeaderLogo',
    data () {
        return {
            width: "200px",
            logo: require("../../static/uploads/que-ricas-logo.png")
        }
    }
}

</script>
