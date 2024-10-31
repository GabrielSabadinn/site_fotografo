<template>
    <section class="py-10 bg-white"> <!-- Alterado para bg-white -->
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
                    v-model="foto.url"
                    required
                    class="mb-4 p-2 border border-gray-300 rounded w-full"
                />
                <button type="submit" class="w-full p-2 bg-[rgb(68,64,60)] hover:bg-gray-700 transition duration-300 rounded text-white">Adicionar Foto</button>
            </form>
            <div class="galeria grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="item in fotos" :key="item.url" class="foto bg-gray-600 rounded-lg overflow-hidden">
                    <img :src="item.url" :alt="item.titulo" class="w-full h-32 object-cover" />
                    <p class="text-center p-2">{{ item.titulo }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FotografiaSection',
    data() {
        return {
            foto: {
                titulo: '',
                url: '',
            },
            fotos: [],
        };
    },
    methods: {
        adicionarFoto() {
            // Lógica para adicionar foto à galeria
            this.fotos.push({ titulo: this.foto.titulo, url: this.foto.url });
            console.log('Foto Adicionada:', this.foto);
            // Limpar formulário
            this.foto = { titulo: '', url: '' };
        },
    },
};
</script>

<style scoped>
/* Estilos adicionais podem ser adicionados aqui, se necessário */
</style>
