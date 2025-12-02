<script lang="ts">
  import { onMount, onDestroy, getContext } from 'svelte';
  import type { ISeriesApi, LineData, LineSeriesPartialOptions } from 'lightweight-charts';

  export let data: LineData[] = [];
  export let options: LineSeriesPartialOptions = {};

  const { getChart } = getContext<{ getChart: () => any }>('chart');
  let series: ISeriesApi<'Line'> | null = null;

  onMount(() => {
    const chart = getChart();
    if (chart) {
      series = chart.addLineSeries(options);
      if (series && data && data.length > 0) {
        series.setData(data);
      }
    }
  });

  onDestroy(() => {
    const chart = getChart();
    if (chart && series) {
      chart.removeSeries(series);
      series = null;
    }
  });

  // Update data when it changes
  $: if (series && data) {
    series.setData(data);
  }

  // Update options when they change
  $: if (series && options) {
    series.applyOptions(options);
  }
</script>
