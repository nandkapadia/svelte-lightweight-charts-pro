<script lang="ts">
  import { setContext } from 'svelte';
  import AreaSeries from '../../components/AreaSeries.svelte';
  import type { IChartApi, AreaData, AreaSeriesPartialOptions } from 'lightweight-charts';

  export let mockChart: IChartApi;
  export let data: AreaData[] = [];
  export let options: AreaSeriesPartialOptions = {};

  setContext('chart', { getChart: () => mockChart });
</script>

<AreaSeries {data} {options} />
