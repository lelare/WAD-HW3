<template>
    <footer>
        <div>&copy; 2023. WAD-HW All rights reserved</div>
        <nav>
            <ul>
                <li>
                    <router-link to="/terms">Terms of Service</router-link>
                </li>
                <li>
                    <router-link to="/privacy">Privacy policy</router-link>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    text-align: center;
    background-color: lightgrey;
    border-radius: 10px;

    nav {
        ul {
            padding-left: 0;
            display: flex;
            align-items: center;
            list-style: none;

            li {
                margin-left: 18px;

                a {
                    color: black;
                    font-size: 14px;

                    &:hover {
                        color: #34495e;
                    }
                }
            }
        }
    }
}
</style>
