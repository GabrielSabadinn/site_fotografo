<template>
    <section class="py-10 bg-white">
        <div class="max-w-2xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h2 class="text-xl mb-4">Cadastro de Funcionário</h2>
            <form @submit.prevent="cadastrarFuncionario">
                <input
                    type="text"
                    placeholder="Nome"
                    v-model="funcionario.nome"
                    required
                    class="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    v-model="funcionario.email"
                    required
                    class="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="tel"
                    placeholder="Telefone"
                    v-model="funcionario.telefone"
                    required
                    class="mb-4 p-2 border border-gray-300 rounded w-full"
                />
                <button type="submit"  class="w-full p-2 bg-[rgb(68,64,60)] hover:bg-gray-700 transition duration-300 rounded text-white">Cadastrar Funcionário</button>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification'; 

export default {
    name: 'FuncionarioSection',
    data() {
        return {
            funcionario: {
                nome: '',
                email: '',
                telefone: '',
            },
            toast: useToast() 
        };
    },
    methods: {
        async cadastrarFuncionario() {
            try {
                const response = await axios.post('http://localhost:3000/api/funcionario/register', this.funcionario);
                if (response.status === 201) {
                   
                    this.toast.success('Funcionário cadastrado com sucesso!');
                    
                    this.funcionario = { nome: '', email: '', telefone: '' };

                    
                    window.location.reload();
                }
            } catch (error) {
              
                this.toast.error(`Erro ao cadastrar funcionário: ${error.response?.data?.message || error.message}`);
            }
        },
    },
};
</script>

<style scoped>

</style>
