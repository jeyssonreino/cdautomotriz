<template>
  <div
    style="
      display: flex;
      justify-content: center;
      margin-top: 20px;
      font-size: 30px;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    "
  >
    <h1>Registrar mecánico</h1>
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
            v-model="nombre"
            type="text"
            id="first_name"
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
            v-model="telefono"
            type="text"
            id="first_name"
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
            v-model="email"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Guardar
      </button>
    </form>
  </div>
</template>
    
    <script>
import axios from 'axios'

export default {
  data() {
    return {
      nombre: '',
      telefono: '',
      email: ''
    }
  },
  methods: {
    enviarFormulario() {
      const data = {
        FirstName: this.nombre,
        PhoneNumber: this.telefono,
        Email: this.email
      }

      axios
        .post('https://apigenerator.dronahq.com/api/0pTs3Aom/mecanicos', data)
        .then((response) => {
          console.log(response.data)
          alert('Registro guardado exitosamente')
          window.location.href = '/MecanicosView'
        })
        .catch((error) => {
          alert('Error')
        })
    }
  }
}
</script>