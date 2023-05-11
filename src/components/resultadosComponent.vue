<template>
    <div style="display: flex">
      <div>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
  
        <aside
          id="default-sidebar"
          class="top-15px left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0 "
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-cyan-950 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-cyan-700 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span class="ml-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="/DashboardView"
                  class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-cyan-700 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Registrar turno </span>
                </a>
              </li>
              <li>
                <a
                  href="/MecanicosView"
                  class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-cyan-700 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                    ></path>
                    <path
                      d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Registrar mecanicos</span>
                </a>
              </li>
              <li>
                <a
                  href="/ResultadosView"
                  class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-cyan-700 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Registrar resultados</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
  
      <div style="background-color:background-color: rgb(203 213 225);; width: 100%;">
        <div
          style="
            display: flex;
            justify-content: center;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            margin-top: 40px;
            margin-bottom: 40px;
          "
        >
          <h1>Información de los vehiculos</h1>
        </div>
        <div style="margin-left: 40px">
          <router-link to="/GuardarVView"
            ><button
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Registrar un resultado
            </button></router-link
          >
        </div>
  
        <div  style="display: flex; justify-content: center">
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">#</th>
                  <th scope="col" class="px-6 py-3">Vehiculo</th>
                  <th scope="col" class="px-6 py-3">Cilindros</th>
                  <th scope="col" class="px-6 py-3">Desplazamineto</th>
                  <th scope="col" class="px-6 py-3">MPG</th>
                  <th scope="col" class="px-6 py-3">Peso</th>
                  <th scope="col" class="px-6 py-3">Aceleracion</th>
                  <th scope="col" class="px-6 py-3">Modelo</th>
                  <th scope="col" class="px-6 py-3">Caballos de fuerza</th>
                  <th scope="col" class="px-6 py-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="vehiculos in listado"
                  :key="vehiculos.id"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ vehiculos.id }}
                  </th>
                  <td class="px-6 py-4">
                    {{ vehiculos.Vehiculo }}
                  </td>
                  <td class="px-6 py-4">
                    {{ vehiculos.Cilindros }}
                  </td>
                  <td class="px-6 py-4">
                    {{ vehiculos.Desplazamiento }}
                  </td>
                  <td class="px-6 py-4">
                    {{ vehiculos.Mpg }}
                  </td>
                  <td class="px-6 py-4">
                    {{ vehiculos.Peso }}
                  </td>
                  <td class="px-6 py-4">
                    {{ vehiculos.Aceleracion }}
                  </td>
                  <td class="px-6 py-4">
                    {{ vehiculos.Modelo }}
                  </td>
                  <td class="px-6 py-4">
                    {{ vehiculos.caballos }}
                  </td>
                  <td class="px-6 py-4">
                    <div style="display: flex; flex-wrap: wrap;">
                      <div>
                        <router-link :to="'/EditarVView/' + vehiculos.id">
                          <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          >
                            Editar
                          </button>
                        </router-link>
                      </div>
                      <div>
                        <button
                          type="button"
                          @click="eliminar(vehiculos.id)"
                          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default (await import('vue')).defineComponent({
    data() {
      return {
        listado: Object
      }
    },
  
    mounted() {
      axios.get('https://apigenerator.dronahq.com/api/0CbVSlDM/vehiculos').then((response) => {
        this.listado = response.data
      })
    },
  
    methods: {
      eliminar(id) {
        axios
          .delete('https://apigenerator.dronahq.com/api/0CbVSlDM/vehiculos/' + id)
          .then((response) => {
            alert('Registro eliminado exitosamente')
            setTimeout(() => {
              location.reload()
            }, 1000) // espera 5 segundos (5000 milisegundos) antes de recargar la página
          })
          .catch((error) => {
            console.error(error)
          })
      },
  
      guardar() {
        axios.post('https://apigenerator.dronahq.com/api/0CbVSlDM/vehiculos')
      },
      editar() {
        axios.put('https://apigenerator.dronahq.com/api/0CbVSlDM/vehiculos/1')
      }
    }
  })
  </script>
  
  <router-view></router-view>
  