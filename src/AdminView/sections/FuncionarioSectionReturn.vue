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
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in funcionarios" :key="item.id" class="even:bg-gray-100 odd:bg-white">
                        <td class="p-2 border border-gray-300">{{ item.nome }}</td>
                        <td class="p-2 border border-gray-300">{{ item.email }}</td>
                        <td class="p-2 border border-gray-300">{{ item.telefone }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FuncionarioList',
    data() {
        return {
            funcionarios: [], // Dados da API
        };
    },
    methods: {
        async fetchFuncionarios() {
            try {
                const response = await fetch('URL_DA_API_AQUI');
                this.funcionarios = await response.json();
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
            }
        },
    },
    mounted() {
        this.fetchFuncionarios(); // Carrega os dados ao montar o componente
    },
};
</script>

<style scoped>
</style>
