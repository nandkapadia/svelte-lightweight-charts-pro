<script lang="ts">
  import { onMount, onDestroy, getContext } from 'svelte';
  import type { ISeriesApi, IChartApi, BaselineData, BaselineSeriesPartialOptions } from 'lightweight-charts';

  export let data: BaselineData[] = [];
  export let options: BaselineSeriesPartialOptions = {};

  const { getChart } = getContext<{ getChart: () => IChartApi | null }>('chart');
  let series: ISeriesApi<'Baseline'> | null = null;

  onMount(() => {
    const chart = getChart();
    if (chart) {
      series = (chart as IChartApi & { addBaselineSeries: (options?: BaselineSeriesPartialOptions) => ISeriesApi<'Baseline'> }).addBaselineSeries(options);
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
