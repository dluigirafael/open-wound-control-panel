<script>
  import Chart from "chart.js/auto";
  import Card from "$lib/card.svelte";
  import { onMount } from "svelte";
  let chartjs7, chartjs0, chartjs1, chartjs4;
  onMount(() => {
    new Chart(chartjs7, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Page Impressions",
            data: [10, 20, 30, 40],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
          },
          {
            label: "Adsense Clicks",
            data: [5, 15, 10, 30],
            type: "line",
            fill: false,
            borderColor: "rgb(54, 162, 235)",
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    new Chart(chartjs0, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Views",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            lineTension: 0.1,
          },
        ],
      },
      options: {},
    });

    new Chart(chartjs1, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Likes",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    new Chart(chartjs4, {
      type: "doughnut",
      data: {
        labels: ["P1", "P2", "P3"],
        datasets: [
          {
            label: "Issues",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
          },
        ],
      },
    });
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
          <!--Graph Card-->
          <div class="bg-gray-900 border border-gray-800 rounded shadow">
            <div class="border-b border-gray-800 p-3">
              <h5 class="font-bold uppercase text-gray-600">Graph</h5>
            </div>
            <div class="p-5">
              <canvas
                id="chartjs-7"
                bind:this={chartjs7}
                class="chartjs"
                width="undefined"
                height="undefined"
              />
            </div>
          </div>
          <!--/Graph Card-->
        </div>

        <div class="w-full md:w-1/2 p-3">
          <!--Graph Card-->
          <div class="bg-gray-900 border border-gray-800 rounded shadow">
            <div class="border-b border-gray-800 p-3">
              <h5 class="font-bold uppercase text-gray-600">Graph</h5>
            </div>
            <div class="p-5">
              <canvas
                id="chartjs-0"
                bind:this={chartjs0}
                class="chartjs"
                width="undefined"
                height="undefined"
              />
            </div>
          </div>
          <!--/Graph Card-->
        </div>

        <div class="w-full md:w-1/2 xl:w-1/3 p-3">
          <!--Graph Card-->
          <div class="bg-gray-900 border border-gray-800 rounded shadow">
            <div class="border-b border-gray-800 p-3">
              <h5 class="font-bold uppercase text-gray-600">Graph</h5>
            </div>
            <div class="p-5">
              <canvas
                id="chartjs-1"
                bind:this={chartjs1}
                class="chartjs"
                width="undefined"
                height="undefined"
              />
            </div>
          </div>
          <!--/Graph Card-->
        </div>

        <div class="w-full md:w-1/2 xl:w-1/3 p-3">
          <!--Graph Card-->
          <div class="bg-gray-900 border border-gray-800 rounded shadow">
            <div class="border-b border-gray-800 p-3">
              <h5 class="font-bold uppercase text-gray-600">Graph</h5>
            </div>
            <div class="p-5">
              <canvas
                id="chartjs-4"
                bind:this={chartjs4}
                class="chartjs"
                width="undefined"
                height="undefined"
              />
            </div>
          </div>
          <!--/Graph Card-->
        </div>

        <div class="w-full md:w-1/2 xl:w-1/3 p-3">
          <!--Template Card-->
          <div class="bg-gray-900 border border-gray-800 rounded shadow">
            <div class="border-b border-gray-800 p-3">
              <h5 class="font-bold uppercase text-gray-600">Template</h5>
            </div>
            <div class="p-5" />
          </div>
          <!--/Template Card-->
        </div>

        <div class="w-full p-3">
          <!--Table Card-->
          <div class="bg-gray-900 border border-gray-800 rounded shadow">
            <div class="border-b border-gray-800 p-3">
              <h5 class="font-bold uppercase text-gray-600">Table</h5>
            </div>
            <div class="p-5">
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
                <a href="#" class="text-white">See More issues...</a>
              </p>
            </div>
          </div>
          <!--/table Card-->
        </div>
      </div>

      <!--/ Console Content-->
    </div>
  </div>
  <!--/container-->
</section>

<style lang="scss">
</style>
