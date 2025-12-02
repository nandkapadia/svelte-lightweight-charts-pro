# Svelte Lightweight Charts Pro - Examples

This directory contains comprehensive examples demonstrating various features and use cases of the Svelte wrapper for TradingView's Lightweight Charts library.

## Directory Structure

```
examples/
├── candlestick-charts/    # Candlestick chart examples
├── line-charts/           # Line chart examples
├── area-charts/           # Area chart examples
├── bar-charts/            # Bar chart examples
├── histogram-charts/      # Histogram chart examples
├── baseline-charts/       # Baseline chart examples
└── advanced-features/     # Multi-series and advanced examples
```

## Available Examples

### Candlestick Charts
- **basic-candlestick.svelte** - Basic OHLC candlestick chart
- **customized-candlestick.svelte** - Dark theme with custom styling

### Line Charts
- **basic-line.svelte** - Simple line chart with time series data

### Advanced Features
- **multi-series.svelte** - Multiple series types on one chart (candlesticks, lines, histogram)

## Running Examples

### In a SvelteKit Project

1. Install the package:
```bash
npm install @lightweight-charts-pro/svelte
```

2. Import and use in your Svelte component:
```svelte
<script>
  import { Chart, CandlestickSeries } from '@lightweight-charts-pro/svelte';

  const data = [
    { time: '2023-01-01', open: 100, high: 110, low: 95, close: 105 },
    // ... more data
  ];

  const options = {
    layout: { background: { color: '#ffffff' } }
  };
</script>

<Chart options={options}>
  <CandlestickSeries data={data} />
</Chart>
```

### In a Vite Project

1. Install dependencies:
```bash
npm install @lightweight-charts-pro/svelte lightweight-charts
```

2. Configure vite.config.ts if needed for Svelte support:
```typescript
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
});
```

## Key Concepts

### Chart Component
The `Chart` component is the main container that creates a Lightweight Charts instance. It provides the chart context to all child series components.

**Props:**
- `options` - Chart configuration options (optional)

### Series Components
All series components must be children of a `Chart` component. They use Svelte's context API to access the chart instance.

**Available Series:**
- `CandlestickSeries` - OHLC candlestick charts
- `LineSeries` - Line charts
- `AreaSeries` - Area charts
- `BarSeries` - Bar charts
- `HistogramSeries` - Histogram/volume charts
- `BaselineSeries` - Baseline charts

**Common Props:**
- `data` - Array of data points (required)
- `options` - Series-specific options (optional)

### Reactive Updates
All components support reactive updates. When you update the `data` or `options` props, the chart automatically updates:

```svelte
<script>
  import { Chart, LineSeries } from '@lightweight-charts-pro/svelte';

  let data = [/* initial data */];

  function addDataPoint() {
    data = [...data, { time: Date.now(), value: Math.random() * 100 }];
  }
</script>

<button on:click={addDataPoint}>Add Point</button>
<Chart>
  <LineSeries {data} />
</Chart>
```

## Chart Options

For detailed information about chart and series options, refer to the [TradingView Lightweight Charts documentation](https://tradingview.github.io/lightweight-charts/docs/api).

Common chart options:
```typescript
{
  layout: {
    background: { color: '#ffffff' },
    textColor: '#333'
  },
  grid: {
    vertLines: { color: '#e1e1e1' },
    horzLines: { color: '#e1e1e1' }
  },
  crosshair: {
    mode: 1
  },
  timeScale: {
    timeVisible: true,
    secondsVisible: false
  }
}
```

## TypeScript Support

All components are fully typed. Import types from the package:

```typescript
import type {
  ChartOptions,
  CandlestickData,
  LineData,
  SeriesType
} from '@lightweight-charts-pro/svelte';
```

## Contributing

Found an issue or want to add more examples? Please open an issue or pull request on GitHub.

## License

MIT
