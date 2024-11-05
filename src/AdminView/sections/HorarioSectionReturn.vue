<template>
    <section class="py-10 bg-white">
        <div class="max-w-2xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h2 class="text-xl mb-4">Lista de Horários Agendados</h2>
            
           
            <input
                type="date"
                v-model="filtroData"
                @change="fetchHorarios"
                class="mb-4 p-2 border border-gray-300 rounded w-full"
            />

            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-[rgb(68,64,60)] text-white">
                        <th class="p-2 border border-gray-300">Nome do Funcionário</th>
                        <th class="p-2 border border-gray-300">Data e Hora</th>
                        <th class="p-2 border border-gray-300">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in horarios" :key="item.id" class="even:bg-gray-100 odd:bg-white">
                        <td class="p-2 border border-gray-300">{{ item.nome }}</td>
                        <td class="p-2 border border-gray-300">{{ new Date(item.data).toLocaleString() }}</td>
                        <td class="p-2 border border-gray-300">
                            <button
                                @click="deleteHorario(item.id)"
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
    name: 'HorarioList',
    data() {
        return {
            horarios: [],
            filtroData: '', 
        };
    },
    methods: {
        async fetchHorarios() {
            let url = 'http://localhost:3000/api/schedule/get';
            
      
            if (this.filtroData) {
                url += `?data_atual=${this.filtroData}`;
            }

            try {
                const response = await fetch(url);
                if (response.ok) {
                    this.horarios = await response.json();
                } else {
                    console.error("Erro ao buscar dados da API:", response.statusText);
                }
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
            }
        },
        async deleteHorario(id) {
            const toast = useToast();
            try {
                const response = await fetch(`http://localhost:3000/api/schedule/delete`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id }),
                });
                if (response.ok) {
                    this.horarios = this.horarios.filter(item => item.id !== id);
                    toast.success("Horário deletado com sucesso!");
                } else {
                    console.error("Erro ao apagar horário:", response.statusText);
                    toast.error("Erro ao apagar horário.");
                }
            } catch (error) {
                console.error("Erro ao apagar horário:", error);
                toast.error("Erro ao apagar horário.");
            }
        },
    },
    mounted() {
        this.fetchHorarios();
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
