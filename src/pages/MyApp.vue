<template>
  <div>
    <b-card v-for="item in items" no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="item.imageUrl" class="rounded-0" />
        </b-col>
        <b-col md="6">
          <b-card-body :title="item.title">
            <b-card-text>
              {{item.body}}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>

function Item(title, body,imageUrl, link) {
  return {title, body, imageUrl, link};
}

const items = [
  Item("ルーレット", "ランチで迷った時のアプリ", "https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/7a/36/6c/7a366cf5-8f50-8087-2338-c385b208a817/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-3.png/690x0w.jpg", ""),
  Item("ルーレット", "ランチで迷った時のアプリ", "https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/7a/36/6c/7a366cf5-8f50-8087-2338-c385b208a817/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-3.png/690x0w.jpg", ""),
  Item("ルーレット", "ランチで迷った時のアプリ", "https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/7a/36/6c/7a366cf5-8f50-8087-2338-c385b208a817/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-3.png/690x0w.jpg", ""),
];

export default {
  data() {
    return {
      items,
    };
  },
};
  
</script>

