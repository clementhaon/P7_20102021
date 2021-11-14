<template>
  <div class="container_signup padding">
    <h2>Bienvenue sur votre réseau social d'entreprise</h2>
    <h3>Merci de remplir le formulaire d'inscription</h3>

    <form class="signup" @submit.prevent="signup">
      <label for="firstname">Prénom :</label>
      <input
        required
        v-model="firstname"
        type="text"
        name="firstName"
        id="firstname-input"
        placeholder="Charles"
      />
      <br>
      <label for="lastname">Nom :</label>
      <input
        required
        v-model="lastname"
        type="text"
        name="lastName"
        id="lastname-input"
        placeholder="Dupont"
      />
      <br>
      <label for="email">Email :</label>
      <input
        required
        v-model="email"
        type="email"
        name="email"
        id="email-input"
        placeholder="utilisateur@domaine.fr"
      />
      <br>
      <label for="password">Mot de passe :</label>
      <input
        required
        v-model="password"
        type="password"
        name="password"
        id="password-input"
      />
      <br>
      <button type="submit" @click.prevent="buttonSignup">S'inscrire</button>
      <p v-if="message">{{ message }}</p>
    </form>

    <div class="container_login">
      <p>
        Vous avez déjà un compte? <router-link to="/login">login</router-link>.
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
        this.$router.push("/login");
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
</style>