<script>
    import Button from './button.vue'
    export default {
        props:['level'],
        emits:['fetchList','changeLevel','addIndicator'],
        components:{
            Button
        },
        methods:{
            changeLevel(data){
                this.$emit('changeLevel',data)
                this.$emit('addIndicator', data)
                this.$emit('fetchList')
            }
        }
    }
</script>

<template>
    <Button @click.prevent="changeLevel(level)" :type="'click'" :variant="'btn btn-primary'"
        :name="level"></Button>
</template>