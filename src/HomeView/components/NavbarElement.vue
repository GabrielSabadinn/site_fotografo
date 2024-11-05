<template>
    <!-- Início da Navbar -->
    <nav class="w-screen fixed bg-opacity-90 bg-white p-4 lg:px-20 flex justify-between z-50">
        <!-- Início do Logo -->
        <div class="h-full flex flex-col justify-center">
            <p class="tracking-widest font-semibold">PIAZZA</p>
            <p class="tracking-widest font-light">FOTOGRAFIA</p>
        </div>
        <!-- Fim do Logo -->

        <!-- Início do Toggler -->
        <button role="menubar" class="md:hidden" @click="navToggle()">
            <i class="fa-solid fa-bars text-2xl"></i>
        </button>
        <!-- Fim do Toggler -->

        <!-- Início do Conteúdo do Menu -->
        <div class="absolute left-0 right-0 translate-y-16 bg-opacity-90 bg-white md:bg-none md:bg-opacity-0 shadow hidden md:flex flex-col gap-4 items-center p-4 md:flex-row md:static md:shadow-none md:translate-y-0" role="menu" aria-expanded="false">
            <!-- Início dos Links -->
            <router-link to="/">
                <button class="btn" role="menuitem">
                    Home
                </button>
            </router-link>

            <router-link to="/admin">
                <button class="btn" role="menuitem">
                    Admin
                </button>
            </router-link>

            <router-link to="/login">
                <button class="btn" role="menuitem">
                    Login
                </button>
            </router-link>

            <!-- Botão de Sair -->
			<button class="btn" @click="logout" role="menuitem">Sair</button>
               
           
        </div>
        <!-- Fim do Conteúdo do Menu -->
    </nav>
    <!-- Fim da Navbar -->
</template>

<script>
import Cookies from 'js-cookie';

export default {
  methods: {
    navToggle() {
      let menu = document.querySelector("[role='menu']");
      let isExpanded = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', !isExpanded);
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
    },
    logout() {
      Cookies.remove('token');
      Cookies.remove('refreshToken');
      this.$router.push('/login');
    },
  },
};
</script>

<style>

</style>
