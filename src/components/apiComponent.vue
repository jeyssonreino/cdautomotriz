<template>

    <div style="display: flex; justify-content: center; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;margin-top: 40px ;margin-bottom: 40px;" >
        <h1 >Tabla de clientes</h1>
    </div>
    <div style="margin-left: 40px;">    
        <router-link to="/GuardarView"><button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Guardar</button></router-link>
</div>


 <div style="display: flex; justify-content: center;">
    <div class="relative overflow-x-auto" >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    #
                </th>
                <th scope="col" class="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" class="px-6 py-3">
                    Teléfono
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Automovil
                </th>
                <th scope="col" class="px-6 py-3">
                    Empleo
                </th>
                <th scope="col" class="px-6 py-3">
                    Acciones
                </th>


            </tr>
        </thead>
        <tbody>
            <tr v-for="clientes in listado" :key="clientes.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ clientes.id }}
                </th>
                <td class="px-6 py-4">
                    {{ clientes.FirstName }}
                </td>
                <td class="px-6 py-4">
                    {{ clientes.PhoneNumber }}
                </td>
                <td class="px-6 py-4">
                    {{ clientes.Email }}      
                </td>
                <td class="px-6 py-4">
                    {{ clientes.Vehicle }}      
                </td>
                <td class="px-6 py-4">
                    {{ clientes.JobTitle }}      
                </td>
                <td class="px-6 py-4">
                    <div style="display: flex; ">
                        <div>
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Editar</button>
                    </div>     
                    <div>
                        <button type="button" @click="eliminar(clientes.id)" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Eliminar</button>

                    </div>

                    </div>

                </td>
            </tr>

        </tbody>
    </table>
</div>

 </div>  


</template>


<script>
import axios from 'axios'

export default (await import('vue')).defineComponent({

    data(){
        return{
            listado: Object
        }
    },


    mounted(){
        axios.get('https://apigenerator.dronahq.com/api/mQuVTsXk/mostrarClientes')
        .then(response =>{
            this.listado = response.data
        })
    },


    methods: {
        eliminar(id) {
            axios.delete('https://apigenerator.dronahq.com/api/mQuVTsXk/mostrarClientes/'+ id )
            location.reload();
        },

        guardar(){
            axios.post("https://apigenerator.dronahq.com/api/mQuVTsXk/mostrarClientes")
        },
        editar(){
            axios.put("https://apigenerator.dronahq.com/api/mQuVTsXk/mostrarClientes/1")
        }
    }
})








</script>

<router-view></router-view>