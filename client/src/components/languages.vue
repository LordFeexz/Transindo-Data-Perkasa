<script>
    import Button from './button.vue'
    export default {
        props:['languages'],
        emits:['fetchList','changeLanguages','addIndicator'],
        components:{
            Button
        },
        methods:{
            changeLanguages(data){
                this.$emit('changeLanguages',data)
                this.$emit('addIndicator', data)
                this.$emit('fetchList')
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md" v-for="(language,idx) in languages" :key="idx">
            <Button @click.prevent="changeLanguages(language)" :type="'click'" :variant="'btn btn-primary'" :name="language"></Button>
            </div>
        </div>
    </div>
</template>