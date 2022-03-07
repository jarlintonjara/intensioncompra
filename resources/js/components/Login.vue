<template>
    <div class="">
        <div class="blankpage-form-field">
            <div class="page-logo m-0 w-100 align-items-center justify-content-center rounded border-bottom-left-radius-0 border-bottom-right-radius-0 px-4">
                <a href="javascript:void(0)" class="page-logo-link press-scale-down d-flex align-items-center">
                    <span class="page-logo-text mr-1">Login</span>
                </a>
            </div>
            <div class="card p-4 border-top-left-radius-0 border-top-right-radius-0">
                <form >
                    <div class="form-group">
                        <label class="form-label" for="username">Email</label>
                        <input type="email" v-model="form.email" id="username" class="form-control" placeholder="your id or email" value="demo@derco.com">
                    <!--  <span class="help-block">
                            Your email
                        </span> -->
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="password">Password</label>
                        <input type="password" v-model="form.password" id="password" class="form-control" placeholder="password" value="password123">
                        <!-- <span class="help-block">
                            Your password
                        </span> -->
                    </div>
                    <div class="form-group text-left">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="rememberme">
                            <label class="custom-control-label" for="rememberme"> Recordar contraseña(30 días)</label>
                        </div>
                    </div>
                    <button @click.prevent="loginUser" class="btn btn-primary float-right">Login</button>
                </form>
            </div>
            <!-- <div class="blankpage-footer text-center">
                <router-link to="/login"><strong>Recuperar Password</strong></router-link> |
                <router-link to="/register"><strong>Registrar Cuenta</strong></router-link>
            </div> -->
        </div>
        <!-- <video poster="/public/admin/img/backgrounds/clouds.png" id="bgvid" playsinline autoplay muted loop>
            <source src="./public/admin/assets/media/video/cc.webm" type="video/webm">
            <source src="/public/admin/assets/media/video/cc.mp4" type="video/mp4">
        </video> -->
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            form:{
                email: '',
                password: ''
            },
            errors: []
        }
    },
    methods:{
         loginUser(){
            axios.post('/api/login', this.form).then((response) =>{
                localStorage.setItem('access_token', response.data.access_token);
                this.$router.push({ name: "Dashboard"}); 
            }).catch((error) =>{
                this.errors = error.response.data.errors;
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email o password incorrectos!',
                })
            })
         }
    }
}
</script>