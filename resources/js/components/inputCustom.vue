<template>
    <div class="">
        <input type="text" v-if="type=='text'" :value="value" :maxlength="maxLength" >
        <input type="text" v-if="type=='number'" :maxlength="maxLength">
    </div>
</template>

<script>

export default {
    name: 'inputCustom',
    props: ["type", "value", "maxLength"],
    data() {
        return {
            type: 'text',
            value: '',
            maxLength: 100
        }
    },
    mounted() {
        
    }
 
}
</script>