<script>
  import "../app.postcss";
  import Header from "$lib/Header/index.svelte";
  import Footer from "$lib/Footer/index.svelte";
  import "../app.scss";
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
