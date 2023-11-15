<template>
    <article class="box">
        <div class="post_heading">
            <div class="post_author">
                <img src="@/assets/user.png" alt="profile-img" />
                <span>Ad soyad</span>
            </div>
            <span>Oct 22, 2022</span>
        </div>
        <div class="post_body">
            <img src="@/assets/tartu-old-city.jpg" alt="tartu" />
            <p>Tartu 2022</p>
        </div>
        <div class="post_footer">
            <img src="@/assets/like.png" alt="like-icon" />
            <span>2</span>
            <img src="@/assets/comment.png" alt="comment-icon" />
            <span>4</span>
        </div>
    </article>
</template>

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

.post_footer {
    display: flex;
    align-items: center;
}

.post_footer > img {
    width: 24px;
    height: 24px;
    margin-right: 5px;
}

.post_footer > img + span {
    margin-right: 10px;
}
</style>
