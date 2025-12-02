<script lang="ts">
  import { onMount, onDestroy, setContext } from 'svelte';
  import { createChart, type IChartApi, type ChartOptions, type DeepPartial } from 'lightweight-charts';

  export let options: DeepPartial<ChartOptions> = {};

  let container: HTMLDivElement;
  let chart: IChartApi | null = null;

  // Provide chart instance to child series components
  setContext('chart', {
    getChart: () => chart,
  });

  onMount(() => {
    if (container) {
      chart = createChart(container, options);
    }
  });

  onDestroy(() => {
    if (chart) {
      chart.remove();
      chart = null;
    }
  });

  // Update chart options when they change
  $: if (chart && options) {
    chart.applyOptions(options);
  }
</script>

<div bind:this={container} class="lightweight-charts-container">
  <slot />
</div>

<style>
  .lightweight-charts-container {
    position: relative;
    width: 100%;
    height: 400px;
  }
</style>
