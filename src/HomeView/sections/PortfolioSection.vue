<template>

	<section id="portfolio-section" class="px-4 lg:px-8 py-16  relative">
        
        <div class="flex gap-8 flex-col md:flex-row">
          
             <h1 class="uppercase text-5xl mb-4 font-semibold ">
                NOSSO PORTFÓLIO
            </h1>
            <p class="capitalize xl:w-1/2 text-stone-500 mb-8">
                Confira nosso portfólio e veja como capturamos cada detalhe e emoção em imagens autênticas e inesquecíveis.
            </p>

        
        </div>


  
		<div class="grid-cols-2 md:grid-cols-5 grid mb-8 gap-4">
            <div class="grid grid-cols-1 md:hidden gap-4">
                <img src="@/assets/portfolio/portfolio1.jpg" alt="1" class="rounded-xl">
                <img src="@/assets/portfolio/portfolio2.jpg" alt="2" class="rounded-xl">
                <img src="@/assets/portfolio/portfolio3.jpg" alt="3" class="rounded-xl">
                <img src="@/assets/portfolio/portfolio4.jpg" alt="4" class="rounded-xl">
                <img src="@/assets/portfolio/portfolio5.jpg" alt="5" class="rounded-xl">
            </div>
            <div class="grid grid-cols-1 md:hidden gap-4">
                <img src="@/assets/portfolio/portfolio6.jpg" alt="6" class="rounded-xl">
                <img src="@/assets/portfolio/portfolio7.jpg" alt="7" class="rounded-xl">
                <img src="@/assets/portfolio/portfolio8.jpg" alt="8" class="rounded-xl">
                <img src="@/assets/portfolio/portfolio9.jpg" alt="9" class="rounded-xl">
                <img src="@/assets/portfolio/portfolio10.jpg" alt="10" class="rounded-xl">
            </div>

            <div class="hidden md:flex flex-col gap-4">
                <img src="@/assets/portfolio/portfolio1.jpg" alt="1" class="rounded-xl">
                <img src="@/assets/portfolio/portfolio2.jpg" alt="2" class="rounded-xl">
            </div>
            <div class="hidden md:flex flex-col gap-4">
                <img src="@/assets/portfolio/portfolio3.jpg" alt="1" class="rounded-xl">
                <img src="@/assets/portfolio/portfolio4.jpg" alt="2" class="rounded-xl">
            </div>
            <div class="hidden md:flex flex-col gap-4">
                <img src="@/assets/portfolio/portfolio8.jpg" alt="2" class="rounded-xl">
                <img src="@/assets/portfolio/portfolio5.jpg" alt="2" class="rounded-xl">
            </div>
            <div class="hidden md:flex flex-col gap-4">
                <img src="@/assets/portfolio/portfolio7.jpg" alt="1" class="rounded-xl">
                <img src="@/assets/portfolio/portfolio6.jpg" alt="2" class="rounded-xl">
            </div>
            <div class="hidden md:flex flex-col gap-4">
                <img src="@/assets/portfolio/portfolio9.jpg" alt="1" class="rounded-xl">
                <img src="@/assets/portfolio/portfolio10.jpg" alt="2" class="rounded-xl">
            </div>
        </div>
	

     
        <a href="#" class="text-end">
            <p class="font-semibold text-lg group relative">
                <span>Veja mais fotos </span>
                <i class="fa-solid fa-arrow-right"></i>
            </p>
        </a>
   

      
        <div class="bg-neutral-300 h-64 w-64 rounded-full absolute top-0 left-0 mt-16 -z-20"></div>
      
	</section>

</template>

<script>
export default {

}
</script>

<style>

</style>