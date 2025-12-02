<script lang="ts">
  /**
   * Basic Candlestick Chart Example
   *
   * This example demonstrates the fundamental usage of CandlestickSeries
   * with sample OHLC data.
   */
  import { Chart, CandlestickSeries } from '@lightweight-charts-pro/svelte';
  import type { CandlestickData } from 'lightweight-charts';

  // Generate sample candlestick data
  function generateCandlestickData(count: number): CandlestickData[] {
    const data: CandlestickData[] = [];
    const baseTime = Math.floor(Date.now() / 1000) - count * 86400;
    let price = 100;

    for (let i = 0; i < count; i++) {
      const change = (Math.random() - 0.5) * 10;
      const open = price;
      const close = price + change;
      const high = Math.max(open, close) + Math.random() * 5;
      const low = Math.min(open, close) - Math.random() * 5;

      data.push({
        time: (baseTime + i * 86400) as any,
        open,
        high,
        low,
        close,
      });

      price = close;
    }

    return data;
  }

  const candlestickData = generateCandlestickData(100);

  const chartOptions = {
    layout: {
      background: { color: '#ffffff' },
      textColor: '#333',
    },
    grid: {
      vertLines: { color: '#e1e1e1' },
      horzLines: { color: '#e1e1e1' },
    },
    timeScale: {
      timeVisible: true,
      secondsVisible: false,
    },
  };

  const seriesOptions = {
    upColor: '#26a69a',
    downColor: '#ef5350',
    borderVisible: false,
    wickUpColor: '#26a69a',
    wickDownColor: '#ef5350',
  };
</script>

<div class="example-container">
  <h1>Basic Candlestick Chart</h1>
  <p>
    This example shows a basic candlestick chart with default styling. Candlestick charts are
    commonly used to visualize price movements in financial markets, showing open, high, low, and
    close values for each time period.
  </p>

  <Chart options={chartOptions}>
    <CandlestickSeries data={candlestickData} options={seriesOptions} />
  </Chart>

  <div class="info">
    <h3>Data Information</h3>
    <p>Number of data points: {candlestickData.length}</p>
    <p>
      Price range: {Math.min(...candlestickData.map((d) => d.low)).toFixed(2)} - {Math.max(
        ...candlestickData.map((d) => d.high)
      ).toFixed(2)}
    </p>
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

  .info {
    margin-top: 20px;
    padding: 15px;
    background: #f5f5f5;
    border-radius: 4px;
  }

  .info h3 {
    margin-top: 0;
    font-size: 18px;
  }
</style>
