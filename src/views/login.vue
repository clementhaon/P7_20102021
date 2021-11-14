<template>
  <div class="container_login padding">
    <h2>Bienvenue sur votre réseau social d'entreprise</h2>
    <h3>Connexion</h3>
    <div class="flex-co">
    <form class="login" @submit.prevent="login">
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
      <button type="submit" @click.prevent="buttonLogin">Se connecter</button>
      <p v-if="message">{{ message }}</p>
    </form>
    </div>

    <div class="container_signup">
      <p>
        Vous n'avez pas de compte?
        <router-link to="/signup">signup</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      token: "",
      userId: "",
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async buttonLogin() {
      await axios
        .post("/api/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("id", res.data.userId);
            localStorage.setItem("isAdmin", res.data.isAdmin);
          }
          this.$router.push("/");
        })
        .catch((error) => {
          alert("Authentification incorrect");
          this.error = error;
        });
    },
  },
};
</script>
<style scoped>
h2{
  text-align: center;
}
.flex-co{
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 20px;
  margin-left: 10px;
}
</style>