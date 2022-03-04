<template>
      <div class="">
        <div class="blankpage-form-field" style="width: 600px">
            <div class="page-logo m-0 w-100 align-items-center justify-content-center rounded border-bottom-left-radius-0 border-bottom-right-radius-0 px-4">
                <a href="javascript:void(0)" class="page-logo-link press-scale-down d-flex align-items-center">
                    <span class="page-logo-text mr-1">Registro</span>
                </a>
            </div>
            <div class="p-2 w-full">
                <span class="w-full text-red-500" v-if="errors.name">{{errors.name[0]}}</span>
            </div>
            <div class="card p-4 border-top-left-radius-0 border-top-right-radius-0">
                <form >
                    <div class="row mb-2">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="nombres">Nombres</label>
                                <input type="text" v-model="form.nombre" id="nombres" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="apellidos">Apellidos</label>
                                <input type="text" v-model="form.apellido" id="apellidos" class="form-control" >
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="email">Email</label>
                                <input type="email" v-model="form.email" id="email" class="form-control" >
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="documento">Documento</label>
                                <input type="text" v-model="form.documento" id="documento" class="form-control" >
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mb-2">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="password">Password</label>
                                <input type="password" v-model="form.password" id="password" class="form-control" >
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="password_confirm">Confirmar Password</label>
                                <input type="password" v-model="form.password_confirmation" id="password_confirm" class="form-control">
                            </div>
                        </div>
                    </div>
                    <br>
                    <button @click.prevent="saveForm" class="btn btn-primary float-right">Registrarse</button>
                </form>
            </div>
            <div class="blankpage-footer text-center">
                <router-link to="/"><strong>Recuperar Password</strong></router-link> |
                <router-link to="/login"><strong>Login</strong></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                nombre: '',
                apellido: '',
                email: '',
                documento: '',
                password:'',
                password_confirmation:''
            },
            errors:[]
        }
    },
    methods:{
        validarCampos(){
            if(!this.form.nombre || !this.form.apellido || !this.form.email || !this.form.password || !this.form.password_confirmation ){
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Completa los campos requeridos!',
                });
                return false;
            }
            return true;
        },
        async saveForm(){
            let valid = await this.validarCampos();
            if(valid){
                axios.post('/api/register', this.form).then((response) =>{
                    this.$swal.fire(
                        'Registro creado correctamente!',
                        '',
                        'success'
                    )
                    this.$router.push({ name: "Login"})
                }).catch((error) =>{
                    this.errors = error.response.data.errors;
                })
            }
        }
    }
}
</script>