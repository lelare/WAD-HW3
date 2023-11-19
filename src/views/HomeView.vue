<template>
    <main class="flex-wrapper">
        <aside></aside>
        <div>
            <PostsList />
            <button class="reset-button" v-on:click="ResetLikes">Reset Likes</button>
        </div>
        <aside></aside>
    </main>
</template>

<script>
import PostsList from "@/components/PostsList.vue";

export default {
    name: "HomeView",
    components: {
        PostsList,
    },
    methods: {
        ResetLikes: function () {
            this.$store.dispatch("ResetLikesAct");
        },
    },
};
</script>

<style lang="scss">
main {
    padding: 25px 0;
    display: flex;
    justify-content: center;
    gap: 15px;
}

aside {
    flex: 0.5 1 0;
    background-color: lightgray;
    border: 1px solid darkgray;
    border-radius: 10px;
    padding: 15px;
}

section {
    flex: 2 0 0;
}

.reset-button {
    margin: 0 auto;
    padding: 0 20px;
    height: 36px;
    background-color: blue;
    color: #fff;
}

@media (min-width: 481px) {
    section.section-small {
        flex: 0 0 300px;
    }
}

@media (max-width: 480px) {
    section {
        flex: 0 0 85vw;
    }
    aside {
        display: none;
    }
}
</style>
