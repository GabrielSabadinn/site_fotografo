<template>
    <!-- Início da seção de Serviços -->
	<section id="services-section" class="px-12 lg:px-32 py-16 relative overflow-hidden">
        <!-- Início do texto principal -->
        <div class="flex gap-8 flex-col md:flex-row">
            <!-- Título principal -->
            <h1 class="uppercase text-5xl mb-4 font-semibold ">
                NOSSOS SERVIÇOS
            </h1>
            <p class="capitalize xl:w-1/2 text-stone-500 mb-8">
                Oferecemos serviços personalizados de fotografia, capturando momentos únicos e inesquecíveis. 
                Com uma equipe experiente e apaixonada, garantimos registros que emocionam e duram para sempre.
            </p>
            <!-- Fim do texto principal -->
        </div>
        <!-- Fim do texto principal -->

        <!-- Início dos Serviços -->
        <div class="flex flex-col md:flex-row md:gap-8">
            <!-- Início do serviço Casamento -->
            <div class="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start my-8 md:w-1/3">
                <img src="@/assets/services/wedding.png" alt="Casamento" class="-z-50 md:mb-4">
                <div class="w-2/3 text-right md:text-left md:w-full">
                    <h1 class="uppercase text-2xl font-semibold">
                        Casamento
                    </h1>
                    <p class="capitalize text-stone-500">
                        Momentos que merecem ser eternizados, com todo o amor e emoção que esse dia especial representa.
                    </p>
                </div>
            </div>
            <!-- Fim do serviço Casamento -->

            <!-- Início do serviço Estilo de Vida -->
            <div class="flex flex-row md:flex-col justify-between items-center md:items-start my-8 md:w-1/3">
                <div class="w-2/3 text-left md:w-full md:order-2">
                    <h1 class="uppercase text-2xl font-semibold">
                        Estilo de Vida
                    </h1>
                    <p class="capitalize text-stone-500">
                        Capturamos a essência do seu dia a dia, destacando sua autenticidade e personalidade.
                    </p>
                </div>
                <img src="@/assets/services/lifestyle.png" alt="Estilo de Vida" class="-z-50 md:mb-4 md:order-1">
            </div>
            <!-- Fim do serviço Estilo de Vida -->

            <!-- Início do serviço Momentos -->
            <div class="flex flex-row md:flex-col justify-between items-center md:items-start my-8 md:w-1/3">
                <div class="w-1/3">
                    <img src="@/assets/services/moments.png" alt="Momentos" class="-z-50 md:mb-4">
                </div>
                <div class="w-2/3 text-right md:text-left md:w-full">
                    <h1 class="uppercase text-2xl font-semibold">
                        Momentos
                    </h1>
                    <p class="capitalize text-stone-500">
                        Fotografamos momentos especiais com sensibilidade e cuidado, registrando emoções genuínas.
                    </p>
                </div>
            </div>
            <!-- Fim do serviço Momentos -->
        </div>
        <!-- Fim dos Serviços -->

        <!-- Início do círculo decorativo -->
        <div class="bg-neutral-300 h-64 w-64 rounded-full absolute top-0 -right-20 mt-16 -z-20"></div>
        <!-- Fim do círculo decorativo -->
	</section>
	<!-- Fim da seção de Serviços -->
</template>

<script>
export default {

}
</script>

<style>

</style>
