<script>
  // import { page } from "$app/stores";

  import UserMenu from "./userMenu.svelte";
  import { userMenu, navMenu } from "$src/store.js";
  import NavBar from "./navBar.svelte";
</script>

<header>
  <nav id="header" class="bg-gray-900 fixed w-full z-10 top-0 shadow">
    <div
      class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0"
    >
      <div class="w-1/2 pl-2 md:pl-0">
        <button
          class="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold"
        >
          <i class="fas fa-moon text-blue-400 pr-3" /> Open Wound Control Panel
        </button>
      </div>
      <div class="w-1/2 pr-0">
        <div class="flex relative float-right">
          <div class="relative text-sm text-gray-100">
            <button
              id="userButton"
              on:click={() => ($userMenu = !$userMenu)}
              class="flex items-center focus:outline-none mr-3"
            >
              <img
                class="w-8 h-8 rounded-full mr-4"
                src="http://i.pravatar.cc/300"
                alt="Avatar of User"
              />
              <span class="hidden md:inline-block text-gray-100">Hi, User</span>
              <svg
                class="pl-2 h-2 fill-current text-gray-100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 129 129"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                enable-background="new 0 0 129 129"
                ><g
                  ><path
                    d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
                  /></g
                ></svg
              >
            </button>

            <UserMenu />
          </div>

          <div class="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              on:click={() => ($navMenu = !$navMenu)}
              class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-100 hover:border-teal-500 appearance-none focus:outline-none"
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><title>Menu</title><path
                  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                /></svg
              >
            </button>
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  </nav>
</header>
