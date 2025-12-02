# @lightweight-charts-pro/svelte

Svelte components for TradingView Lightweight Charts with backend API integration.

## Installation

```bash
npm install @lightweight-charts-pro/svelte lightweight-charts
```

## Features

- 🎯 **Svelte 4 & 5 Support**: Compatible with both Svelte 4 and 5
- 📊 **All Chart Types**: Candlestick, Line, Area, Bar, Histogram, and Baseline charts
- 🔌 **Backend Integration**: WebSocket support for real-time data updates
- 💪 **TypeScript**: Full type safety and IDE autocompletion
- 🎨 **Customizable**: Full access to TradingView Lightweight Charts options
- ⚡ **Performance**: Optimized for large datasets
-  **SSR Ready**: Server-side rendering compatible

## Quick Start

```svelte
<script lang="ts">
  import { Chart, CandlestickSeries } from '@lightweight-charts-pro/svelte';

  const data = [
    { time: '2024-01-01', open: 100, high: 110, low: 95, close: 105 },
    { time: '2024-01-02', open: 105, high: 115, low: 100, close: 110 },
  ];

  const chartOptions = {
    height: 400,
    layout: {
      background: { color: '#ffffff' },
      textColor: '#000000',
    },
  };
</script>

<Chart options={chartOptions}>
  <CandlestickSeries {data} />
</Chart>
```

## Components

- `Chart` - Main chart container
- `CandlestickSeries` - OHLC candlestick charts
- `LineSeries` - Line charts
- `AreaSeries` - Area charts
- `BarSeries` - Bar charts
- `HistogramSeries` - Histogram charts
- `BaselineSeries` - Baseline charts

## Documentation

For detailed documentation and examples, visit the [GitHub repository](https://github.com/nandkapadia/svelte-lightweight-charts-pro).

## License

MIT

## Credits

Built on [TradingView Lightweight Charts](https://github.com/tradingview/lightweight-charts)
