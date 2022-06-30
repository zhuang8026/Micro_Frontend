<template>
    <div>
        <div id="nav">
            <!-- 主应用可以有自己的路由-->
            <router-link class="link" to="/">首頁</router-link>
            <!-- 可以引用其它子应用  -->
            <router-link class="link" to="/sub-vue">挑選商品(vue)</router-link>
            <router-link class="link" to="/sub-react">會員中心(react)</router-link>
        </div>
        
        <router-view />
        <div id="subContainer"></div>
    </div>
</template>
<script>

</script>
<style>
body {
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
.link {
    margin-left: 10px;
}
</style>
