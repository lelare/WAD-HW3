<template>
    <main>
        <section class="box text-center section-small">
            <form @submit.prevent="validateForm">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" placeholder="Email" required v-model="email" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        v-model="password"
                    />
                </div>
                <div v-if="validatePassword" class="error">{{ validatePassword }}</div>

                <div class="text-center">
                    <button class="btn">Sign up</button>
                </div>
            </form>
        </section>
    </main>
</template>

<script>
export default {
    name: "SignUpView",

    data: function () {
        return {
            email: "",
            password: "",
            validatePassword: "",
        };
    },
    methods: {
        validateForm() {
            let regex = /^[A-Z](?=.*[0-9])(?=.*_)(?=.*[a-z].*[a-z])[A-Za-z0-9_]*$/;
            let second_condition = regex.test(this.password);
            isLengthValid = this.password.length < 8 || this.password.length > 15;

            if (!isLengthValid) {
                console.log(this.password.length);
                this.validatePassword = "Password must be between 8-15 chars";
            } else if (!second_condition) {
                this.validatePassword =
                    "The password is not valid! It must contain a combination of the first letter being Uppercase,at 2 Lowercase characters, 1 Digits (0-9), and _";
            } else {
                this.validatePassword = "";
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@media (min-width: 481px) {
    section.section-small {
        flex: 0 0 300px;
    }
}
.form-group {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    & > input {
        height: 36px;
        padding: 0 12px;
        border: 0;
        border-radius: 15px;
    }

    & > label {
        width: 30%;
        text-align: right;
        margin-right: 10px;
    }
}

.error {
    color: red;
    font-size: 0.8em;
    margin-bottom: 10px;
    text-align: center;
}
</style>
