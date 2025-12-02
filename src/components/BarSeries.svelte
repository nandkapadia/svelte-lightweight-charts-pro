<script lang="ts">
  import { onMount, onDestroy, getContext } from 'svelte';
  import type { ISeriesApi, BarData, BarSeriesPartialOptions } from 'lightweight-charts';

  export let data: BarData[] = [];
  export let options: BarSeriesPartialOptions = {};

  const { getChart } = getContext<{ getChart: () => any }>('chart');
  let series: ISeriesApi<'Bar'> | null = null;

  onMount(() => {
    const chart = getChart();
    if (chart) {
      series = chart.addBarSeries(options);
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
