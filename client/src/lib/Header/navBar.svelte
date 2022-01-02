<script>
  import { navMenu } from "$src/store.js";
  import HeaderButton from "./headerButton.svelte";
</script>

<div
  class={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
    $navMenu ? "" : "hidden"
  }  mt-2 lg:mt-0 bg-gray-900 z-20`}
  id="nav-content"
>
  <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
    <HeaderButton icon="home">Dashboard</HeaderButton>
    <HeaderButton icon="task">Tasks</HeaderButton>
    <HeaderButton icon="chat">Messages</HeaderButton>
    <HeaderButton icon="paid">Payments</HeaderButton>
    <HeaderButton icon="analytics">Analytics</HeaderButton>
    <HeaderButton icon="info" route="/about">Info</HeaderButton>
  </ul>

  <div class="relative pull-right pl-4 pr-4 md:pr-0">
    <input
      type="search"
      placeholder="Search"
      class="w-full bg-gray-900 text-sm text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded py-1 px-2 pl-10 appearance-none leading-normal"
    />
    <div class="absolute search-icon" style="top: 0.375rem;left: 1.75rem;">
      <svg
        class="fill-current pointer-events-none text-gray-500 w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
        />
      </svg>
    </div>
  </div>
</div>
