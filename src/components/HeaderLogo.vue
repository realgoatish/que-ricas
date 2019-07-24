<template lang="pug">

  g-image(alt="Que Ricas Logo" class="header-logo" :src="logo" :width="width")

</template>

<script>

export default {
    name: 'HeaderLogo',
    data () {
        return {
            width: "200px",
            logo: "https://res.cloudinary.com/caribou-images/image/upload/q_auto, f_auto/que-ricas-logo_zzg9p4.png"
        }
    }
}

</script>
