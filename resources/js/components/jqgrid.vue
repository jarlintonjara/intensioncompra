<template>
    <select>
        <slot></slot>
    </select>
</template>
<script>

import jQuery from 'jquery'
window.jQuery =
require('select2')


export default {
    name: "Select2",
    props: ["options", "value"],
    components: {

    },
    data(){
        return {
            user: []
        }
    },
    mounted(){
        var vm = this;
          $(this.$el)
            // init select2
            .select2({ data: this.options, dropdownParent: $(this).parent() })
            .val(this.value)
            .trigger("change")
            // emit event on change.
            .on("change", function() {
              vm.$emit("input", this.value);
            });
    },
    methods:{
        async init(){
            await axios.get('/api/user').then((res)=>{
                this.user = res.data;
            })
        }
    },
    watch: {
        value: function(value) {
        // update value
        $(this.$el)
            .val(value)
            .trigger("change");
        },
        options: function(options) {
        // update options
        $(this.$el)
            .empty()
            .select2({ data: options });
        }
    },
    destroyed: function() {
        $(this.$el)
        .off()
        .select2("destroy");
    }   
       
        
}
</script>