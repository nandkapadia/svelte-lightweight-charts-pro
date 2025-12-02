<script lang="ts">
  import { setContext } from 'svelte';
  import LineSeries from '../../components/LineSeries.svelte';
  import type { IChartApi, LineData, LineSeriesPartialOptions } from 'lightweight-charts';

  export let mockChart: IChartApi;
  export let data: LineData[] = [];
  export let options: LineSeriesPartialOptions = {};

  // Set context immediately during component initialization
  setContext('chart', { getChart: () => mockChart });
</script>

<LineSeries {data} {options} />
