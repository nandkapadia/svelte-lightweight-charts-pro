<script lang="ts">
  import Chart from '../../components/Chart.svelte';
  import CandlestickSeries from '../../components/CandlestickSeries.svelte';
  import LineSeries from '../../components/LineSeries.svelte';
  import type { CandlestickData, LineData } from 'lightweight-charts';

  export let candlestickData: CandlestickData[] = [];
  export let lineData: LineData[] = [];
</script>

<Chart>
  <CandlestickSeries data={candlestickData} />
  <LineSeries data={lineData} />
</Chart>
