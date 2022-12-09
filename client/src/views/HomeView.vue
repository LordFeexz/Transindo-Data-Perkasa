<script>
  import List from '@/components/list.vue'
  import {mapState,mapActions} from 'pinia'
  import {useDataStore} from '../stores/data'
  export default {
    components:{
      List
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
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <List v-for="(list, idx) in lists" :key="idx" :list="list" />
      </div>
    </div>
  </div>
</template>
