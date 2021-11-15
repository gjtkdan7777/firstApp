<template>
  <div>
    <h1>새 게시글 만들기</h1>
    <b-form-textarea
      placeholder="글을 적어주세요!!"
      v-model="content"
    ></b-form-textarea>
    <div>
      <b-button class="create-btn" variant="success" @click="createArticle"
        >생성하기</b-button
      >
    </div>
    <h2>작성된 게시글</h2>
    <Card
      v-for="a in articles"
      :key="a._id"
      :article="a"
      @update="updateCard"
      @delete="deleteCard"
    />
  </div>
</template>
<script>
import axios from "axios";
import Card from "./router/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      content: "",
      articles: [],
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    updateCard({ id, content }) {
      const idx = this.articles.findIndex((v) => v._id === id);
      if (idx > -1) {
        this.articles[idx].content = content;
      }
    },
    deleteCard(id) {
      const idx = this.articles.findIndex((article) => article._id === id);
      if (idx > -1) {
        this.articles.splice(idx, 1);
      }
    },
    async getArticle() {
      const { data } = await axios.get("http://localhost:3000");
      this.articles = data;
    },
    async createArticle() {
      if (this.content.length === 0) {
        window.alert("글을 입력해주세요!!");
        return;
      }

      const { data } = await axios.post("http://localhost:3000", {
        content: this.content,
      });
      if (!data) {
        window.alert("생성 실패");
        return;
      }
      this.articles.push(data);
      this.content = "";
    },
  },
};
</script>
<style>
.create-btn {
  padding: 10px;
  margin: 10px;
}
</style>
