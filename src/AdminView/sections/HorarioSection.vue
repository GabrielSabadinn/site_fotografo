<template>
    <section class="py-10 bg-white">
        <div class="max-w-2xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h2 class="text-xl mb-4">Agendamento de Horários</h2>
            <form @submit.prevent="agendarHorario">
                <select
                    v-model="horario.funcionario_id"  
                    required
                    class="mb-2 p-2 border border-gray-300 rounded w-full"
                >
                    <option disabled value="">Selecione um Funcionário</option>
                    <option v-for="funcionario in funcionarios" :key="funcionario.id" :value="funcionario.id">
                        {{ funcionario.nome }}
                    </option>
                </select>
                <input
                    type="datetime-local"
                    v-model="horario.data"
                    required
                    class="mb-4 p-2 border border-gray-300 rounded w-full"
                />
                <button type="submit"  class="w-full p-2 bg-[rgb(68,64,60)] hover:bg-gray-700 transition duration-300 rounded text-white">Agendar Horário</button>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification';

export default {
    name: 'HorarioSection',
    data() {
        return {
            horario: {
                funcionario_id: '', 
                data: '',
            },
            funcionarios: [], 
        };
    },
    async mounted() {
        await this.getFuncionarios();
    },
    methods: {
        async getFuncionarios() {
            try {
                const response = await axios.get('http://localhost:3000/api/funcionario/get');
                this.funcionarios = response.data;
            } catch (error) {
                console.error('Erro ao buscar funcionários:', error);
            }
        },
        async agendarHorario() {
            const toast = useToast();
            try {
                const response = await axios.post('http://localhost:3000/api/schedule/register', this.horario);
                if (response.status === 201) {
                    toast.success('Horário agendado com sucesso!');
                   
                    this.horario = { funcionario_id: '', data: '' }; 

                    
                    window.location.reload();
                }
            } catch (error) {
                toast.error('Erro ao agendar horário: ' + (error.response?.data?.message || 'Verifique os dados e tente novamente.'));
                console.error('Erro ao agendar horário:', error);
            }
        },
    },
};
</script>

<style scoped>
</style>
