<template>
    <section class="py-10 bg-white"> <!-- Alterado para bg-white -->
        <div class="max-w-2xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h2 class="text-xl mb-4">Agendamento de Horários</h2>
            <form @submit.prevent="agendarHorario">
                <input
                    type="text"
                    placeholder="Nome do Funcionário"
                    v-model="horario.funcionario"
                    required
                    class="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="datetime-local"
                    v-model="horario.dataHora"
                    required
                    class="mb-4 p-2 border border-gray-300 rounded w-full"
                />
                <button type="submit" class="w-full p-2 bg-[rgb(68,64,60)] hover:bg-gray-700 transition duration-300 rounded text-white">Agendar Horário</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HorarioSection',
    data() {
        return {
            horario: {
                funcionario: '',
                dataHora: '',
            },
        };
    },
    methods: {
        agendarHorario() {
            // Lógica para agendar horário
            console.log('Horário Agendado:', this.horario);
            // Limpar formulário
            this.horario = { funcionario: '', dataHora: '' };
        },
    },
};
</script>

<style scoped>
</style>
