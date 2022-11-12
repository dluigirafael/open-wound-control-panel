<script>
	export let title = "Stat title";
	export let icon = "check";
	import "material-icons/iconfont/outlined.css";
</script>

<div class="stat">
	<div class="stat-figure"><span class="material-icons-outlined">{icon}</span></div>
	<div class="stat-title">{title}</div>
	<div class="stat-value"><slot /></div>
</div>

<style>
	.stat-figure .material-icons-outlined {
		font-size: 40px;
	}
</style>
