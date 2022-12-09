<script>
    import Button from './button.vue'
    export default {
        components:{
            Button
        },
        props:['role'],
        emits:['changeRole','fetchList','addIndicator'],
        methods:{
            changeRole(data){
                this.$emit('changeRole',data)
                this.$emit('addIndicator', data)
                this.$emit('fetchList')
            }
        }
    }
</script>

<template>
    <Button @click.prevent="changeRole(role)" :type="'click'" :variant="'btn btn-primary'" :name="role"></Button>
</template>