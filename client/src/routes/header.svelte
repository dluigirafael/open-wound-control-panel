<script>
	// import { page } from '$app/stores';
</script>

<header>
	<nav class="navbar bg-base-100">
		<div class="flex-1">
			<label for="main-drawer" class="btn btn-primary drawer-button">Open drawer</label>
			<a href="." class="btn btn-ghost normal-case text-xl">OWCP</a>
		</div>

		<div class="flex-none gap-2">
			<button class="btn btn-ghost rounded-btn">server_info</button>

			<button class="btn btn-ghost btn-circle">
				<div class="indicator">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
						><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg
					>
					<span class="badge badge-xs badge-primary indicator-item" />
				</div>
			</button>
			<div class="dropdown dropdown-end">
				<button tabindex="0" class="DFFGFYFDFGDFGDGFDGFDbtn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img src="https://placeimg.com/80/80/people" alt="profile" />
					</div>
				</button>

				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
					<li>
						<a href="." class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><a href=".">Settings</a></li>
					<li><a href=".">Logout</a></li>
				</ul>
			</div>
		</div>
	</nav>
</header>

<style>
</style>
