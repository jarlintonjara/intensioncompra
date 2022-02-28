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
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="">Nombres</label>
                                <input type="text" v-model="form.nombre" id="" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="">Apellidos</label>
                                <input type="text" v-model="form.apellido" id="" class="form-control" >
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="">Email</label>
                                <input type="email" v-model="form.email" id="" class="form-control" >
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="">Documento</label>
                                <input type="text" v-model="form.documento" id="" class="form-control" >
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="">Perfil</label>
                                <input type="text" v-model="form.perfil" id="" class="form-control" >
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="password">Password</label>
                                <input type="password" v-model="form.password" id="password" class="form-control">
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
                perfil: '',
                email: '',
                password:'',
                password_confirmation:''
            },
            errors:[]
        }
    },
    methods:{
        saveForm(){
            axios.post('/api/register', this.form).then(() =>{
                console.log('saved');
            }).catch((error) =>{
                this.errors = error.response.data.errors;
            })
        }
    }
}
</script>