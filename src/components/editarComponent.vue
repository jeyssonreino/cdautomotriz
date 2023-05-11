
<template>
    <div style="display: flex; justify-content: center; margin-top: 20px; font-size: 30px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; ;">
    <h1>Editar turno</h1>
  </div>
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
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Teléfono</label
          >
          <input
            v-model="cliente.PhoneNumber"
            type="text"
            id="numero"
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
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Automovil</label
          >
          <input
            v-model="cliente.Vehicle"
            type="text"
            id="automovil"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Empleo</label
          >
          <input
            v-model="cliente.JobTitle"
            type="text"
            id="empleo"
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
        numero: '',
        email: '',
        automovil: '',
        empleo: ''
      }
    }
  },

  mounted() {
    this.id = this.$route.params.id
    axios
      .get(`https://apigenerator.dronahq.com/api/mQuVTsXk/mostrarClientes/${this.id}`)
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
        PhoneNumber: this.numero,
        Email: this.emaill,
        Vehicle: this.automovil,
        JobTitle: this.empleo
      }

      axios
        .put(
          `https://apigenerator.dronahq.com/api/mQuVTsXk/mostrarClientes/${this.id}`,
          this.cliente
        )
        .then((response) => {
          console.log(response.data)
          alert('Registro actualizado exitosamente')

          window.location.href = '/DashboardView'
        })
        .catch((error) => {
          alert('Error')
        })
    }
  }
})
</script>