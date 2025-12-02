<script lang="ts">
  import Chart from '../../components/Chart.svelte';
  import LineSeries from '../../components/LineSeries.svelte';
  import type { LineData } from 'lightweight-charts';

  export let data: LineData[] = [];
</script>

<Chart>
  <LineSeries {data} />
</Chart>
