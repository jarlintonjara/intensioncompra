<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-chart-area'></i> <span class='fw-300'>Registro</span>
            </h1>
        </div>
        <div class="row">
            <div class="col-md-12">
                <form>
                    <div class="modal-body">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="Nombres">Nombre Completo</label>
                                <input type="text" id="Nombres" class="form-control" placeholder="Nombres" required="" v-model="form.nombre_completo">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="Documento">Documento</label>
                                <input type="text" id="Documento" class="form-control" placeholder="Documento" required="" v-model="form.documento">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="Telefono">Celular</label>
                                <input type="text" id="Telefono" class="form-control" placeholder="Documento" v-model="form.celular">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="Email">Correo</label>
                                <input type="email" id="Email" class="form-control" placeholder="Correo" v-model="form.correo">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="selectMarca">Marca</label>
                                <v-select class="vue-select2" name="selectMarca"
                                    :options="marca" v-model="selectMarca" :reduce="label => label.code">
                                </v-select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="selectModelo">Modelo</label>
                                <v-select class="vue-select2" name="selectModelo"
                                    :options="modelo" v-model="selectModelo" :reduce="label => label.code">
                                </v-select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="selectVersion">Version</label>
                                <v-select class="vue-select2" name="selectVersion"
                                    :options="version" v-model="selectVersion" :reduce="label => label.code">
                                </v-select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="selectColor">Color</label>
                                <v-select class="vue-select2" name="selectColor"
                                    :options="color" v-model="form.color1" :reduce="label => label.code">
                                </v-select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="Anio">Año</label>
                                <input type="text" id="Anio" class="form-control" placeholder="" required="" v-model="form.anio">
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-danger" @click.prevent="limpiar">Limpiar</button>
                        <button type="submit" class="btn btn-primary" @click.prevent="crear">Crear</button>
                    </div>
                </form>
            </div>
        </div>
        

      
    </main>
</template>
<script>

export default {
    data(){
        return{
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
                anio : "",	
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
                    this.caracteristicas = response.data;
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
                anio : "",	
                color1 : "",
                color2 : "",
                color3 : ""
            };
            this.modelo = [];
            this.color = [];
            this.version = [];
            this.anio = [];
            this.selectMarca = "";
            this.selectModelo = "";
            this.selectVersion = "";
        }
    }
}
</script>