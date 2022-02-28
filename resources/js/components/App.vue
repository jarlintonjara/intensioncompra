<template>
    <div class="main">
        <div class="">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user: null
        }
    },
    mounted(){
        axios.get('/api/athenticated').then(()=>{
            this.$router.push({ name: "Dashboard"})
        }).catch((error) => {
            console.log(error);
            this.$router.push({ name: "Login"})
        })
    }
}
</script>