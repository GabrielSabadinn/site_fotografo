<template>
    <section class="h-screen flex items-center justify-center px-12 lg:px-32">
      <div class="w-full md:w-1/2">
        <div class="form-wrapper">
          <div class="tabs flex justify-around mb-4">
            <button @click="showLogin" :class="{ active: isLogin }">Login</button>
            <button @click="showRegister" :class="{ active: !isLogin }">Registro</button>
          </div>
          <div class="form-container p-4 border rounded-lg shadow-md bg-white">
            <div v-if="isLogin">
              <h2 class="text-xl mb-4">Login</h2>
              <form @submit.prevent="handleLogin">
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  v-model="email" 
                  required 
                  class="mb-2 p-2 border rounded w-full" 
                />
                <input 
                  type="password" 
                  placeholder="Senha" 
                  v-model="password" 
                  required 
                  class="mb-4 p-2 border rounded w-full" 
                />
                <button 
                  type="submit" 
                  class="w-full p-2 bg-brown-700 text-white rounded transition-all duration-300 hover:bg-white hover:text-brown-700"
                >
                  Entrar
                </button>
              </form>
              <p class="mt-4 text-sm text-center">
                <a href="#" @click.prevent="openModal" class="text-blue-600 hover:underline">Esqueceu a Senha?</a>
              </p>
            </div>
            <div v-else>
              <h2 class="text-xl mb-4">Registro</h2>
              <form @submit.prevent="handleRegister">
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  v-model="email" 
                  required 
                  class="mb-2 p-2 border rounded w-full" 
                />
                <input 
                  type="password" 
                  placeholder="Senha" 
                  v-model="password" 
                  required 
                  class="mb-4 p-2 border rounded w-full" 
                />
                <button 
                  type="submit" 
                  class="w-full p-2 bg-brown-700 text-white rounded transition-all duration-300 hover:bg-white hover:text-brown-700"
                >
                  Registrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal para redefinição de senha -->
      <transition name="modal">
        <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
          <div class="modal-content">
            <h2 class="text-xl mb-4">Redefinir Senha</h2>
            <form @submit.prevent="handleResetPassword">
              <input 
                type="email" 
                placeholder="E-mail" 
                v-model="resetEmail" 
                required 
                class="mb-2 p-2 border rounded w-full" 
              />
              <button 
                type="submit" 
                class="w-full p-2 bg-brown-700 text-black rounded transition-all duration-300 hover:bg-white hover:text-brown-700"
              >
                Enviar Link de Redefinição
              </button>
            </form>
            <button 
              class="mt-4 w-full p-2 border rounded bg-gray-300 text-white" 
              @click="closeModal"
            >
              Fechar
            </button>
          </div>
        </div>
      </transition>
    </section>
  </template>
  
  <script>
  import Cookies from 'js-cookie';
  import { useToast } from 'vue-toastification';
  
  export default {
    data() {
      return {
        isLogin: true,
        email: '',
        password: '',
        isModalOpen: false,
        resetEmail: '',
        toast: null, // Adicionando uma propriedade para o toast
      };
    },
    created() {
      // Inicializando o toast
      this.toast = useToast();
    },
    methods: {
      showLogin() {
        this.isLogin = true;
      },
      showRegister() {
        this.isLogin = false;
      },
      async handleLogin() {
        try {
          const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
            }),
          });
  
          const data = await response.json();
  
          if (response.ok) {
            Cookies.set('token', data.token);
            Cookies.set('refreshToken', data.refreshToken);
            this.$router.push('/admin');
          } else {
            // Exibindo somente a mensagem de erro retornada pela API
            this.toast.error(data.error);
          }
        } catch (error) {
          // Apenas mostrando o erro da API
          this.toast.error(error.message);
        }
      },
      async handleRegister() {
        if (!this.email || !this.password) {
          this.toast.error("Por favor, preencha todos os campos."); // Usando toast
          return;
        }
  
        try {
          const response = await fetch('http://localhost:3000/api/admin/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
            }),
          });
  
          if (response.ok) {
            this.toast.success("Registro bem-sucedido! Você pode fazer login agora."); // Usando toast
            this.showLogin(); // Redirecionar para a tela de login
          } else {
            const data = await response.json();
            // Exibindo somente a mensagem de erro retornada pela API
            this.toast.error(data.error);
          }
        } catch (error) {
          // Apenas mostrando o erro da API
          this.toast.error(error.message);
        }
      },
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
        this.resetEmail = '';
      },
      handleResetPassword() {
        console.log('Requisição de redefinição de senha para:', this.resetEmail);
        this.closeModal(); 
      },
    },
  };
  </script>
  
  
  
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
  }
  
  button {
    transition: background-color 0.3s ease, color 0.3s ease;
    background-color: rgb(68 64 60 / var(--tw-bg-opacity));
  }
  
  button:hover {
    color: rgb(68, 64, 60, var(--tw-bg-opacity));
    background-color: white;
  }
  
  .active {
    font-weight: bold;
    border-bottom: 2px solid rgb(68, 64, 60, var(--tw-bg-opacity));
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
  }
  
  .modal-enter-active, .modal-leave-active {
    transition: opacity 0.3s;
  }
  .modal-enter, .modal-leave-to {
    opacity: 0;
  }
  </style>
  