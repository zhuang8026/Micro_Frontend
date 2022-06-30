<template>
  <div class="home">
    <div>
      <router-link class="link" to="/about">關於虛擬幣</router-link>
      <router-link class="link" to="/nft">關於NFT</router-link>
    </div>
    <img alt="Vue logo" src="../assets/home.png" />
    <h1>This is an Home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
