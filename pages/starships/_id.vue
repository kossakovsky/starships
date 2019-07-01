<template lang="pug">
  v-layout(fill-height align-center justify-center)
    v-flex(lg6 md8 sm10 xs12)
      v-card
        v-card-title
          h2
            nuxt-link(to="/starships") Назад
          v-layout(column)
          // В данном конкретном случае так вполне можно сделать
          v-flex(xs12 v-for="(value, name) in starship" :key="name")
            h2 {{ name }} : {{ value }}
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator'
  import { namespace } from 'vuex-class'

  const starships = namespace('starships.store')

  @Component
  export default class IndexPage extends Vue {
    @starships.Getter starship

    async asyncData ({ store, route }) {
      await store.dispatch('starships.store/getStarship', route.params.id)
    }
  }
</script>
