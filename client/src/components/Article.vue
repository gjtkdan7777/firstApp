<template>
  <div class="card">
    <Card :article="article" @update="updateCard" @delete="moveToHome" />
  </div>
</template>
<script>
import Card from "./router/Card";
import axios from "axios";

export default {
  components: {
    Card,
  },
  data() {
    return {
      article: [],
    };
  },
  created() {
    this.findOneArticle();
  },
  methods: {
    async findOneArticle() {
      const articleId = this.$route.params.id;
      const { data } = await axios.get(`http://localhost:3000/${articleId}`);
      this.article = data;
    },
    updateCard({ content }) {
      this.article.content = content;
    },
    moveToHome() {
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>
<style></style>
