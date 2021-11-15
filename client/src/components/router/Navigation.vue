<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand class="menu">메뉴</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">메인</b-nav-item>
          <b-nav-item href="/board">게시판</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-form-input
            size="sm"
            class="search-content"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="search-btn" type="submit">검 색</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  components: {},
  data() {},
};
</script>
<style>
.menu {
  margin-left: 20px;
}
.search-btn {
  margin-bottom: 4px;
  height: 30px;
  width: 100px;
  margin-left: 10px;
}
.search-content {
  height: 30px;
  margin-left: 20px;
}
</style>
