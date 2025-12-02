<script lang="ts">
  import { onMount, onDestroy, getContext } from 'svelte';
  import type { ISeriesApi, IChartApi, CandlestickData, CandlestickSeriesPartialOptions } from 'lightweight-charts';

  export let data: CandlestickData[] = [];
  export let options: CandlestickSeriesPartialOptions = {};

  const { getChart } = getContext<{ getChart: () => IChartApi | null }>('chart');
  let series: ISeriesApi<'Candlestick'> | null = null;

  onMount(() => {
    const chart = getChart();
    if (chart) {
      series = (chart as IChartApi & { addCandlestickSeries: (options?: CandlestickSeriesPartialOptions) => ISeriesApi<'Candlestick'> }).addCandlestickSeries(options);
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
