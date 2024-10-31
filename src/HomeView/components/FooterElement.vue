<template>
    <!-- Início do Rodapé -->
    <div class="bg-stone-700 w-full flex justify-center items-center md:justify-evenly flex-col md:flex-row gap-8 p-8">
        <!-- Início da Visão Geral -->
        <div class="text-stone-100 text-center">
            <p class="tracking-widest font-semibold text-stone-100">PIAZZA</p>
            <p class="tracking-widest font-light text-stone-100">FOTOGRAFIA</p>
        </div>
        <!-- Fim da Visão Geral -->

        <!-- Início dos Links -->
        <div class="text-stone-100 flex justify-center items-center gap-8">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram socialIcon"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin socialIcon"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-facebook socialIcon"></i>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-dribbble socialIcon"></i>
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-pinterest socialIcon"></i>
            </a>
        </div>
        <!-- Fim dos Links -->
    </div>
    <!-- Fim do Rodapé -->
</template>

<script>
export default {
}
</script>

<style>
.socialIcon {
    font-size: 24px;
    transition: color 0.3s;
}

.socialIcon:hover {
    color: #f9c74f; 
}
</style>
