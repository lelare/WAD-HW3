<template>
    <section id="box-wrapper">
        <PostsItem />
        <PostsItem />
        <PostsItem />
        <PostsItem />
    </section>
</template>

<script>
import PostsItem from "./PostsItem.vue";

export default {
    components: {
        PostsItem,
    },
};
</script>
