<template>
    <div class="bg-white"> <!-- Define o fundo branco -->
        <section class="pt-32 px-12 lg:px-32 mb-8">
            <div class="flex flex-col lg:flex-row lg:space-x-8">
                <!-- Coluna Esquerda -->
                <div class="flex-1 space-y-8">
                    <FuncionarioSection />
                    <HorarioSection />
                    <FotografiaSection />
                </div>
                
                <!-- Linha Divisória -->
                <div class="hidden lg:block w-px bg-gray-300"></div>
                
                <!-- Coluna Direita -->
                <div class="flex-1 space-y-8">
                    <FuncionarioSectionReturn />
                    <HorarioSectionReturn />
                    <FotografiaSectionReturn />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import FuncionarioSection from './sections/FuncionarioSection.vue';
import HorarioSection from './sections/HorarioSection.vue';
import FotografiaSection from './sections/FotografiaSection.vue';
import FotografiaSectionReturn from './sections/FotografiaSectionReturn.vue';
import FuncionarioSectionReturn from './sections/FuncionarioSectionReturn.vue';
import HorarioSectionReturn from './sections/HorarioSectionReturn.vue';

export default {
    components: {
        FuncionarioSection,
        HorarioSection,
        FotografiaSection,
        FotografiaSectionReturn,
        FuncionarioSectionReturn,
        HorarioSectionReturn,
    },
};
</script>

<style scoped>
.bg-white {
    background-color: white;
}
</style>
