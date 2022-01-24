<template>
  <div class="btn-create-acount-container">
    <g-link to="/create-account/" class="btn-create-acount">{{textBtnCreateAcount}}</g-link>
  </div>
</template>

<script>
export default {
  props: {
    textBtnCreateAcount: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.btn-create-acount {
  color: #fff;
  height: 50px;
  width: 150px;
  background: #6e43b7;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 25px;
}
.btn-create-acount:hover {
  color: #fff;
  background: #4e2a8b;
}
</style>