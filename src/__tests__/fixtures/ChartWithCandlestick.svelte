<script lang="ts">
  import Chart from '../../components/Chart.svelte';
  import CandlestickSeries from '../../components/CandlestickSeries.svelte';
  import type { CandlestickData } from 'lightweight-charts';

  export let data: CandlestickData[] = [];
</script>

<Chart>
  <CandlestickSeries {data} />
</Chart>
