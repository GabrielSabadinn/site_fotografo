<template>
    <section class="py-10 bg-white">
        <div class="max-w-2xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h2 class="text-xl mb-4">Galeria de Fotografia</h2>
            <form @submit.prevent="adicionarFoto" class="mb-4">
                <input
                    type="text"
                    placeholder="Título da Foto"
                    v-model="foto.titulo"
                    required
                    class="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="url"
                    placeholder="URL da Imagem"
                    v-model="foto.url_imagem"
                    required
                    class="mb-4 p-2 border border-gray-300 rounded w-full"
                />
                <button type="submit" class="w-full p-2 bg-[rgb(68,64,60)] hover:bg-gray-700 transition duration-300 rounded text-white">Adicionar Foto</button>
            </form>
            <div class="galeria grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="item in fotos" :key="item.url_imagem" class="foto bg-[rgb(68,64,60)] rounded-lg overflow-hidden">
                    <img :src="item.url_imagem" :alt="item.titulo" class="w-full h-32 object-cover" />
                    <p class="text-center p-2 text-white">{{ item.titulo }}</p> 
                </div>
            </div>
        
            <button 
                v-if="fotos.length > 0" 
                @click="reloadPage"
                class="w-full p-4 bg-[rgb(68,64,60)] hover:bg-gray-700 transition duration-300 rounded text-white mt-4"
            >
                Enviar Foto
            </button>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification';

export default {
    name: 'FotografiaSection',
    data() {
        return {
            foto: {
                titulo: '',
                url_imagem: '',
            },
            fotos: [],
        };
    },
    methods: {
        async adicionarFoto() {
            const toast = useToast();
            try {
        
                const response = await axios.post('http://localhost:3000/api/gallery/register', this.foto);
                
              
                if (response.status === 201) {
               
                    this.fotos.push({ titulo: this.foto.titulo, url_imagem: this.foto.url_imagem });
                    toast.success('Foto adicionada com sucesso!');
                
                    this.foto = { titulo: '', url_imagem: '' };
                }
            } catch (error) {
             
                toast.error('Erro ao adicionar foto: ' + (error.response?.data?.message || 'Verifique os dados e tente novamente.'));
                console.error('Erro ao adicionar foto:', error);
            }
        },
        reloadPage() {
            location.reload(); 
        },
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
