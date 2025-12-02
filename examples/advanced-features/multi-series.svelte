<script lang="ts">
  /**
   * Multi-Series Chart Example
   *
   * This example demonstrates multiple series on a single chart with different types.
   */
  import {
    Chart,
    CandlestickSeries,
    LineSeries,
    HistogramSeries,
  } from '@lightweight-charts-pro/svelte';
  import type { CandlestickData, LineData, HistogramData } from 'lightweight-charts';

  function generateOHLC(count: number) {
    const data: CandlestickData[] = [];
    const baseTime = Math.floor(Date.now() / 1000) - count * 86400;
    let price = 100;

    for (let i = 0; i < count; i++) {
      const change = (Math.random() - 0.5) * 4;
      const open = price;
      const close = price + change;
      const high = Math.max(open, close) + Math.random() * 2;
      const low = Math.min(open, close) - Math.random() * 2;

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

  const priceData = generateOHLC(100);

  // Calculate Simple Moving Average
  function calculateSMA(data: CandlestickData[], period: number): LineData[] {
    const sma: LineData[] = [];

    for (let i = period - 1; i < data.length; i++) {
      const sum = data.slice(i - period + 1, i + 1).reduce((acc, d) => acc + d.close, 0);
      sma.push({
        time: data[i].time,
        value: sum / period,
      });
    }

    return sma;
  }

  const sma20 = calculateSMA(priceData, 20);
  const sma50 = calculateSMA(priceData, 50);

  // Generate volume data
  const volumeData: HistogramData[] = priceData.map((d) => ({
    time: d.time,
    value: Math.random() * 100000,
    color: d.close >= d.open ? 'rgba(38, 166, 154, 0.5)' : 'rgba(239, 83, 80, 0.5)',
  }));

  const chartOptions = {
    height: 500,
    layout: {
      background: { color: '#ffffff' },
      textColor: '#333',
    },
    grid: {
      vertLines: { color: '#e1e1e1' },
      horzLines: { color: '#e1e1e1' },
    },
  };
</script>

<div class="example-container">
  <h1>Multi-Series Chart</h1>
  <p>
    This example combines multiple series types: candlesticks for price action, line series for
    moving averages, and a histogram for volume.
  </p>

  <Chart options={chartOptions}>
    <CandlestickSeries
      data={priceData}
      options={{ upColor: '#26a69a', downColor: '#ef5350', borderVisible: false }}
    />
    <LineSeries data={sma20} options={{ color: '#2196F3', lineWidth: 2, title: 'SMA 20' }} />
    <LineSeries data={sma50} options={{ color: '#FF6D00', lineWidth: 2, title: 'SMA 50' }} />
    <HistogramSeries
      data={volumeData}
      options={{ priceFormat: { type: 'volume' }, priceScaleId: 'volume' }}
    />
  </Chart>

  <div class="legend">
    <h3>Series Legend</h3>
    <div class="legend-item">
      <span class="color-box" style="background: #26a69a"></span>
      <span>Price (Candlesticks)</span>
    </div>
    <div class="legend-item">
      <span class="color-box" style="background: #2196F3"></span>
      <span>SMA 20</span>
    </div>
    <div class="legend-item">
      <span class="color-box" style="background: #FF6D00"></span>
      <span>SMA 50</span>
    </div>
    <div class="legend-item">
      <span class="color-box" style="background: rgba(38, 166, 154, 0.5)"></span>
      <span>Volume</span>
    </div>
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

  .legend {
    margin-top: 20px;
    padding: 15px;
    background: #f5f5f5;
    border-radius: 4px;
  }

  .legend h3 {
    margin-top: 0;
    margin-bottom: 15px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    margin: 8px 0;
  }

  .color-box {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 2px;
  }
</style>
