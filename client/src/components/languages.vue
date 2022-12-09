<script>
    export default {
        props:['languages']
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2" v-for="(language,idx) in languages" :key="idx">
                <h5>{{language}}</h5>
            </div>
        </div>
    </div>
</template>