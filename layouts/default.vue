<template lang="pug">
  v-app
    v-content
      v-container.elevation-2.white(fluid fill-height)
        nuxt
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator'

  @Component
  export default class DefaultLayout extends Vue {
  }
</script>
