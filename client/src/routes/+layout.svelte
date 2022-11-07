<script>
	import Header from "./header.svelte";
	import "../styles.scss";
	let drawerStatus = false
	const hideDrawer= ()=>{
		drawerStatus = false
	}
</script>

<div class="app" data-theme="night">
	<div class="drawer">
		<input id="main-drawer" type="checkbox" class="drawer-toggle" bind:checked={drawerStatus} />
		<div class="drawer-content">
			<Header />

			<main class="container mx-auto">
				<slot />
			</main>

			<footer />
		</div>
		<div class="drawer-side">
			<label for="main-drawer" class="drawer-overlay" />
			<ul class="menu p-4 w-80 bg-base-100 text-base-content">
				<!-- Sidebar content here -->
				<li><a on:click={hideDrawer} href="/dashboard">Dashboard</a></li>
				<li><a on:click={hideDrawer} href=".">Sidebar Item 2</a></li>
			</ul>
		</div>
	</div>
</div>
