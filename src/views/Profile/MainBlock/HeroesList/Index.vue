<template>
  <div>
    <h2 class="font-diablo mt-4">Heroes List</h2>
    <div class="heroes-list border-top border-secondary mt-2 pt-5">
      <b-table hover striped dark :items="heroes" :fields="fields" stacked="sm" small>
        <template v-slot:cell(name)="data">
          <HeroIco :hero="data.item" />
        </template>
        <template v-slot:cell(class)="data">
          <HeroClassLevel :hero="{ classSlug: data.item.classSlug, level: data.item.level}" />
        </template>
        <template v-slot:cell(kills)="data">
          <span>{{ data.item.kills.elites | formatNumber }}</span>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { formatNumber } from '@/filters/numeral'
import HeroIco from './HeroIco'
import HeroClassLevel from './HeroClassLevel'
export default {
  name: 'HeroesList',
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  filters: {
    formatNumber
  },
  components: { HeroIco, HeroClassLevel },
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true
        },
        {
          key: 'kills',
          label: 'Elite Kills',
          sortable: true
        }
      ]
    }
  }
}
</script>
