<template>
  <div class="home">
    <post-card :image="image" :title="title" :snippet="snippet" />
  </div>
</template>

<script>
// @ is an alias to /src
import PostCard from "@/components/PostCard";

export default {
  name: "home",
  components: {
    PostCard
  },
  data: function() {
    return {
      image: "https://cdn.awwni.me/18c2q.jpg",
      title: "Sample Title",
      snippet:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>
