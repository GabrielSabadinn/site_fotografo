<template>
    <section class="py-10 bg-white">
        <div class="max-w-2xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h2 class="text-xl mb-4">Lista de Funcionários</h2>
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-[rgb(68,64,60)] text-white">
                        <th class="p-2 border border-gray-300">Nome</th>
                        <th class="p-2 border border-gray-300">E-mail</th>
                        <th class="p-2 border border-gray-300">Telefone</th>
                        <th class="p-2 border border-gray-300">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in funcionarios" :key="item.id" class="even:bg-gray-100 odd:bg-white">
                        <td class="p-2 border border-gray-300 text-black">{{ item.nome }}</td>
                        <td class="p-2 border border-gray-300 text-black">{{ item.email }}</td>
                        <td class="p-2 border border-gray-300 text-black">{{ item.telefone }}</td>
                        <td class="p-2 border border-gray-300">
                            <button
                                @click="deleteFuncionario(item.id)"
                                class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all"
                            >
                                Apagar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import { useToast } from 'vue-toastification';

export default {
    name: 'FuncionarioList',
    data() {
        return {
            funcionarios: [],
        };
    },
    methods: {
        async fetchFuncionarios() {
            try {
                const response = await fetch('http://localhost:3000/api/funcionario/get');
                if (response.ok) {
                    this.funcionarios = await response.json();
                } else {
                    console.error("Erro ao buscar dados da API:", response.statusText);
                }
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
            }
        },
        async deleteFuncionario(id) {
            const toast = useToast();
            try {
                const response = await fetch(`http://localhost:3000/api/funcionario/delete`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id }),
                });
                if (response.ok) {
                    this.funcionarios = this.funcionarios.filter(item => item.id !== id);
                    toast.success("Funcionário deletado com sucesso!");
                } else {
                    console.error("Erro ao apagar funcionário:", response.statusText);
                    toast.error("Erro ao apagar funcionário.");
                }
            } catch (error) {
                console.error("Erro ao apagar funcionário:", error);
                toast.error("Erro ao apagar funcionário.");
            }
        },
    },
    mounted() {
        this.fetchFuncionarios();
    },
};
</script>

<style scoped>
table {
    border-collapse: collapse;
    width: 100%;
}

th {
    background-color: rgb(68, 64, 60);
    color: white;
}

td {
    color: black;
}

tr:hover {
    background-color: rgba(68, 64, 60, 0.1);
}
</style>
