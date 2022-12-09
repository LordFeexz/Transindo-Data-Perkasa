<script>
    import Role from './role.vue'
    import Level from './level.vue'
    import Languages from './languages.vue'
    import Tools from './tools.vue'
    import { useDataStore } from '../stores/data'
    import { mapActions, mapWritableState } from 'pinia'
    export default {
        props:['list'],
        components:{
            Role,
            Level,
            Languages,
            Tools
        },
        computed:{
            ...mapWritableState(useDataStore,['params'])
        },
        methods:{
            ...mapActions(useDataStore,['fetchList','changeLanguages','changeLevel','changeRole','changeTools','addIndicator'])
        }
    }
</script>

<template>
    <div class="card w-100 wcard bodyy">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <img :src="list.logo" class="img-fluid card-img image rounded-circle"/>
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md">
                                                <h4 class="card-title">{{list.company}}</h4>
                                            </div>
                                            <div class="col-md" v-if="list.new">
                                                <h6 class="card-title"> NEW </h6>
                                            </div>
                                            <div class="col-md" v-if="list.featured">
                                                <h6 class="card-title"> Featured </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="card-text">{{list.position}}</h6>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <p>{{ list.postedAt }}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <p>{{list.contract}}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <p>{{list.location}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 desc">
                                    <div v-if="list.role">
                                        <Role 
                                        :role="list.role" 
                                        @changeRole="changeRole"
                                        @fetchList="fetchList" 
                                        @addIndicator="addIndicator"/>
                                    </div>
                                    <div v-if="list.level">
                                        <Level 
                                        :level="list.level" 
                                        @changeLevel="changeLevel" 
                                        @fetchList="fetchList" 
                                        @addIndicator="addIndicator"/>
                                    </div>
                                    <div v-if="list.languages.length > 0">
                                        <Languages 
                                        :languages="list.languages"
                                        @changeLanguages="changeLanguages" 
                                        @fetchList="fetchList"
                                        @addIndicator="addIndicator"/>
                                    </div>
                                    <div v-if="list.tools.length > 0">
                                        <Tools 
                                        :tools="list.tools" 
                                        @changeTools="changeTools" 
                                        @fetchList="fetchList" 
                                        @addIndicator="addIndicator"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .wcard {
        width: max-content;
    }
    .bodyy {
        margin: 15px;
    }
    .desc {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 80px;
    }
</style>