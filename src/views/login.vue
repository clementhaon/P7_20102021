<template>
  <div class="container_login padding">
    <h2>Bienvenue sur votre réseau social d'entreprise</h2>
    <h3>Connexion</h3>
    <div class="flex-co">
    <form class="login" @submit.prevent="login">
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
          id="password-input"
        />
      </div>
      <br>
      <button type="submit" @click.prevent="buttonLogin">Se connecter</button>
      <p v-if="message">{{ message }}</p>
    </form>
    </div>

    <div class="container_signup">
      <p>
        Vous n'avez pas de compte?
        <router-link to="/signup">S'incrire</router-link>.
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
  margin: 50px 0;
}
.flex-co{
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 20px;
  margin-left: 10px;
}
h3 {
  margin: 40px 0;
}
.flex-co form button {
  margin-bottom: 20px;
}
</style>