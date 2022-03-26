<template>
    
    <main id="js-page-content" role="main" class="page-content">
        
        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-chart-area'></i> Configuraciones 
                <small>
                </small>
            </h1>
        </div>
        <br>
        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                <div class="panel-hdr">
                        <h2 style="text-align: center; font-size: 1.125rem;"><b>Envío de correo</b></h2>
                    <div class="panel-toolbar">
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                        <!-- <button class="btn btn-panel waves-effect waves-themed" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button> -->
                    </div>
                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <!-- <div class="panel-hdr">
                            <button class="btn btn-success" @click="abrirModalCrear">Nuevo</button>
                        </div><br> -->
                        <div class="row">
                            <div class="col-4">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Hora</span>
                                    </div>
                                    <input class="form-control" id="time" type="time" name="time" v-model="datos.time">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Correo principal</span>
                                    </div>
                                    <input type="email" id="email" name="email" aria-label="Email" class="form-control" v-model="datos.email">
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Correos de copia</span>
                                </div>
                                <input type="email" id="email1" name="email1" aria-label="Email1" class="form-control" v-model="datos.email1">
                                <input type="email" id="email2" name="email2" aria-label="Email2" class="form-control" v-model="datos.email2">
                                <input type="email" id="email3" name="email3" aria-label="Email3" class="form-control" v-model="datos.email3">
                                <input type="email" id="email4" name="email4" aria-label="Email4" class="form-control" v-model="datos.email4">
                                </div> 
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" @click.prevent="editar" v-if="btnEditar">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
    
</template>
<script>

export default {
    name: "Setting",
    components: {

    },
    data(){
        return {
            items:[],
            datos: {time:'', email:'',email1:'', email2:'', email3:'', email4:''},
            titulo:'',
            btnEditar:true,
            id:''
        }
    },
    mounted(){
        this.mostrarItems();
    },
    methods:{
        editar(){
            console.log( this.datos);
            axios.put('/api/setting/'+1, this.datos).then(response=>{
                this.items = [].concat(response.data);          
                this.id='';
                //this.getUser()
                $('#modalForm').modal('hide');
                this.$swal.fire(
                    'Editado correctamente!',
                    '',
                    'success'
                )
                //swal("Felicidades!", "Usuario editado correctamente!", "success");
            }).catch(function (error) {
                console.log(error);
            });
        },
        async mostrarItems(){
            await this.axios.get('/api/setting')
                    .then(response=>{
                        this.datos = response.data[0]
                    })
                    .catch(error=>{
                        console.log(error);
                        this.datos =[]
                    })
                //    await $('#tableRol').DataTable();
        }
    }
}
</script>
