<script>
    import {mapActions,mapWritableState} from 'pinia'
    import {useDataStore} from '../stores/data'
    export default {
        methods:{
            ...mapActions(useDataStore,['fetchList'])
        },
        computed:{
            ...mapWritableState(useDataStore,['lists'])
        }
    }
</script>

<template>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
</template>