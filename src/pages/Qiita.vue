<template>
  <div>
    <div>
      <b-table striped hover :items="items" />
    </div>
  </div>
</template>

<script>
import QiitaSession from '../api/qiita-session.js';


export default {
  data() {
    return {
      items: [],
    }
  },
  created() {
    QiitaSession.loadArticle((articles) => {
      this.items = articles.map((article) => {
        return { title: article.title }
      });
    });
  },
}

</script>