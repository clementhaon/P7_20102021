<template>
  <div class="card shadow">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <div>
      <router-link :to="`/post/${id}`">
        <img :src="image" />
      </router-link>
    </div>
    <hr />
    <p class="comlight">Publié par {{ user.firstname }} {{ user.lastname }}</p>
    <router-link :to="`/post/${id}`">Commentaires</router-link>
  </div>
</template>
//----------------------------------------------------------------------------------------------------------------------
<script>
export default {
  props: ["title", "content", "user", "id", "image"],
};
</script>
<style scoped>
.card {
  border: 2px solid grey;
  border-radius: 20px;
  margin-bottom : 25px;
  padding : 15px;
  background-color: #F2F3F3;
}
img {
  max-width: 250px;
}
hr {
  margin: 0;
}
.comlight {
  opacity: 0.8;
}
</style>