<template lang="pug">
  v-layout(fill-height)
    v-flex(xs12)
      v-card
        v-card-title
          h2 Starships
          v-spacer
          v-text-field(v-model.trim="search" append-icon="search" label="Search" single-line hide-details)
        v-card-text
          v-data-table(:headers="headers" :items="starships" :search="search" hide-actions)
            template(#items="props")
              nuxt-link(tag="tr" :to="getShipLink(props.item.url)")
                td {{ props.item.name }}
                td {{ props.item.length }}
                td {{ props.item.passengers }}
                td {{ props.item.crew }}
                td {{ props.item.consumables }}
                td {{ props.item.model }}
            template(#no-results)
              v-alert(:value="true" color="error" icon="warning") Your search for "{{ search }}" found no results.
        v-card-actions
          v-layout(justify-end)
            v-btn(:disabled="!pagination.hasPreviousPage" @click="getPreviousPage") prev
            v-btn(:disabled="!pagination.hasNextPage" @click="getNextPage") next
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator'
  import { namespace } from 'vuex-class'

  const shipsStore = namespace('starships.store')

  @Component
  export default class IndexPage extends Vue {
    search = ''

    headers = [
      { text: 'Name', value: 'name' },
      { text: 'Length', value: 'length' },
      { text: 'Passengers', value: 'passengers' },
      { text: 'Crew', value: 'crew' },
      { text: 'Consumables', value: 'consumables' },
      { text: 'Model', value: 'model' }
    ]

    @shipsStore.Getter starships
    @shipsStore.Getter pagination
    @shipsStore.Action getStarships

    async asyncData ({ store }) {
      await store.dispatch('starships.store/getStarships', store.state['starships.store'].pagination.page)
    }

    beforeMount () {
      if (this.$route.query.search && typeof this.$route.query.search === 'string') {
        this.search = this.$route.query.search
      }
    }

    getPreviousPage () {
      this.getStarships(this.pagination.page - 1)
    }

    getNextPage () {
      this.getStarships(this.pagination.page + 1)
    }

    getShipLink (url) {
      return url.replace(process.env.API_URL, '/')
    }
  }
</script>
