<template>
  <div class="newpost">
    <form method="post" @submit.prevent="buttonNewPost">
      <h3>Nouveau post</h3>
      <div class="container">
        <label for="title">Titre :</label><br />
        <input
          type="title"
          id="title"
          placeholder="ici votre titre"
          v-model="title"
        />
      </div>
      <div>
        <label for="content">Description :</label><br />
        <input
          type="text"
          id="content"
          placeholder="Votre message..."
          v-model="content"
        />
      </div>
      <div>
        <!-- <label for="File" class="file">(Image facultative)</label> -->
        <input type="file" id="file" ref="file" @change="selectFile()" />
      </div>
      <button type="submit" @click.prevent="buttonNewPost">Envoyer</button>
    </form>
  </div>
</template>
//----------------------------------------------------------------------------------------------------------------------
<script>
import axios from "axios";

export default {
  name: "newPost",
  data() {
    return {
      userId: localStorage.getItem("userId"),
      token: "",
      title: "",
      content: "",
      file: null,
    };
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    buttonNewPost() {
      const data = new FormData();
      //avec image
      if (this.file !== null) {
        data.append("userId", this.userId);
        data.append("title", this.title);
        data.append("content", this.content);
        data.append("image", this.file, this.file.name);
        //sans image
      } else {
        data.append("userId", this.userId);
        data.append("title", this.title);
        data.append("content", this.content);
      }
      axios
        .post("/api/post/", data)
        .then(() => {
          alert("Votre message a bien été envoyé !");
          this.$router.push("/");
        })
        .catch(console.error());
    },
  },
};
</script>
<style scoped>

input {
  margin: 15px 0;
  min-width: 200px;
}

#content {
  min-height: 70px;
}
#file {
  border : none;
  border-radius: 0;
}
button {
  border-radius: 5px;
}

</style>