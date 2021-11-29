<script>
  export let icon;
</script>

<li class="mr-6 my-2 md:my-0">
  <a
    href="#"
    class="block py-1 md:py-3 pl-1 align-middle text-blue-400 no-underline hover:text-gray-100 border-b-2 border-blue-400 hover:border-blue-400"
  >
    <span class="material-icons-round text-4xl no-underline">{icon}</span>
    <span class="pb-1 md:pb-0 text-sm"><slot /></span>
  </a>
</li>
