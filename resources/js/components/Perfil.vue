<template>
    
    <main id="js-page-content" role="main" class="page-content">
        
        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-chart-area'></i> Perfil 
         
            </h1>
        </div>
        <br>
        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                
                <div class="panel-container show">
                    <div class="panel-content">
                        <!-- <div class="panel-hdr">
                            <button class="btn btn-success" @click="abrirModalCrear">Nuevo</button>
                        </div><br> -->
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="Nombres">Nombres</label>
                                    <input type="text" id="Nombres" class="form-control" placeholder="Nombres" required="" v-model="datosUsuario.nombre">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Apellidos">Apellidos</label>
                                    <input type="text" id="Apellidos" class="form-control" placeholder="Apellidos" required="" v-model="datosUsuario.apellido">
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="Documento">Documento</label>
                                    <input type="text" id="Documento" class="form-control" placeholder="Documento" v-model="datosUsuario.documento">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="Telefono">Telefono</label>
                                    <input type="text" id="Telefono" class="form-control" placeholder="Documento" v-model="datosUsuario.telefono">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="Email">Email</label>
                                    <input type="email" id="Email" class="form-control" placeholder="Email" v-model="datosUsuario.email">
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="Cargo">Cargo</label>
                                    <input type="text" id="Cargo" class="form-control" placeholder="Cargo" v-model="datosUsuario.cargo">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="Area">Area</label>
                                    <input type="text" id="Area" class="form-control" placeholder="Area" v-model="datosUsuario.area">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary" @click.prevent="editar" >Guardar datos</button>
                            </div>
                        </form>
                        <br>
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="password">Nueva Contraseña</label>
                                    <input type="passsword" id="password" class="form-control" placeholder="nueva contraseña" v-model="datos.password">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="password_confirmation">Confirmar contraseña</label>
                                    <input type="passsword" id="password_confirmation" class="form-control" placeholder="confirmar password" v-model="datos.password_confirmation">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary" @click.prevent="editarPassword" >Cambiar contraseña</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
    
</template>
<script>

export default {
    name: "Perfil",
    data(){
        return {
            session: null,
            datosUsuario: {nombre:'', apellido:'', documento:'', email:'', cargo: '', area: '', telefono:''},
            datos: {password:'', password_confirmation:''},
        }
    },
    mounted:async function(){
        await this.init();
        
        this.datosUsuario.nombre = this.session.nombre;
        this.datosUsuario.apellido = this.session.apellido;
        this.datosUsuario.documento = this.session.documento;
        this.datosUsuario.email = this.session.email;
        this.datosUsuario.cargo = this.session.cargo;
        this.datosUsuario.area = this.session.area;
        this.datosUsuario.telefono = this.session.telefono;
    },
    methods:{
        async init(){
            const token = localStorage.getItem('access_token');
            await axios.get('api/getSession/'+ token).then((res)=>{
                let user = res.data;
                this.session = user
            })
        },
        validarCampos(){
            if(!this.datosUsuario.nombre || !this.datosUsuario.apellido || !this.datosUsuario.email ){
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Completa los campos requeridos!',
                });
                return false;
            }
            return true;
        },
        async editar(){
            let valid = await this.validarCampos();
            if(valid){
                axios.put('/api/updateProfile/'+this.session.id, this.datosUsuario).then(response=>{
                    console.log(response)     
                    this.$swal.fire(
                        'Se guardo correctamente!',
                        '',
                        'success'
                    )
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        async editarPassword(){
            if(this.datos.password !== this.datos.password_confirmation){
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Las contraseñas no son iguales!',
                });
                return false;
            }
            await axios.put('/api/updateProfile/'+this.session.id, this.datos).then(response=>{
                console.log(response)     
                this.$swal.fire(
                    'Se guardo correctamente!',
                    '',
                    'success'
                )
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>