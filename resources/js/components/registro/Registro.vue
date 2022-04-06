<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-pencil'></i> <span class='fw-300'>REGISTRO INTENCIÓN DE COMPRA</span>
            </h1>
        </div>

        <div class="col-lg-12">
            <div id="panel-4" class="panel">
            <div class="panel-hdr">
                <h2>
                    <h2 style="text-align: center; font-size: 1.125rem;"><b>NUEVO REGISTRO</b></h2>
                    
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
                                    <input type="text" id="Nombres" class="form-control" placeholder="" required="" v-model="form.nombre_completo">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Documento">DOCUMENTO</label>
                                    <input type="text" id="Documento" class="form-control Documento" placeholder="" required="" v-model="form.documento">
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="Telefono">CELULAR</label>
                                    <input type="text" pattern="[0-9]{10}" id="Telefono" class="form-control" placeholder="" v-model="form.celular">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="Email">CORREO</label>
                                    <input type="email" id="Email" class="form-control" placeholder="" v-model="form.correo">
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
                                    <label for="selectColor">COLOR 1</label>
                                    <v-select class="vue-select2" name="selectColor"
                                        :options="color" v-model="form.color1" :reduce="label => label.code">
                                    </v-select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="selectColor">COLOR 2</label>
                                    <v-select class="vue-select2" name="selectColor"
                                        :options="color" v-model="form.color2" :reduce="label => label.code">
                                    </v-select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="selectColor">COLOR 3</label>
                                    <v-select class="vue-select2" name="selectColor"
                                        :options="color" v-model="form.color3" :reduce="label => label.code">
                                    </v-select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="Anio">AÑO DE MODELO</label>
                                    <!-- <input type="text" id="Anio_modelo" class="form-control" placeholder="" required="" v-model="form.anio_modelo"> -->
                                <select id="Anio_modelo" class="custom-select form-control" v-model="form.anio_modelo">
                                    <option value="2025">2025</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>
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

    </main>
</template>
<script>

export default {
    data(){
        return{
            registros:[],
            form: {
                concesionario_id : 1,	
                user_id : 0,	
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
            showTable1: true,
            showTable2: false,
            user : null
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
            const token = localStorage.getItem('access_token');
            await axios.get('api/getSession/'+ token).then((res)=>{
                this.user = res.data;
                this.form.user_id = this.user.id
            });
             await axios.get('/api/registro', {
                   withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(response=> {
                    this.caracteristicas = response.data.caracteristicas;
                    this.asignados = response.data.asignados;
                    this.noasignados = response.data.noasignados;
                    let result = this.getUnique(this.caracteristicas , 'marca').map(e => { return { code: e.marca, label: e.marca, ...e } } );
                    this.marca = [].concat(result);
                })
                .catch(error=>{
                    console.log(error);
                })
                this.$tablaGlobal('#tnoasignado');
                this.$tablaGlobal('#tasignado');
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
                    this.noasignados.push(response.data.NO);
                    this.limpiar();
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        limpiar(){
            this.form = {
                concesionario_id : 1,	
                caracteristica_id : 0,	
                user_id : this.user.id,
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