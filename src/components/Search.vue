<!-- ================ Template ================================================ -->
<template>
  <div id="app">
    <!-- Open Btn -->
    <button
      @click="open = true"
      class="text-h3 mb-4 font-weight-bold orange--text"
    >
      Search
    </button>

    <div class="search" v-show="open">
      <!-- Input -->
      <input type="search" placeholder="Search" autofocus />

      <!-- Close Btn -->
      <button
        @click="open = false"
        class="text-h2 font-weight-bold red--text"
      >
        Close
        <v-icon color="red" class="text-h2">mdi-close</v-icon>
      </button>
    </div>
  </div>
</template>

<!-- ================ Script ================================================ -->
<script>
export default {
  // Data
  data: () => ({ open: false }),
}
</script>

<!-- ================ Style =============================================== -->
<style lang="scss" scoped>
.search {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #000000e1;
  display: flex;
  justify-content: center;
  align-items: center;

  // Input
  input {
    all: unset;
    width: 70%;
    padding: 2rem;
    border: 5px solid orange;
    font: bold 3.5em monospace;
    margin-top: -200px;
    border-radius: 50px;
  }

  button {
    position: fixed;
    top: 40px;
    right: 40px;
    cursor: pointer;
  }
}
</style>
