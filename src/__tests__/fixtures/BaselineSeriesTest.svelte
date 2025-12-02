<script lang="ts">
  import { setContext } from 'svelte';
  import BaselineSeries from '../../components/BaselineSeries.svelte';
  import type { BaselineData, BaselineSeriesPartialOptions } from 'lightweight-charts';

  export let mockChart: any;
  export let data: BaselineData[] = [];
  export let options: BaselineSeriesPartialOptions = {};

  setContext('chart', { getChart: () => mockChart });
</script>

<BaselineSeries {data} {options} />
