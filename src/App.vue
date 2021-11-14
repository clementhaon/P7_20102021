<template>
  <div>
    <div id="navlogo">
      <a href="/"> <img id="logo" src="./assets/logo.png" alt="logo"/></a>
    </div>
    <nav id="nav">
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/profile"> Profil</router-link></li>
        <li>
          <a to="/" v-on:click="Logout()">
            <span class="logout">Se déconnecter</span></a
          >
        </li>
      </ul>
    </nav>
    <router-view />
    <div class="footer">
      
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Logout() {
      localStorage.clear();
      this.$router.replace("/login");
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  padding:0;
  height:100%;
}
a {
    color: black;
    text-decoration: underline grey;
  }
#logo {
  width: 400px;
  max-width: 90%;
}
#navlogo {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #44bb84;
  height: 100px;
}
#nav {
  background-color: #C8C8C8;
  height: 100%;
}
#nav ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin : 0;
  padding: 20px 0 20px 0;
  font-weight: bold;
  color: black;
}
li {
  list-style-type: none;
}
.logout {
  cursor: pointer
}
.footer {
  background-color: #44bb84;
  width:100%;
  height:100px;
}
.padding {
  padding: 0 50px 0 50px;
  margin-bottom : 30px;
}
.bold {
  font-weight: bold;
}
button {
  border-radius:5px;
  border: 1px solid grey;
  height: 30px;
}
input {
  border-radius: 10px;
  border: 2px solid grey;
  min-height : 30px;

}
</style>