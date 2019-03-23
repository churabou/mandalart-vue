<template>
  <div>
    <div style="position: relative;">
      <b-button @click="" variant="primary" v-b-modal.modalPrevent class="button">新規作成</b-button>
      <!-- Modal Component -->
      <b-modal 
        id="modalPrevent" 
        ref="modal" 
        title="create your mandalachart" 
        @ok="handleOk" 
      >
        <form @submit.stop.prevent="handleSubmit">
          <b-form-input type="text" placeholder="Enter new chart name" v-model="name" />
        </form>
      </b-modal>
      <!-- Modal Component -->
      <b-table striped hover :items="items" />
    </div>
  </div>
</template>

<script>

const items = [
  {title: '仕事も人生もうまくいくためのTips'}, 
  {title: '死ぬまでに行きたい旅行先'}, 
  {title:'お腹が減ったら食べたくなる何か'}
]

export default {
  data() {
    return {
      name: '',
      items: [],
    }
  },
  methods: {
    handleOk() {
      // api new MandalaChar
      this.$router.push('/edit');
    },
  },
  created() {
    this.items = items;
  },
}

</script>

<style scoped>

/* .button {
  position: absolute;
  top: 5px;
  right:5px;
} */
</style>