
<template>
    <div style="display: flex; justify-content: center; margin-top: 20px; margin-bottom: 100px">
      <form @submit.prevent="enviarFormulario">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >vehiculo</label
            >
            <input
              v-model="cliente.Vehiculo"
              type="text"
              id="vehiculo"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >cilindros</label
            >
            <input
              v-model="cliente.Cilindros"
              type="text"
              id="cilindros"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >desplazameinto</label
            >
            <input
              v-model="cliente.Desplazamiento"
              type="text"
              id="desplazameinto"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >mpg</label
            >
            <input
              v-model="cliente.Mpg"
              type="text"
              id="mpg"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >peso</label
            >
            <input
              v-model="cliente.Peso"
              type="text"
              id="peso"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >aceleracion</label
            >
            <input
              v-model="cliente.Aceleracion"
              type="text"
              id="aceleracion"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >modelo</label
            >
            <input
              v-model="cliente.Modelo"
              type="text"
              id="modelo"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >caballos</label
            >
            <input
              v-model="cliente.caballos"
              type="text"
              id="caballos"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          

          



        </div>
  
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Actualizar
        </button>
      </form>
    </div>
  </template>
      
      <script>
  import axios from 'axios'
  import { useRoute } from 'vue-router'
  
  export default (await import('vue')).defineComponent({
    data() {
      return {
        id: null,
        cliente: {
            vehiculo: '',
            cilindros: '',
            desplazameinto: '',
            mpg: '',
            peso: '',
            aceleracion: '',
            modelo: '',
            caballos: '',
        }
      }
    },
  
    mounted() {
      this.id = this.$route.params.id;
      axios
        .get(`https://apigenerator.dronahq.com/api/0CbVSlDM/vehiculos/${this.id}`)
        .then((response) => {
          this.cliente = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
  
    methods: {
      enviarFormulario() {
        const data = {
            Vehiculo: this.vehiculo,
            Cilindros: this.cilindros,
            Desplazamiento: this.desplazamiento,
            Mpg: this.mpg,
            Peso: this.peso,
            Aceleracion: this.aceleracion,
            Modelo: this.modelo,
            caballos: this.caballos
        };
   
        axios.put(`https://apigenerator.dronahq.com/api/0CbVSlDM/vehiculos/${this.id}`, this.cliente)
          .then(response => {
            console.log(response.data);
            alert("Registro actualizado exitosamente")
            
            window.location.href = "/ResultadosView";
          })
          .catch(error => {
              alert("Error")
  
          });
      }
  
    }
  })
  </script>