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
							<input type="email" placeholder="E-mail" v-model="email" required class="mb-2 p-2 border rounded w-full" />
							<input type="password" placeholder="Senha" v-model="password" required class="mb-4 p-2 border rounded w-full" />
							<button type="submit" class="w-full p-2 bg-brown-700 text-white rounded transition-all duration-300 hover:bg-white hover:text-brown-700">Entrar</button>
						</form>
						<!-- Link para recuperação de senha -->
						<p class="mt-4 text-sm text-center">
							<a href="#" @click.prevent="openModal" class="text-blue-600 hover:underline">Esqueceu a Senha?</a>
						</p>
					</div>
					<div v-else>
						<h2 class="text-xl mb-4">Registro</h2>
						<form @submit.prevent="handleRegister">
							<input type="email" placeholder="E-mail" v-model="email" required class="mb-2 p-2 border rounded w-full" />
							<input type="password" placeholder="Senha" v-model="password" required class="mb-4 p-2 border rounded w-full" />
							<button type="submit" class="w-full p-2 bg-brown-700 text-white rounded transition-all duration-300 hover:bg-white hover:text-brown-700">Registrar</button>
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
						<input type="email" placeholder="E-mail" v-model="resetEmail" required class="mb-2 p-2 border rounded w-full" />
						<button type="submit" class="w-full p-2 bg-brown-700 text-black rounded transition-all duration-300 hover:bg-white hover:text-brown-700">Enviar Link de Redefinição</button>
					</form>
					<button class="mt-4 w-full p-2 border rounded bg-gray-300 text-white " @click="closeModal">Fechar</button>
				</div>
			</div>
		</transition>
	</section>
</template>

<script>
export default {
    data() {
        return {
            isLogin: true,
            email: '',
            password: '',
            isModalOpen: false, // Controla a visibilidade do modal
            resetEmail: '', // Armazena o email para redefinição
        };
    },
    methods: {
        showLogin() {
            this.isLogin = true;
        },
        showRegister() {
            this.isLogin = false;
        },
        handleLogin() {
            // Lógica de login
            console.log('Login', this.email, this.password);
        },
        handleRegister() {
            // Lógica de registro
            console.log('Registro', this.email, this.password);
        },
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
            this.resetEmail = ''; // Limpa o campo de email ao fechar o modal
        },
        handleResetPassword() {
            // Lógica para redefinição de senha
            console.log('Requisição de redefinição de senha para:', this.resetEmail);
            // Aqui você pode fazer a chamada à API para enviar o link de redefinição
            this.closeModal(); // Fecha o modal após o envio
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
.modal-enter, .modal-leave-to /* .modal-leave-active in <2.1.8 */ {
    opacity: 0;
}
</style>
