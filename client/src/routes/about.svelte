<script>
  import { onMount } from "svelte";

  async function getSystemInfo() {
    const res = await fetch("/api/uname");

    if (res.ok) {
      return await res.json();
    } else {
      throw new Error(res);
    }
  }

  let promise = getSystemInfo();
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="content pt-[100px] text-white">
  {#await promise}
    <h3>Loading info</h3>
  {:then res}
    <h2>{res.message}</h2>
  {/await}
</div>

<style>
  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
