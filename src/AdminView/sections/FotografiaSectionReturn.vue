<template>
    <section class="py-10 bg-white">
        <div class="max-w-2xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h2 class="text-xl mb-4">Tabela de Dados da API</h2>
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-[rgb(68,64,60)] text-white">
                        <th class="p-2 border border-gray-300">Título</th>
                        <th class="p-2 border border-gray-300">URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in apiData" :key="item.id" class="even:bg-gray-100 odd:bg-white">
                        <td class="p-2 border border-gray-300">{{ item.titulo }}</td>
                        <td class="p-2 border border-gray-300">{{ item.url }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TabelaApi',
    data() {
        return {
            apiData: [], // Dados da API
        };
    },
    methods: {
        async fetchApiData() {
            // Substitua 'URL_DA_API_AQUI' pela URL da sua API
            try {
                const response = await fetch('URL_DA_API_AQUI');
                this.apiData = await response.json();
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
            }
        },
    },
    mounted() {
        this.fetchApiData(); // Carrega os dados ao montar o componente
    },
};
</script>

<style scoped>
/* Estilos adicionais podem ser adicionados aqui, se necessário */
</style>
