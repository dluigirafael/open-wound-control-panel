<script>
  export let title = "";
</script>

<div class="bg-gray-900 border border-gray-800 rounded shadow">
  <div class="border-b border-gray-800 p-3">
    <h5 class="font-bold uppercase text-gray-600">{title}</h5>
  </div>
  <div class="p-5">
    <slot />
  </div>
</div>
