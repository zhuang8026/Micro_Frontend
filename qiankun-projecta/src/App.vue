<template>
  <div id="app">
    <div id="nav">
      <div class="list">
        <img alt="Vue logo" src="./assets/NFT001.png" />
        <p>NFT0001</p>
      </div>
      <div class="list">
        <img alt="Vue logo" src="./assets/NFT002.png" />
        <p>NFT0002</p>
      </div>
      <div class="list">
        <img alt="Vue logo" src="./assets/NFT003.png" />
        <p>NFT0003</p>
      </div>
      <div class="list">
        <img alt="Vue logo" src="./assets/NFT004.png" />
        <p>NFT0004</p>
      </div>
      <div class="list">
        <img alt="Vue logo" src="./assets/NFT005.png" />
        <p>NFT0005</p>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  display: flex;
}
#nav .list {
  width: 20%;
  padding: 5px;
}
#nav img {
  width: 100%;
}
</style>
