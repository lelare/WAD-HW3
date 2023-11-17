<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/add-post">Add Post</router-link></li>
                <li><router-link to="/signUp">SignUp</router-link></li>
            </ul>
        </nav>
        <div class="profile">
            <button class="dropbtn">
                <img id="photo" src="res/images/user.png" alt="Profile picture" />
            </button>
            <div id="dropdown" class="dropdown-content">
                <a href="#">John Paul</a>
                <a href="#">paul@ut.ee</a>
                <a href="#">logout</a>
            </div>
        </div>
    </header>
</template>

<script>
// export default {
//     name: "Header",
// };
</script>

<style lang="scss" scoped>
header {
    padding: 15px 10px;
    border: 1px solid darkgray;
    background-color: lightgray;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

nav {
    ul {
        display: flex;
    }

    li {
        &:not(:first-child) {
            position: relative;

            &::before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 1px;
                background-color: gray;
                display: inline-block;
            }
        }

        a {
            padding: 10px 15px;
            color: black;
            font-size: 0.99em;

            &:hover {
                background-color: #34495e;
                color: #f1f1f1;
                border-radius: 5px;
            }
        }
    }
}

#photo {
    width: 100%;
    height: 100%;
}
</style>
