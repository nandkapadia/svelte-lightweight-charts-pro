<script lang="ts">
  import { onMount, onDestroy, getContext } from 'svelte';
  import type { ISeriesApi, IChartApi, LineData, LineSeriesPartialOptions } from 'lightweight-charts';

  export let data: LineData[] = [];
  export let options: LineSeriesPartialOptions = {};

  const { getChart } = getContext<{ getChart: () => IChartApi | null }>('chart');
  let series: ISeriesApi<'Line'> | null = null;

  onMount(() => {
    const chart = getChart();
    if (chart) {
      series = (chart as IChartApi & { addLineSeries: (options?: LineSeriesPartialOptions) => ISeriesApi<'Line'> }).addLineSeries(options);
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
