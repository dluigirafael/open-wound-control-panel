<script>
</script>

<button on:click={async () => await fetch("/reboot")}>reboot</button>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
