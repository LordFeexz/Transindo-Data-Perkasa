<script>
  import List from '@/components/list.vue'
  import Filter from '@/components/filter.vue'
  import {mapState,mapActions} from 'pinia'
  import {useDataStore} from '../stores/data'
  export default {
    components:{
      List,
      Filter
    },
    computed:{
      ...mapState(useDataStore,['lists'])
    },
    methods:{
      ...mapActions(useDataStore,['fetchList'])
    },
    created(){
      this.fetchList()
    }
  }
</script>

<template>
  <Filter />
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-lg-12">
        <List v-for="(list, idx) in lists" :key="idx" :list="list" />
      </div>
    </div>
  </div>
</template>
