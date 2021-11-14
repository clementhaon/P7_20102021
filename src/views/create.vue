<template>
  <div class="padding">
    <div id="container">
      <div class="newpost">
        <newPost />
      </div>
    </div>
  </div>
</template>

<script>
import newPost from "../components/newPost";
export default {
  name: "create",
  components: {
    newPost,
  },
  data() {
    return {
      token: "",
    };
  },
};
</script>

<style scoped>
</style>
