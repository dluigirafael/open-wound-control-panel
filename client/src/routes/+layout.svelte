<script>
	import Header from '$lib/components/Header.svelte';
	import './styles.scss';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
	
	</footer>
</div>



