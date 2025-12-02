<script lang="ts">
  import { setContext } from 'svelte';
  import CandlestickSeries from '../../components/CandlestickSeries.svelte';
  import type { CandlestickData, CandlestickSeriesPartialOptions } from 'lightweight-charts';

  export let mockChart: any;
  export let data: CandlestickData[] = [];
  export let options: CandlestickSeriesPartialOptions = {};

  // Provide mock chart context
  setContext('chart', {
    getChart: () => mockChart,
  });
</script>

<CandlestickSeries {data} {options} />
