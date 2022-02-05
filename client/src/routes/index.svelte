<script>
	import Chart from "chart.js/auto/auto.js";
	import Card from "$lib/infoCard.svelte";
	import { onMount } from "svelte";
	import TemplateCard from "$lib/templateCard.svelte";
	// import * as xterm from "xterm";
	import options from "./chartsOptions";

	let chartjs3, chartjs0, chartjs1, chartjs2;
	onMount(async () => {
		const xterm = await import("xterm");
		console.log(xterm);
		new Chart(chartjs3, options[3]);
		new Chart(chartjs0, options[0]);
		new Chart(chartjs1, options[1]);
		new Chart(chartjs2, options[2]);
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<!--Container-->
	<div class="container w-full mx-auto pt-20">
		<div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
			<!--Console Content-->

			<div class="flex flex-wrap">
				<div class="w-full md:w-1/2 xl:w-1/3 p-3">
					<Card title="Total Revenue">$3249</Card>
				</div>
				<div class="w-full md:w-1/2 xl:w-1/3 p-3">
					<Card title="Total Users">249</Card>
				</div>
				<div class="w-full md:w-1/2 xl:w-1/3 p-3">
					<Card title="New Users">2</Card>
				</div>
				<div class="w-full md:w-1/2 xl:w-1/3 p-3">
					<Card title="Server Uptime">152 days</Card>
				</div>
				<div class="w-full md:w-1/2 xl:w-1/3 p-3">
					<Card title="To Do List">7 tasks</Card>
				</div>
				<div class="w-full md:w-1/2 xl:w-1/3 p-3">
					<Card title="Issues">3</Card>
				</div>
			</div>

			<!--Divider-->
			<hr class="border-b-2 border-gray-600 my-8 mx-4" />

			<div class="flex flex-row flex-wrap flex-grow mt-2">
				<div class="w-full md:w-1/2 p-3">
					<TemplateCard title="Graph">
						<canvas id="chartjs-3" bind:this={chartjs3} class="chartjs" width="undefined" height="undefined" />
					</TemplateCard>
				</div>

				<div class="w-full md:w-1/2 p-3">
					<TemplateCard title="Graph">
						<canvas id="chartjs-0" bind:this={chartjs0} class="chartjs" width="undefined" height="undefined" />
					</TemplateCard>
				</div>

				<div class="w-full md:w-1/2 xl:w-1/3 p-3">
					<TemplateCard title="Graph">
						<canvas id="chartjs-1" bind:this={chartjs1} class="chartjs" width="undefined" height="undefined" />
					</TemplateCard>
				</div>

				<div class="w-full md:w-1/2 xl:w-1/3 p-3">
					<TemplateCard title="Graph">
						<canvas id="chartjs-2" bind:this={chartjs2} class="chartjs" width="undefined" height="undefined" />
					</TemplateCard>
				</div>

				<div class="w-full md:w-1/2 xl:w-1/3 p-3">
					<TemplateCard title="Template">
						<div id="terminal" />
					</TemplateCard>
				</div>

				<div class="w-full p-3">
					<TemplateCard title="Table">
						<table class="w-full p-5 text-gray-700">
							<thead>
								<tr>
									<th class="text-left text-gray-600">Name</th>
									<th class="text-left text-gray-600">Side</th>
									<th class="text-left text-gray-600">Role</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td>Obi Wan Kenobi</td>
									<td>Light</td>
									<td>Jedi</td>
								</tr>
								<tr>
									<td>Greedo</td>
									<td>South</td>
									<td>Scumbag</td>
								</tr>
								<tr>
									<td>Darth Vader</td>
									<td>Dark</td>
									<td>Sith</td>
								</tr>
							</tbody>
						</table>

						<p class="py-2">
							<button class="text-white">See More issues...</button>
						</p>
					</TemplateCard>
				</div>
			</div>

			<!--/ Console Content-->
		</div>
	</div>
	<!--/container-->
</section>

<style lang="scss">
</style>
