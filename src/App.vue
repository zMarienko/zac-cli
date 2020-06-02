<template>
  <div id="app">
    <Header />
    <main class="main" style="background-image: url(/img/study.png);">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="babel">
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
@import '@/scss/style.scss';
</style>
