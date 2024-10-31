<template>
    <!-- Início da seção de contato -->
	<section id="contact-section" class="px-12 lg:px-32 py-16 relative">
        <!-- Início do texto principal -->
		<h1 class="uppercase text-5xl mb-4 font-semibold ">
			Contate-nos
		</h1>
		<!-- Fim do texto principal -->

        <!-- Início do formulário -->
        <div class="grid grid-cols-1 md:grid-cols-2 w-full">
            <div class="hidden md:flex justify-center items-center">
                <img src="@/assets/camera.png" alt="Imagem de uma câmera">
            </div>
            <div class="flex flex-col w-full items-center">
                <label for="user_email" class="text-stone-500 text-left">Endereço de e-mail</label>
                <input type="email" name="user_email" id="user_email" class="bg-stone-200 py-2 px-4 w-full mb-6 xl:w-1/2">

                <label for="user_message" class="text-stone-500 text-left">Mensagem</label>
                <textarea name="user_message" id="user_message" cols="30" rows="10" class="bg-stone-200 py-2 px-4 w-full mb-6 xl:w-1/2"></textarea>

                <button class="btn w-full md:w-1/2">Enviar</button>
            </div>
        </div>
        <!-- Fim do formulário -->

        <!-- Início do círculo decorativo -->
        <div class="bg-neutral-200 h-44 w-44 md:h-52 md:w-52 rounded-full absolute -top-20 left-0 mt-16 -z-20"></div>
        <!-- Fim do círculo decorativo -->
	</section>
	<!-- Fim da seção de contato -->
</template>

<script>
export default {

}
</script>

<style>

</style>
