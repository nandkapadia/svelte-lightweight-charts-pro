# Examples

This directory contains example Svelte components demonstrating how to use `@lightweight-charts-pro/svelte`.

## Available Examples

### basic-chart.svelte
A simple candlestick chart with dark theme styling.

### multi-series.svelte
Demonstrates multiple series types on a single chart:
- Line series
- Area series
- Histogram series

## Running Examples

To use these examples in your own Svelte application:

1. Install the package:
```bash
npm install @lightweight-charts-pro/svelte
```

2. Import and use the components in your Svelte files:
```svelte
<script>
  import { Chart, CandlestickSeries } from '@lightweight-charts-pro/svelte';

  const data = [
    { time: '2023-01-01', open: 100, high: 110, low: 95, close: 105 },
    // ... more data
  ];
</script>

<Chart options={chartOptions}>
  <CandlestickSeries data={data} />
</Chart>
```

## Documentation

For more information, see the [main README](../README.md).
