<template>
    
    <main id="js-page-content" role="main" class="page-content">
        
        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-chart-area'></i> Usuarios 
                <small>
                </small>
            </h1>
        </div>
        <br>
        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                
                <div class="panel-container show">
                    <div class="panel-content">
                            <div class="panel-hdr">
                            <button class="btn btn-success" @click="abrirModalCrear">Nuevo</button>
                        </div><br>
                        <table id="tableUser" class="table table-bordered table-hover table-striped w-100">
                            <thead class="bg-warning-200">
                                <tr>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Rol</th>
                                    <th>Documento</th>
                                    <th>Estacionamiento</th>
                                    <th>Email</th>
                                    <th>Fecha</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in users" :key="user.id">
                                    <td>{{ user.nombre }}</td>
                                    <td>{{ user.apellido }}</td>
                                    <td>{{ user.role.description }}</td>
                                    <td>{{ user.documento }}</td>
                                    <td>{{ user.parking.numero + " - "+ user.parking.sede}}</td>
                                    <td>{{ user.email }}</td>
                                    <td>{{ $dateFormat(user.created_at) }}</td>
                                    <td>
                                        <button class="btn btn-warning" @click="abrirModalEditar(user)"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="borrar(user.id)"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                        <!-- datatable end -->
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="modalForm">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="fa fa-user-plus"></i> {{titulo}}
                    </h5>
                    <button  @click.prevent="cerrarModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <form>
                    <div class="modal-body">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="Nombres">Nombres</label>
                                <input type="text" id="Nombres" class="form-control" placeholder="Nombres" required="" v-model="datos.nombre">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="Apellidos">Apellidos</label>
                                <input type="text" id="Apellidos" class="form-control" placeholder="Apellidos" required="" v-model="datos.apellido">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="Documento">Documento</label>
                                <input type="text" id="Documento" class="form-control" placeholder="Documento" v-model="datos.documento">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="Telefono">Telefono</label>
                                <input type="text" id="Telefono" class="form-control" placeholder="Documento" v-model="datos.telefono">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="Email">Email</label>
                                <input type="email" id="Email" class="form-control" placeholder="Email" v-model="datos.email">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="Cargo">Cargo</label>
                                <input type="text" id="Cargo" class="form-control" placeholder="Cargo" v-model="datos.cargo">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="Area">Area</label>
                                <input type="text" id="Area" class="form-control" placeholder="Area" v-model="datos.area">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="Role">Rol</label>
                                <select id="Perfil" class="browser-default custom-select" v-model="datos.role_id">
                                    <option>Seleccione un rol</option>
                                    <option v-for="role in roles" :key="role.nombre+role.id" :value="role.id">{{ role.nombre }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div v-if="datos.role_id=='3'" class="form-group col-md-4">
                                <label for="Parking">Estacionamiento</label>
                                <select id="Parking" class="browser-default custom-select" v-model="datos.parking_id">
                                    <option>Seleccione un estacionamiento</option>
                                    <option v-for="parking in parkingsFilter" :key="parking.numero+parking.id" :value="parking.id">{{ parking.numero + " - "+parking.sede }}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="password">Contraseña</label>
                                <input type="password" id="password" class="form-control" placeholder="password" v-model="datos.password">
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" @click.prevent="cerrarModal" data-dismiss="modal">Cerrar</button>
                        <button type="submit" class="btn btn-primary" @click.prevent="crear" v-if="btnCrear">Crear</button>
                        <button type="submit" class="btn btn-primary" @click.prevent="editar" v-if="btnEditar">Editar</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        
    </main>
    
</template>
<script>

export default {
    name: "Usuario",
    data(){
        return {
            users:[],
            roles:[],
            parkings:[],
            parkingsFilter:[],
            datos: {nombre:'', apellido:'', documento:'', email:'', cargo: '', area: '', role_id: '', parking_id: '', telefono:''},
            titulo:'',
            btnCrear:false,
            btnEditar:false,
            id:''
        }
    },
    mounted(){
        this.mostrarusers()

    },
    methods:{
        validarCampos(){
            if(!this.datos.nombre || !this.datos.apellido || !this.datos.email || !this.datos.role_id ){
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Completa los campos requeridos!',
                });
                return false;
            }
            return true;
        },
        async crear(){
            let valid = await this.validarCampos();
            if(valid){
                axios.post('api/usuario', this.datos).then(response=>{
                    this.users.push(response.data);
                    //this.getUser()
                    $('#modalForm').modal('hide');
                    this.$swal.fire(
                        'Usuario creado correctamente!',
                        '',
                        'success'
                    )
                }).catch(function (error) {
                    console.log(error);
                });
            }

        },
        async editar(){
            let valid = await this.validarCampos();
            if(valid){
                axios.put('/api/usuario/'+this.id, this.datos).then(response=>{
                    this.users = [].concat(response.data);          
                    this.id='';
                    //this.getUser()
                    $('#modalForm').modal('hide');
                    this.$swal.fire(
                        'Usuario editado correctamente!',
                        '',
                        'success'
                    )
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        borrar(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/usuario/${id}`).then(response=>{
                    this.users = [].concat(response.data);
                }).catch(error=>{
                    console.log(error)
                })
            }

        },
        abrirModalCrear(){
            this.datos = {nombre:'', apellido:'', documento:'', email:'', role_id: '', parking_id:'', cargo: '', area: '', password: ''};
            this.parkingsFilter = [];
            this.parkings.map(i => {
                if(!this.users.find(e => e.parking_id == i.id)){
                    this.parkingsFilter.push(i)
                }
            })
            this.titulo='Crear usuario'
            this.btnCrear=true;
            this.btnEditar=false;
            $('#modalForm').modal('show')
        },
        abrirModalEditar(datos){
            this.parkingsFilter = [];
            this.datos= {nombre: datos.nombre, apellido: datos.apellido, documento: datos.documento, email: datos.email, 
                        role_id: datos.role_id, parking_id: datos.parking_id, password: datos.password };
            this.parkings.map(i => {
                if(!this.users.find(e => e.parking_id == i.id)){
                    this.parkingsFilter.push(i)
                }
                if(i.id == this.datos.parking_id){
                    this.parkingsFilter.push(i)
                }
            })
            this.titulo=' Editar usuario'
            this.btnCrear=false
            this.btnEditar=true
            this.id=datos.id
            $('#modalForm').modal('show')
        },
        async mostrarusers(){
            await this.axios.get('/api/usuario')
                    .then(response=>{
                        this.users = response.data.users;
                        this.roles = response.data.roles;
                        this.parkings = response.data.parkings;
                         
                    })
                    .catch(error=>{
                        console.log(error);
                        //this.users =[]
                    }) 
            
            await $('#tableUser').DataTable();      
        },
        cerrarModal(){
            $('#modalForm').modal('hide');
        }
    }
}
</script>