<template>
  <div class="send-container">
    <h2>Tweet a message!</h2>
    <div class="form-area">
      <v-textarea
        outline
        name="input-7-1"
        label="Let's type your tweet here!"
        v-model="message"
      ></v-textarea>
      <div v-if="clicked && !output.length">
        <v-alert :value="true" type="error"
          >One of words in your twit exceeds the limit ({{
            limit
          }}
          characters).</v-alert
        >
      </div>
      <v-btn color="info" v-on:click="onSubmit" :disabled="!message"
        >Tweet!</v-btn
      >
    </div>
    <div v-if="clicked" class="message-area">
      <div class="message-list">
        <div
          v-for="(item, index) in output"
          v-bind:key="index"
          class="message-item"
        >
          <v-chip>{{ index + 1 }} / {{ output.length }}</v-chip>
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import twitSplit from "@/utils/split/twit-split";

export default {
  data() {
    return {
      message: null,
      clicked: false,
      limit: 50,
      output: []
    };
  },
  methods: {
    onSubmit: function() {
      if (this.message && this.message.trim()) {
        this.clicked = true;
        this.message = this.message.trim();
        this.output = twitSplit(this.message, this.limit);
      } else {
        this.message = null;
        this.clicked = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.send-container {
  padding: 1rem;

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  .form-area {
    padding: 1rem 2rem;
  }

  .message-area {
    padding: 1rem 4rem;
  }
}
</style>
