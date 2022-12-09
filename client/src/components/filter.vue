<script>
    import Button from './button.vue'
    import {mapActions,mapWritableState} from 'pinia'
    import {useDataStore} from '../stores/data'
    export default {
        methods:{
            ...mapActions(useDataStore,['fetchList','removeParams']),
            remove(){
                this.removeParams()
                this.fetchList()
            }
        },
        computed:{
            ...mapWritableState(useDataStore,['lists','indicators'])
        },
        components:{
            Button
        },
    }
</script>

<template>
    <div class="container" v-if="indicators.length > 0">
        <div class="row">
            <div class="col-md-3" v-for="(indicator,idx) in indicators" :key="idx">{{indicator}}</div>
            <Button @click.prevent="remove" :name="'reset'" :variant="'btn btn-danger'" :type="'click'"></Button>
        </div>
    </div>
</template>