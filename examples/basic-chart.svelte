<script lang="ts">
  import { Chart, CandlestickSeries } from '@lightweight-charts-pro/svelte';
  import type { CandlestickData } from 'lightweight-charts';

  const chartOptions = {
    layout: {
      background: { color: '#222' },
      textColor: '#DDD',
    },
    grid: {
      vertLines: { color: '#444' },
      horzLines: { color: '#444' },
    },
  };

  const candlestickData: CandlestickData[] = [
    { time: '2023-01-01', open: 100, high: 110, low: 95, close: 105 },
    { time: '2023-01-02', open: 105, high: 115, low: 100, close: 110 },
    { time: '2023-01-03', open: 110, high: 120, low: 105, close: 115 },
    { time: '2023-01-04', open: 115, high: 125, low: 110, close: 120 },
    { time: '2023-01-05', open: 120, high: 130, low: 115, close: 125 },
  ];

  const seriesOptions = {
    upColor: '#26a69a',
    downColor: '#ef5350',
    borderVisible: false,
    wickUpColor: '#26a69a',
    wickDownColor: '#ef5350',
  };
</script>

<Chart options={chartOptions}>
  <CandlestickSeries data={candlestickData} options={seriesOptions} />
</Chart>
