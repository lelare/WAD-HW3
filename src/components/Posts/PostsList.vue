<template>
    <section id="box-wrapper">
        <article class="box" v-for="post in postsList" :key="post.id">
            <div class="post_heading">
                <div class="post_author">
                    <img src="@/assets/user.png" alt="profile-img" />
                    <span>{{ post.author_name }}</span>
                </div>
                <span>Oct 22, 2022</span>
            </div>
            <div class="post_body">
                <img src="@/assets/tartu-old-city.jpg" alt="tartu" />
                <p>{{ post.message }}</p>
            </div>
            <div class="post_footer">
                <img src="@/assets/like.png" alt="like-icon" />
                <span>{{ post.like_count }}</span>
                <img src="@/assets/comment.png" alt="comment-icon" />
                <span>{{ post.comment_count }}</span>
            </div>
        </article>
    </section>
</template>

<script>
export default {
    computed: {
        postsList() {
            return this.$store.state.posts;
        },
    },
};
</script>

<style lang="scss" scoped>
.box {
    background-color: lightgray;
    border: 1px solid darkgray;
    border-radius: 10px;
    padding: 15px;
}
article {
    &:not(:last-child) {
        margin-bottom: 20px;
    }
}

.post_heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 4px;
}

@media (max-width: 480px) {
    .post_heading > span {
        font-size: 14px;
    }
}

.post_author {
    display: flex;
    align-items: center;
    column-gap: 8px;
}

.post_author > img {
    width: 30px;
    height: 30px;
}

.post_body {
    padding-top: 16px;
    padding-bottom: 16px;
}

.post_body > img {
    width: 100%;
}

.post_body > p {
    margin: 0;
}

.post_body > img ~ p {
    margin-top: 10px;
}

.post_body > :not(:first-child) {
    margin-top: 10px;
}

.post {
    &_footer {
        display: flex;
        align-items: center;

        img {
            width: 24px;
            height: 24px;
            margin-right: 5px;
        }

        span {
            margin-right: 10px;
        }
    }
}
</style>
