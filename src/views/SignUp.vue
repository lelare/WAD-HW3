<template>
<main>
<section class="box text-center section-small">
  <form @submit.prevent ="validateForm">
  <div  class="form-group">
     <label for="email">Email</label>
     <input type="email" placeholder="Email" required v-model="email"></div>  
  <div  class="form-group">
      <label for="password">Password</label>
      <input id="password" name="password" type="password" placeholder="Password" required v-model="password">
  </div>
  <div v-if="validatePassword" class="error"> {{validatePassword}}</div>

<div class="submit">
    <button>Sign up </button>
</div>
</form>

</section>
</main>
</template>

<script>
export default {
name: "SignUpView", 

data: function() {
    return {
   email: '',
   password: '',
   validatePassword:'',
  }},
  methods: {
   /* Validate password */
   validateForm(){
   this.validatePassword = (this.password.length <8 || this.password> 15)? 'password must be between 8-15 chars':''
   let regex =/^[A-Z](?=.*[0-9])(?=.*_)(?=.*[a-z].*[a-z])[A-Za-z0-9_]*$/;;
   this.validatePassword = regex.test(this.password)? '':'The password is not valid! It must contain a combination of the first letter being Uppercase,at least 2 Lowercase characters, 1 Digits (0-9), and _'
   },

  }
}
</script>
<style lang="scss" scoped>

* {
    font-family: sans-serif;
    box-sizing: border-box;
}

main {
    padding: 25px 0;
    display: flex;
    justify-content: center;
    gap: 15px;
}

.box {
    background-color: lightgray;
    border: 1px solid darkgray;
    border-radius: 10px;
    padding: 15px;
}


.form-group {
    display: flex;
    margin-bottom: 15px;
}

.form-group > input {
    margin-bottom: 8px;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
}

.form-group > label {
    width: 20%;
    text-align: right;
    margin-right: 10px;
}

.submit{
    text-align: center;
}
.error{
    color: red;
    font-size: 0.8em;
    margin-top:  10px;
    text-align: center;
}
</style>