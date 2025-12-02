<script lang="ts">
  import { setContext } from 'svelte';
  import BaselineSeries from '../../components/BaselineSeries.svelte';
  import type { IChartApi, BaselineData, BaselineSeriesPartialOptions } from 'lightweight-charts';

  export let mockChart: IChartApi;
  export let data: BaselineData[] = [];
  export let options: BaselineSeriesPartialOptions = {};

  setContext('chart', { getChart: () => mockChart });
</script>

<BaselineSeries {data} {options} />
