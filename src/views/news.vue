<template>
  <div class = "padding">
    <div id="banniere">
      <div id="ban">
        <div class="tittleban">
          <h1>Fil d'actualités</h1>
        </div>
      </div>
      <h2 class="titre--create"><router-link to="/create">Créez un nouveau post</router-link></h2>
    </div>
    <div id="container">
      <div class="allpost">
        <allPost />
      </div>
    </div>
  </div>
</template>

<script>
import allPost from "../components/allPost";
export default {
  name: "news",
  components: {
    allPost,
  },
  data() {
    return {
      token: "",
      allPost: [],
    };
  },
};
</script>
<style scoped>

.tittleban {
  text-align: center;
}
.titre--create {
  margin: 30px 0;
}
</style>