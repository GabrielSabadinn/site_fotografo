<template>
    <section class="py-10 bg-white">
        <div class="max-w-2xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h2 class="text-xl mb-4">Lista de Horários Agendados</h2>
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-[rgb(68,64,60)] text-white">
                        <th class="p-2 border border-gray-300">Nome do Funcionário</th>
                        <th class="p-2 border border-gray-300">Data e Hora</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in horarios" :key="item.id" class="even:bg-gray-100 odd:bg-white">
                        <td class="p-2 border border-gray-300">{{ item.funcionario }}</td>
                        <td class="p-2 border border-gray-300">{{ new Date(item.dataHora).toLocaleString() }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HorarioList',
    data() {
        return {
            horarios: [], // Lista de horários obtida da API
        };
    },
    methods: {
        async fetchHorarios() {
            try {
                const response = await fetch('URL_DA_API_AQUI');
                this.horarios = await response.json();
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
            }
        },
    },
    mounted() {
        this.fetchHorarios(); // Carrega os dados dos horários ao montar o componente
    },
};
</script>

<style scoped>
</style>
