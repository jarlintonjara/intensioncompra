<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-pencil'></i> <span class='fw-300'>REGISTRO INTENSION DE COMPRA</span>
            </h1>
        </div>

        <div class="col-lg-12">
            <div id="panel-4" class="panel">
            <div class="panel-hdr">
                <h2>
                    <h2 style="text-align: center; font-size: 1.125rem;"><b> </b></h2>
                </h2>
                <div class="panel-toolbar">
                    <button class="btn btn-panel waves-effect waves-themed" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                    <button class="btn btn-panel waves-effect waves-themed" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                    <!-- <button class="btn btn-panel waves-effect waves-themed" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button> -->
                </div>

            </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="Nombres">NOMBRE COMPLETO</label>
                                    <input type="text" id="Nombres" class="form-control form-control-lg" placeholder="" required="" v-model="form.nombre_completo">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Documento">DOCUMENTO</label>
                                    <input type="text" id="Documento" class="form-control form-control-lg" placeholder="" required="" v-model="form.documento">
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="Telefono">CELULAR</label>
                                    <input type="text" id="Telefono" class="form-control form-control-lg" placeholder="" v-model="form.celular">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="Email">CORREO</label>
                                    <input type="email" id="Email" class="form-control form-control-lg" placeholder="" v-model="form.correo">
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="selectMarca">MARCA</label>
                                    <v-select class="vue-select2" name="selectMarca"
                                        :options="marca" v-model="selectMarca" :reduce="label => label.code">
                                    </v-select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="selectModelo">MODELO</label>
                                    <v-select class="vue-select2" name="selectModelo"
                                        :options="modelo" v-model="selectModelo" :reduce="label => label.code">
                                    </v-select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="selectVersion">VERSIÓN</label>
                                    <v-select class="vue-select2" name="selectVersion"
                                        :options="version" v-model="selectVersion" :reduce="label => label.code">
                                    </v-select>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="selectColor">COLOR</label>
                                    <v-select class="vue-select2" name="selectColor"
                                        :options="color" v-model="form.color1" :reduce="label => label.code">
                                    </v-select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="Anio">AÑO DE MODELO</label>
                                    <input type="text" id="Anio_modelo" class="form-control form-control-lg" placeholder="" required="" v-model="form.anio_modelo">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="Anio">AÑO DE FABRICACIÓN</label>
                                    <input type="text" id="Anio_fabricacion" class="form-control form-control-lg" placeholder="" required="" v-model="form.anio_fabricación">
                                </div>
                            </div>

                    
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-danger" @click.prevent="limpiar">LIMPIAR</button>
                                <button type="submit" class="btn btn-primary" @click.prevent="crear">CREAR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                <div class="panel-hdr">
                    <h2>
                        <h2 style="text-align: center; font-size: 1.125rem;"><b>Registros no asignados </b></h2>
                    </h2>
                    <div class="panel-toolbar">
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                        <!-- <button class="btn btn-panel waves-effect waves-themed" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button> -->
                    </div>

                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <table id="tRegistronoasignado" class="table table-bordered table-hover table-striped w-100">
                            <thead class="bg-warning-200">
                                <tr>
                                    <th>Fecha Creación</th>
                                    <th>Nombre Completo</th>
                                    <th>Documento</th>
                                    <th>celular</th>
                                    <th>Correo</th>
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th>Versión</th>
                                    <th>color 1</th>
                                    <th>Año Modelo</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="registro in registros" :key="registro.id">
                                    <td>{{registro.created_at}}</td>
                                    <td>{{registro.nombre_completo}}</td>
                                    <td>{{registro.documento}}</td>
                                    <td>{{registro.celular}}</td>
                                    <td>{{registro.correo}}</td>
                                    <td>{{registro.marca}}</td>
                                    <td>{{registro.modelo}}</td>
                                    <td>{{registro.version}}</td>
                                    <td>{{registro.color1}}</td>
                                    <td>{{registro.anio_modelo}}</td>
                                    <td style="text-align: center">
                                        <button class="btn btn-warning"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                        <!-- datatable end -->
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>
<script>

export default {
    data(){
        return{
            registros:[],
            form: {
                concesionario_id : 1,	
                user_id : 1,	
                caracteristica_id : 0,	
                nombre_completo : "",
                documento : "",
                celular : "",
                correo : "",
                marca : "",	
                modelo : "",	
                version : "",	
                anio_modelo : "",	
                anio_fabricacion : "",
                color1 : "",
                color2 : "",
                color3 : ""
            },
            caracteristicas : [],
            marca : [],
            modelo : [],
            color : [],
            version : [],
            anio : [],
            selectMarca : "",
            selectModelo : "",
            selectVersion : "",
            
        }
    },
    mounted(){
        this.init();
    },
    watch : {
        selectMarca : function(val) {
            this.version = [];
            this.modelo = [];
            this.color = [];
            this.selectModelo = "";
            this.selectVersion = "";
            this.form.color = "";
            let dataFilter = this.caracteristicas.filter(e => e.marca == val ).map(e => { return { code : e.modelo, label: e.modelo, ...e } })
            let result = this.getUnique(dataFilter, 'modelo');
            this.modelo = [].concat(result);
        },
        selectModelo : function(val) {
            this.version = [];
            this.color = [];
            this.selectVersion = "";
            this.form.color = "";
            let dataFilter = this.caracteristicas.filter(e => e.modelo == val ).map(e => { return { code: e.version, label: e.version , ...e } } );
            let result = this.getUnique(dataFilter, 'version');
            this.version = [].concat(result);
        },
        selectVersion : function(val) {
            this.color = [];
            this.form.color = "";
            let dataFilter = this.caracteristicas.filter(e => e.version == val ).map(e => { return { code: e.color, label: e.color, ...e } } );
            let result = this.getUnique(dataFilter, 'color');
            this.color = [].concat(result);
        }
    },
    methods:{
        async init(){
             await this.axios.get('/api/registro')
                .then(response=> {
                    this.caracteristicas = response.data.caracteristicas;
                    this.registros = response.data.registros;
                    let result = this.getUnique(this.caracteristicas , 'marca').map(e => { return { code: e.marca, label: e.marca, ...e } } );
                    this.marca = [].concat(result);
                })
                .catch(error=>{
                    console.log(error);
                })
        },
        getUnique(arr, comp) {
            const unique =  arr.map(e => e[comp])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter((e) => arr[e]).map(e => arr[e]);
            return unique;
        },
        validarCampos(){
            if(!this.form.nombre_completo || !this.form.documento || !this.form.celular || !this.form.correo || !this.selectMarca|| !this.selectModelo || !this.selectVersion || !this.form.color1 ){
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
            this.form.marca = this.selectMarca;
            this.form.modelo = this.selectModelo;
            this.form.version = this.selectVersion;
            if(valid){
                axios.post('api/registro', this.form).then(response=>{
                    this.$swal.fire(
                        'Registro creado!',
                        '',
                        'success'
                    )
                    this.registros.push(response.data);
                    limpiar();
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        limpiar(){
            this.form = {
                concesionario_id : 1,	
                user_id : 1,	
                caracteristica_id : 0,	
                nombre_completo : "",
                documento : "",
                celular : "",
                correo : "",
                marca : "",	
                modelo : "",	
                version : "",	
                anio_modelo : "",	
                anio_fabricacion : "",
                color1 : "",
                color2 : "",
                color3 : ""
            };
            this.modelo = [];
            this.color = [];
            this.version = [];
            this.anio_modelo = [];
            this.anio_fabricacion = [];
            this.selectMarca = "";
            this.selectModelo = "";
            this.selectVersion = "";
        }
    }
}
</script>