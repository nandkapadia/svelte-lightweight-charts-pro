<script lang="ts">
  import { setContext } from 'svelte';
  import HistogramSeries from '../../components/HistogramSeries.svelte';
  import type { HistogramData, HistogramSeriesPartialOptions } from 'lightweight-charts';

  export let mockChart: any;
  export let data: HistogramData[] = [];
  export let options: HistogramSeriesPartialOptions = {};

  setContext('chart', { getChart: () => mockChart });
</script>

<HistogramSeries {data} {options} />
