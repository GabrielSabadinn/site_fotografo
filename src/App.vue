<template>
    <div>
        <navbar-element></navbar-element>
        
        <!-- Exibe o componente correspondente à rota -->
        <router-view></router-view>

        <footer-element></footer-element>
    </div>
</template>

<script>
import NavbarElement from './HomeView/components/NavbarElement.vue';
import FooterElement from './HomeView/components/FooterElement.vue';

export default {
    components: {
        NavbarElement,
        FooterElement,
    }
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
</style>
