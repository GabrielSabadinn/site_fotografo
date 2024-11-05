<template>
    <section class="py-10 bg-white">
        <div class="max-w-2xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h2 class="text-xl mb-4">Fotos</h2>
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-[rgb(68,64,60)] text-white">
                        <th class="p-2 border border-gray-300">Título</th>
                        <th class="p-2 border border-gray-300">Imagem</th>
                        <th class="p-2 border border-gray-300">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in apiData" :key="item.id" class="even:bg-gray-100 odd:bg-white">
                        <td class="p-2 border border-gray-300">{{ item.titulo }}</td>
                        <td class="p-2 border border-gray-300">
                            <img :src="item.url_imagem" alt="Imagem" class="w-16 h-16 object-cover" />
                        </td>
                        <td class="p-2 border border-gray-300">
                            <button
                                @click="deleteItem(item.id)"
                                class="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-all"
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
import 'vue-toastification/dist/index.css';

export default {
    name: 'TabelaApi',
    data() {
        return {
            apiData: [],
        };
    },
    methods: {
        async fetchApiData() {
            try {
                const response = await fetch('http://localhost:3000/api/gallery/get');
                if (response.ok) {
                    this.apiData = await response.json();
                } else {
                    console.error("Erro ao buscar dados da API:", response.statusText);
                }
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
            }
        },
        async deleteItem(id) {
            const toast = useToast();
            try {
                const response = await fetch(`http://localhost:3000/api/gallery/delete`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id }), 
                });
                if (response.status === 204 || response.status === 200) {
                    // Remove o item da tabela
                    this.apiData = this.apiData.filter(item => item.id !== id);
                    // Exibe toast de sucesso
                    toast.success("Item deletado com sucesso!");
                } else {
                    console.error("Erro ao apagar item da API:", response.statusText);
                    toast.error("Erro ao apagar item.");
                }
            } catch (error) {
                console.error("Erro ao apagar item da API:", error);
                toast.error("Erro ao apagar item.");
            }
        },
    },
    mounted() {
        this.fetchApiData();
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
