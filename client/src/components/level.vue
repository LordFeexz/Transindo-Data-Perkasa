<script>
    import Button from './button.vue'
    export default {
        props:['level'],
        emits:['fetchList','changeLevel'],
        components:{
            Button
        },
        methods:{
            changeLevel(data){
                console.log(data)
                this.$emit('changeLevel',data)
                this.$emit('fetchList')
            }
        }
    }
</script>

<template>
    <Button @click.prevent="changeLevel(level)" :type="'click'" :variant="'btn btn-primary'"
        :name="level"></Button>
</template>