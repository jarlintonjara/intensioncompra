<template>
    <div class="">
        <div class="blankpage-form-field">
            <div class="page-logo m-0 w-100 align-items-center justify-content-center rounded border-bottom-left-radius-0 border-bottom-right-radius-0 px-4" style="background-color: #e30025;">
                <a href="javascript:void(0)" class="page-logo-link press-scale-down d-flex align-items-center">
                    <span class="page-logo-text mr-1">Login</span>
                </a>
            </div>
            <div class="card p-4 border-top-left-radius-0 border-top-right-radius-0">
                <form >
                    <div class="form-group">
                        <label class="form-label" for="username">usuario</label>
                        <input type="usuario" v-model="form.usuario" id="username" class="form-control" placeholder="your id or usuario" value="demo@derco.com">
                    <!--  <span class="help-block">
                            Your usuario
                        </span> -->
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="password">Password</label>
                        <input type="password" v-model="form.password" id="password" class="form-control" placeholder="password" value="password123">
                        <!-- <span class="help-block">
                            Your password
                        </span> -->
                    </div>
                    <button @click.prevent="login" class="btn btn-danger float-right">Login</button>
                </form>
            </div>
            <!-- <div class="blankpage-footer text-center">
                <router-link to="/login"><strong>Recuperar Password</strong></router-link> |
                <router-link to="/register"><strong>Registrar Cuenta</strong></router-link>
            </div> -->
        </div>

    </div>

    
    
</template>
<script>
export default {
    data(){
        return{
            form:{
                usuario: '',
                password: ''
            },
            errors: []
        }
    },
    methods:{
        async login(){
            let self = this;
            await axios.post('api/login', this.form)
                .then(response => {
                    localStorage.setItem('access_token', response.data.access_token);
                    this.$router.push({ name: "dashboard"}); 
                })
                .catch(function (error) {
                    self.$swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'usuario o password incorrectos!',
                    })
                });
         }
    }
}
</script>