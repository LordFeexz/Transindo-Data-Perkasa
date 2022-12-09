<script>
    import Button from './button.vue'
    export default {
        props:['tools'],
        emits:['fetchList','changeTools'],
        components:{
            Button
        },
        methods:{
            changeRole(data){
                this.$emit('changeTools',data)
                this.$emit('fetchList')
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2" v-for="(tool,idx) in tools" :key="idx">
                    <Button @click.prevent="changeRole(tool)" :type="'click'" :variant="'btn btn-primary'" :name="tool"></Button>
            </div>
        </div>
    </div>
</template>