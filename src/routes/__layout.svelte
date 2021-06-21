<script>
	import Header from '$lib/Header/index.svelte';
	// import "../app.scss";
</script>

<Header>
	<main>
		<slot />
	</main>

	<style global lang="postcss">
		@import '@fontsource/fira-mono';
		@tailwind base;
		@tailwind components;
		@tailwind utilities;
	</style>
</Header>
<slot />
