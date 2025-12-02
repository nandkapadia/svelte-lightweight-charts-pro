<script lang="ts">
  import { setContext } from 'svelte';
  import BarSeries from '../../components/BarSeries.svelte';
  import type { IChartApi, BarData, BarSeriesPartialOptions } from 'lightweight-charts';

  export let mockChart: IChartApi;
  export let data: BarData[] = [];
  export let options: BarSeriesPartialOptions = {};

  setContext('chart', { getChart: () => mockChart });
</script>

<BarSeries {data} {options} />
