<script>
  import { userMenu } from "$src/store.js";
</script>

<div
  id="userMenu"
  class={`bg-gray-900 rounded shadow-md mt-2 absolute  right-0 min-w-full overflow-auto z-30 ${
    $userMenu ? "" : "invisible"
  }`}
>
  <ul class="list-reset">
    <li>
      <button
        class="px-4 py-2 block w-full text-left text-gray-100 hover:bg-gray-800 no-underline hover:no-underline"
        >My account</button
      >
    </li>
    <li>
      <button
        class="px-4 py-2 block w-full text-left text-gray-100 hover:bg-gray-800 no-underline hover:no-underline"
        >Notifications</button
      >
    </li>
    <li><hr class="border-t mx-2 border-gray-400" /></li>
    <li>
      <button
        class="px-4 py-2 block w-full text-left text-gray-100 hover:bg-gray-800 no-underline hover:no-underline"
        >Logout</button
      >
    </li>
  </ul>
</div>
