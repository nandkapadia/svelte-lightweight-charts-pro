<script lang="ts">
  /**
   * Customized Candlestick Chart Example
   *
   * This example demonstrates advanced styling options for candlestick charts
   * including custom colors, borders, and wick styles.
   */
  import { Chart, CandlestickSeries } from '@lightweight-charts-pro/svelte';
  import type { CandlestickData } from 'lightweight-charts';

  // Generate sample data
  function generateData(count: number): CandlestickData[] {
    const data: CandlestickData[] = [];
    const baseTime = Math.floor(Date.now() / 1000) - count * 86400;
    let price = 100;

    for (let i = 0; i < count; i++) {
      const volatility = 0.02;
      const change = (Math.random() - 0.5) * 2 * volatility * price;
      const open = price;
      const close = price + change;
      const high = Math.max(open, close) * (1 + Math.random() * volatility);
      const low = Math.min(open, close) * (1 - Math.random() * volatility);

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

  const data = generateData(150);

  const darkChartOptions = {
    layout: {
      background: { color: '#1e222d' },
      textColor: '#d1d4dc',
    },
    grid: {
      vertLines: { color: '#2b2b43' },
      horzLines: { color: '#2b2b43' },
    },
    crosshair: {
      mode: 1,
      vertLine: {
        color: '#758696',
        width: 1,
        style: 3,
        labelBackgroundColor: '#4c525e',
      },
      horzLine: {
        color: '#758696',
        width: 1,
        style: 3,
        labelBackgroundColor: '#4c525e',
      },
    },
  };

  const customSeriesOptions = {
    upColor: '#089981',
    downColor: '#f23645',
    borderVisible: true,
    borderUpColor: '#089981',
    borderDownColor: '#f23645',
    wickUpColor: '#089981',
    wickDownColor: '#f23645',
  };
</script>

<div class="example-container">
  <h1>Customized Candlestick Chart</h1>
  <p>
    This example demonstrates a dark-themed candlestick chart with custom colors and border
    styling, similar to popular trading platforms.
  </p>

  <Chart options={darkChartOptions}>
    <CandlestickSeries data={data} options={customSeriesOptions} />
  </Chart>

  <div class="customization-details">
    <h3>Customization Options</h3>
    <ul>
      <li><strong>Dark Theme:</strong> Custom background and text colors</li>
      <li><strong>Custom Colors:</strong> Green (#089981) for bullish, Red (#f23645) for bearish</li>
      <li><strong>Borders:</strong> Enabled with matching colors</li>
      <li><strong>Crosshair:</strong> Enhanced styling with custom colors and dashed lines</li>
    </ul>
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

  .customization-details {
    margin-top: 20px;
    padding: 15px;
    background: #f5f5f5;
    border-radius: 4px;
  }

  .customization-details h3 {
    margin-top: 0;
    font-size: 18px;
  }

  .customization-details ul {
    margin: 10px 0;
    padding-left: 20px;
  }

  .customization-details li {
    margin: 8px 0;
    line-height: 1.6;
  }
</style>
