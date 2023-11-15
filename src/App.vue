<template>
    <Header />
    <router-view />
    <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        Header,
        Footer,
    },
};
</script>
<style lang="scss">
* {
    font-family: sans-serif;
    box-sizing: border-box;
}

h3 {
    margin-top: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
    color: mediumblue;
    text-decoration: none;
}
</style>
