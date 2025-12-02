<script lang="ts">
  import { Chart, LineSeries, AreaSeries, HistogramSeries } from '@lightweight-charts-pro/svelte';
  import type { LineData, AreaData, HistogramData } from 'lightweight-charts';

  const chartOptions = {
    height: 400,
    layout: {
      background: { color: '#ffffff' },
      textColor: '#333',
    },
    grid: {
      vertLines: { color: '#e1e1e1' },
      horzLines: { color: '#e1e1e1' },
    },
  };

  const lineData: LineData[] = [
    { time: '2023-01-01', value: 100 },
    { time: '2023-01-02', value: 105 },
    { time: '2023-01-03', value: 110 },
    { time: '2023-01-04', value: 115 },
    { time: '2023-01-05', value: 120 },
  ];

  const areaData: AreaData[] = [
    { time: '2023-01-01', value: 95 },
    { time: '2023-01-02', value: 100 },
    { time: '2023-01-03', value: 105 },
    { time: '2023-01-04', value: 110 },
    { time: '2023-01-05', value: 115 },
  ];

  const histogramData: HistogramData[] = [
    { time: '2023-01-01', value: 10, color: '#26a69a' },
    { time: '2023-01-02', value: 15, color: '#26a69a' },
    { time: '2023-01-03', value: 12, color: '#ef5350' },
    { time: '2023-01-04', value: 18, color: '#26a69a' },
    { time: '2023-01-05', value: 20, color: '#26a69a' },
  ];
</script>

<Chart options={chartOptions}>
  <LineSeries data={lineData} options={{ color: '#2196F3', lineWidth: 2 }} />
  <AreaSeries
    data={areaData}
    options={{
      lineColor: '#2962FF',
      topColor: '#2962FF',
      bottomColor: 'rgba(41, 98, 255, 0.28)',
    }}
  />
  <HistogramSeries
    data={histogramData}
    options={{
      priceFormat: { type: 'volume' },
      priceScaleId: 'right',
    }}
  />
</Chart>
