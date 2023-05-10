
<template>
    <div style="display: flex; justify-content: center; margin-top: 20px; margin-bottom: 100px">
      <form @submit.prevent="enviarFormulario">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Nombre</label
            >
            <input
              v-model="cliente.FirstName"
              type="text"
              id="nombre"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Apellido</label
            >
            <input
              v-model="cliente.LastName"
              type="text"
              id="nombre"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >email</label
            >
            <input
              v-model="cliente.Email"
              type="text"
              id="email"
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
          nombre: '',
          apellido: '',
          email: '',
        }
      }
    },
  
    mounted() {
      this.id = this.$route.params.id;
      axios
        .get(`https://apigenerator.dronahq.com/api/0pTs3Aom/mecanicos/${this.id}`)
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
          FirstName: this.nombre,
          LastName: this.apellido,
          Email: this.emaill,
        };
   
        axios.put(`https://apigenerator.dronahq.com/api/0pTs3Aom/mecanicos/${this.id}`, this.cliente)
          .then(response => {
            console.log(response.data);
            alert("Registro actualizado exitosamente")
            
            window.location.href = "/MecanicosView";
          })
          .catch(error => {
              alert("Error")
  
          });
      }
  
    }
  })
  </script>