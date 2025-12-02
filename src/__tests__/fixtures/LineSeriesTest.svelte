<script lang="ts">
  import { setContext, onMount } from 'svelte';
  import LineSeries from '../../components/LineSeries.svelte';
  import type { LineData, LineSeriesPartialOptions } from 'lightweight-charts';

  export let mockChart: any;
  export let data: LineData[] = [];
  export let options: LineSeriesPartialOptions = {};

  // Set context immediately during component initialization
  setContext('chart', { getChart: () => mockChart });
</script>

<LineSeries {data} {options} />
