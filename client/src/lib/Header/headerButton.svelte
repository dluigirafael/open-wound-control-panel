<script>
  import { page } from "$app/stores";
  export let icon;
  export let route;
</script>

<li class="mr-1 my-2 md:my-0">
  <a
    sveltekit:prefetch
    href={route}
    class={`flex justify-center items-center px-2 py-1 md:py-3 align-middle
    text-blue-400 no-underline hover:text-gray-100 border-b-2 border-blue-400
    hover:border-blue-400 ${$page.path === route ? "active" : ""}`}
  >
    <span class="material-icons-round text-xl no-underline mr-2">{icon}</span>
    <span class="pb-1 md:pb-0 text-sm"><slot /></span>
  </a>
</li>

<style lang="scss">
  .active {
    border: 2px solid red;
  }
</style>
