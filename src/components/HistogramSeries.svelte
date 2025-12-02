<script lang="ts">
  import { onMount, onDestroy, getContext } from 'svelte';
  import type { ISeriesApi, HistogramData, HistogramSeriesPartialOptions } from 'lightweight-charts';

  export let data: HistogramData[] = [];
  export let options: HistogramSeriesPartialOptions = {};

  const { getChart } = getContext<{ getChart: () => any }>('chart');
  let series: ISeriesApi<'Histogram'> | null = null;

  onMount(() => {
    const chart = getChart();
    if (chart) {
      series = chart.addHistogramSeries(options);
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
