<template>
  <div class="container_signup padding">
    <h2>Bienvenue sur votre réseau social d'entreprise</h2>
    <h3>Merci de remplir le formulaire d'inscription</h3>

    <form class="signup" @submit.prevent="signup">
      <div class="login--form">
        <label class="label--email" for="firstname">Prénom :</label>
        <input
          required
          v-model="firstname"
          type="text"
          name="firstName"
          id="firstname-input"
        />
      </div>
      <br>
      <div class="login--form">
        <label class="label--email" for="lastname">Nom :</label>
        <input
          required
          v-model="lastname"
          type="text"
          name="lastName"
          id="lastname-input"
        />
      </div>
      <br>
      <div class="login--form">
        <label class="label--email" for="email">Email :</label>
        <input
          required
          v-model="email"
          type="email"
          name="email"
          id="email-input"
        />
      </div>
      <br>
      <div class="login--form">
        <label for="password">Mot de passe :</label>
        <input
          required
          v-model="password"
          type="password"
          name="password"
          :maxlength="max"
          placeholder="Entre 8 et 20 caractères"
          id="password-input"
        />
      </div>
      <br>
      <button type="submit" @click.prevent="buttonSignup">S'inscrire</button>
      <p v-if="message">{{ message }}</p>
    </form>

    <div class="container_login">
      <p>
        Vous avez déjà un compte? <router-link to="/login">Se connecter</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signup",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      message: "",
      max:"20",
    };
  },
  methods: {
    async buttonSignup() {
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };
      console.table(data);
      try {
        const res = await axios.post("/api/auth/signup", data);
        console.log(res);
        this.$router.push("/");
      } catch (error) {
        alert(error?.response?.data?.error || "Une erreur est survenue.");
      }
    },
  },
};
</script>
<style scoped>
input {
  margin-bottom: 20px;
  margin-left: 10px;
}
h2 {
  margin: 50px 0;
  text-align: center;
}
.container_signup button {
  margin-bottom: 20px;
}
</style>