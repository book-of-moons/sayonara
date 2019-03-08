<template>
  <div>
    <img src="{{img}}" />
    <div>
      {{ author }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "author"]
};
</script>

<style></style>
