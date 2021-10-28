<template>
  <div id="notice" class="container section-padding">
    <h2 class="section-title wow fadeInUp">Notices</h2>
    <div class="notice-area" v-html="markdownToHtml"></div>
  </div>
</template>

<script>
import marked from "marked";
import NoticeContent from "./NoticeContent.md";

export default {
  name: "Notice",
  components: {},
  data() {
    return {
      markdown: NoticeContent,
    };
  },
  computed: {
    markdownToHtml() {
      return marked(this.markdown);
    },
  },
};
</script>

<style>

.notice-area {
    margin: 0 120px 0;
}

</style>