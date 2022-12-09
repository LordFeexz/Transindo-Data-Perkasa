<script>
    export default {
        props:['tools']
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2" v-for="(tool,idx) in tools" :key="idx">
                <h5>{{tool}}</h5>
            </div>
        </div>
    </div>
</template>