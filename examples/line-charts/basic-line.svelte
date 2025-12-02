<script lang="ts">
  /**
   * Basic Line Chart Example
   *
   * This example demonstrates a simple line chart with time series data.
   */
  import { Chart, LineSeries } from '@lightweight-charts-pro/svelte';
  import type { LineData } from 'lightweight-charts';

  function generateLineData(count: number): LineData[] {
    const data: LineData[] = [];
    const baseTime = Math.floor(Date.now() / 1000) - count * 86400;
    let value = 100;

    for (let i = 0; i < count; i++) {
      value += (Math.random() - 0.5) * 5;
      data.push({
        time: (baseTime + i * 86400) as any,
        value: parseFloat(value.toFixed(2)),
      });
    }

    return data;
  }

  const lineData = generateLineData(100);

  const chartOptions = {
    layout: {
      background: { color: '#ffffff' },
      textColor: '#333',
    },
    grid: {
      vertLines: { color: '#f0f0f0' },
      horzLines: { color: '#f0f0f0' },
    },
  };

  const lineOptions = {
    color: '#2196F3',
    lineWidth: 2,
    priceLineVisible: true,
    lastValueVisible: true,
  };
</script>

<div class="example-container">
  <h1>Basic Line Chart</h1>
  <p>
    Line charts are ideal for showing trends over time. This example displays a simple time series
    with a single line.
  </p>

  <Chart options={chartOptions}>
    <LineSeries data={lineData} options={lineOptions} />
  </Chart>

  <div class="stats">
    <h3>Statistics</h3>
    <p>Data points: {lineData.length}</p>
    <p>
      Min: {Math.min(...lineData.map((d) => d.value)).toFixed(2)} | Max: {Math.max(
        ...lineData.map((d) => d.value)
      ).toFixed(2)}
    </p>
    <p>Average: {(lineData.reduce((sum, d) => sum + d.value, 0) / lineData.length).toFixed(2)}</p>
  </div>
</div>

<style>
  .example-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .stats {
    margin-top: 20px;
    padding: 15px;
    background: #f5f5f5;
    border-radius: 4px;
  }

  .stats h3 {
    margin-top: 0;
  }
</style>
