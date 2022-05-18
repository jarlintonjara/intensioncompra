<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-pencil'></i> <span class='fw-300'>Reservados</span>
            </h1>
        </div>

        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                
                <div class="panel-container show">
                    <div class="panel-content">
                        <div class="row mb-2">
                            <div class="col-md-2">
                                <button class="btn btn-success" @click.prevent="ReporteExcel"><i class="fa fa-file-excel"></i> Reporte</button>
                            </div>
                        </div>
                        <table id="treservado" class="table table-bordered table-hover table-striped w-100" translate="no">
                            <thead>
                                <tr>
                                    <td>ACCIONES</td>
                                    <th>CONCESIONARIO</th>
                                    <th>TIENDA</th>
                                    <th>ASESOR</th>
                                    <th>DOCUMENTO</th>
                                    <th>CELULAR</th>
                                    <th>VIN</th>
                                    <th>MARCA</th>
                                    <th>MODELO</th>
                                    <th>VERSIÓN</th>
                                    <th>COLOR</th>
                                    <th>AÑO MODELO</th>
                                    <th>FECHA DISTRIBUCIÓN</th>
                                    <th>CÓDIGO SAP</th>
                                    <th>FECHA ESTIMADA LLEGADA</th>
                                    <th>CÓDIGO RESERVA</th>
                                    <th>MONTO RESERVA</th>
                                    <th>FECHA RESERVA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="asignacion in asignaciones" :key="asignacion.id">
                                     <td tyle="text-align: center; display: flex">
                                        <button class="btn btn-warning" @click="detalle(asignacion)"><i class="fa fa-list"></i></button>
                                        <button class="btn btn-danger" v-if="user.role_id != 8" @click="borrar(asignacion.id)"><i class="fa fa-trash"></i></button>
                                    </td>
                                    <td>{{asignacion.concesionario}}</td>
                                    <td>{{asignacion.tienda}}</td>
                                    <td>{{asignacion.nombre}}</td>
                                    <td>{{asignacion.documento}}</td>
                                    <td>{{asignacion.celular}}</td>
                                    <td>{{asignacion.vin_e}}</td>
                                    <td>{{asignacion.marca}}</td>
                                    <td>{{asignacion.modelo}}</td>
                                    <td>{{asignacion.version}}</td>
                                    <td>{{asignacion.color}}</td>
                                    <td>{{asignacion.anio_modelo}}</td>
                                    <td>{{asignacion.fecha_distribucion ? asignacion.fecha_distribucion : ""}}</td>
                                    <td>{{asignacion.codigo_sap}}</td>
                                    <td>{{asignacion.fecha_ingreso ? asignacion.fecha_ingreso : ""}}</td>
                                    <td>{{asignacion.codigo_reserva}}</td>
                                    <td>{{asignacion.monto_reserva}}</td>
                                    <td>{{asignacion.fecha_reserva}}</td>
                                </tr>
                            </tbody>
                            
                        </table>
                        <!-- datatable end -->
                    </div>
                </div>
            </div>
        </div>

         <!-- MODAL DETALLE -->
         <div id="modalDetalle" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title h4">Detalle de registro</h5>
                        <button type="button" class="close" @click="cerrarModal()" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fal fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="card mb-g">
                            <div class="card-body p-3">
                                <h5 class="text-danger">
                                    Detalle de la Unidad
                                </h5>
                                <div class="row">
                                    <div class="row">
                                        <div class="col-md-3">Marca:</div>
                                        <div class="col-md-3"><b>{{ registro.marca }}</b></div>
                                        <div class="col-md-3">Versión:</div>
                                        <div class="col-md-3"><b>{{ registro.version }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Modelo:</div>
                                        <div class="col-md-3"><b>{{ registro.modelo }}</b></div>
                                        <div class="col-md-3">Año Modelo:</div>
                                        <div class="col-md-3"><b>{{ registro.anio_modelo }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Año fabricación:</div>
                                        <div class="col-md-3"><b>{{ registro.anio_fabricacion }}</b></div>
                                        <div class="col-md-3">Color 1:</div>
                                        <div class="col-md-3"><b>{{ registro.color1 }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Color 2:</div>
                                        <div class="col-md-3"><b>{{ registro.color2 }}</b></div>
                                        <div class="col-md-3">Color 3:</div>
                                        <div class="col-md-3"><b>{{ registro.color3 }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Fecha estimada de llegada:</div>
                                        <div class="col-md-3"><b>{{ registro.fecha_ingreso ? registro.fecha_ingreso : "-"}}</b></div>
                                        <div class="col-md-3">Código Reserva:</div>
                                        <div class="col-md-3"><b>{{ registro.codigo_reserva }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Monto reserva:</div>
                                        <div class="col-md-3"><b>{{ registro.monto_reserva }}</b></div>
                                        <div class="col-md-3">Fecha reserva:</div>
                                        <div class="col-md-3"><b>{{ registro.fecha_reserva }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Código SAP:</div>
                                        <div class="col-md-3"><b>{{ registro.codigo_sap }}</b></div>
                                        <div class="col-md-3">Fecha de distribución:</div>
                                        <div class="col-md-3"><b>{{ registro.fecha_distribucion ? registro.fecha_distribucion : "-"}}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">VIN:</div>
                                        <div class="col-md-9"><b>{{ registro.vin }}</b></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-5">
                            <div class="card-body p-3">
                                <h5 class="text-danger">
                                    Cliente
                                    <!-- <span class="badge badge-primary fw-n position-absolute pos-top pos-right mt-3 mr-3">A</span> -->
                                </h5>
                                <div class="row">
                                    <div class="row">
                                        <div class="col-md-3">Nombre Completo:</div>
                                        <div class="col-md-3"><b>{{ registro.nombreCompleto }}</b></div>
                                        <div class="col-md-3">Documento:</div>
                                        <div class="col-md-3"><b>{{ registro.documento }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Celular:</div>
                                        <div class="col-md-3"><b>{{ registro.celular }}</b></div>
                                        <div class="col-md-3">Email:</div>
                                        <div class="col-md-3"><b>{{ registro.email }}</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-5">
                            <div class="card-body p-3">
                                <h5 class="text-danger">
                                    Ejecutivo
                                </h5>
                                <div class="row">
                                    <div class="row">
                                        <div class="col-md-3">Nombre Completo:</div>
                                        <div class="col-md-3"><b>{{ registro.usuarioNombre }}</b></div>
                                        <div class="col-md-3">Tienda:</div>
                                        <div class="col-md-3"><b>{{ registro.tienda }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Email:</div>
                                        <div class="col-md-3"><b>{{ registro.usuarioEmail }}</b></div>
                                        <div class="col-md-3">Concesionario:</div>
                                        <div class="col-md-3"><b>{{ registro.concesionario }}</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-5">
                            <div class="card-body p-3">
                                <h5 class="text-danger">
                                    Documentos adjuntos
                                </h5>
                                <div class="d-flex mt-3 flex-wrap">
                                    <div class="btn-group mr-1 mt-1" v-for="image in images" :key="image.id + 99"
                                        role="group" aria-label="Button group with nested dropdown ">
                                        <button type="button" class="btn btn-default btn-xs btn-block px-1 py-1 fw-500 waves-effect waves-themed" data-action="toggle">
                                            <span class="d-block text-truncate text-truncate-sm">
                                                <i class="fal fa-file-pdf mr-1 color-danger-700"></i> {{ image.original_filename  }}
                                            </span>
                                        </button>
                                        <div class="btn-group" role="group">
                                            <button id="btnGroupDrop1" type="button" class="btn btn-default btn-xs dropdown-toggle px-2 js-waves-off" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                            <div class="dropdown-menu p-0 fs-xs" aria-labelledby="btnGroupDrop1" style="">
                                                <a class="dropdown-item px-3 py-2" :href="`/displayImage/${registro.id}/${image.filename}`" download>download</a>
                                                <a class="dropdown-item px-3 py-2" :href="`/displayImage/${registro.id}/${image.filename}`" target="_blank">Open</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <!--fancybox 
                            href="https://vimeo.com/191947042"
                            data-caption="video"
                            data-fancybox="gallery"
                        >
                            <img src="https://source.unsplash.com/300x300/weekly?video" alt="">
                        </fancybox-->
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="cerrarModal()">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
//import fancybox from './../../components/fancybox.vue';
import { ExpExcel } from '../../utils.js';
export default {
    data(){
        return{
            asignaciones:[],
            images: [],
            registro: {
                user: {role_id:0},
                id: "", 
                nombreCompleto: "", 
                documento: "", 
                email: "", 
                celular: "", 
                usuarioNombre: "",         
                usuarioEmail: "",          
                tienda: "",          
                concesionario: "",          
                marca: "",          
                modelo: "",          
                version: "",          
                anio_modelo: "",          
                anio_fabricacion: "",          
                color1: "",          
                color2: "", 
                color3: "" ,
                codigo_reserva: "",
                monto_reserva: "",
                fecha_reserva: "",
                fecha_distribucion: "",
                codigo_sap:"",
                vin:""
            },
        }
    },
    components: {
    },
    mounted(){
        this.init();
    },
    methods:{
        async init(){
            const token = localStorage.getItem('access_token');
            await axios.get('api/getSession/'+ token).then((res)=>{
                this.user = res.data;
            });
            await this.axios.get('/api/reservado',{
                   withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(response=>{
                    this.asignaciones = response.data;
                })
                .catch(error=>{
                    console.log(error);
                    this.asignaciones =[]
                })
                await this.$tablaGlobal('#treservado');
        },
        detalle(datos){
            this.registro.nombreCompleto = datos.nombre_completo
            this.registro.documento = datos.documento; 
            this.registro.email = datos.correo;
            this.registro.celular = datos.celular; 
            this.registro.usuarioNombre = datos.nombre + " " + (datos.apellido? datos.apellido : " ");        
            this.registro.usuarioEmail = datos.email;        
            this.registro.tienda = datos.tienda;          
            this.registro.concesionario = datos.concesionario;         
            this.registro.marca = datos.marca;          
            this.registro.modelo = datos.modelo;          
            this.registro.version = datos.version;        
            this.registro.anio_modelo = datos.anio_modelo;          
            this.registro.color1= datos.color1;        
            this.registro.color2= datos.color2;
            this.registro.color3= datos.color3;
            this.registro.codigo_reserva = datos.codigo_reserva;
            this.registro.monto_reserva = datos.monto_reserva;
            this.registro.fecha_reserva = datos.fecha_reserva;
            this.registro.fecha_distribucion = datos.fecha_distribucion;
            this.registro.codigo_sap = datos.codigo_sap;
            this.registro.vin = datos.vin;
            this.registro.id = datos.id;
            
            this.axios.get('/api/getimages/'+ this.registro.id)
            .then(response=>{
                this.images = response.data;
            })
            .catch(error=>{
                console.log(error);
                this.images =[]
            })
            $('#modalDetalle').modal('show')
        },
        async borrar(id){
            this.$swal.fire({
                title: '¿Seguro de cancelar reserva?',
                showDenyButton: true,
                confirmButtonText: 'Eliminar reserva',
                denyButtonText: `Cancelar`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await this.axios.delete(`/api/asignacion/${id}`).then(response=>{
                        let index =  this.asignaciones.map(e => e.id).indexOf(id);
                        if(index !== -1){
                            let asignaciones = this.asignaciones;
                            asignaciones.splice(index, 1);
                            this.asignaciones = [].concat(asignaciones);
                        }
                        this.$swal.fire('Registro eliminado', '', 'success') 
                    }).catch(error=>{
                        console.log(error)
                    });
                }
            })
        },
         ReporteExcel(){
            let dataExcel = [];
            this.asignaciones.map((e)=>{
                dataExcel.push({
                    ['ID'] : e.id,
                    ['Concesionario'] : e.concesionario,
                    ['Tienda'] : e.tienda,
                    ['Asesor'] : e.nombre + (e.apellido ? e.apellido : ''),
                    ['Nombre Completo'] : e.nombre_completo,
                    ['Documento'] : e.documento,
                    ['Celular'] : e.celular,
                    ['VIN'] : e.vin,
                    ['Marca'] : e.marca,
                    ['Modelo'] : e.modelo,
                    ['Version'] : e.version,
                    ['Año modelo'] : e.anio_modelo,
                    ['Color reservado'] : e.color,
                    ['Código reserva'] : e.codigo_reserva,
                    ['Monto reserva'] : e.monto_reserva,
                    ['Fecha reserva'] : e.fecha_reserva,
                    ['Fecha creación'] : e.created_at
                })
            });

            let dataSend = {
                data: {
                    "Report": dataExcel,
                },
                name: ['Reporte'],
                filename: 'Reservados.xlsx',
                vacios: [[]],
            };
            ExpExcel(dataExcel, "Reservados.xlsx", dataSend.name, dataSend.vacios);
        },
        cerrarModal(){
            $('#modalDetalle').modal('hide');
        }
    }
}

</script>