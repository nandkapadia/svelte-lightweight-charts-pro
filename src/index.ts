// Main export file for @lightweight-charts-pro/svelte
// Components will be added here as they are implemented

export { default as Chart } from './components/Chart.svelte';
export { default as CandlestickSeries } from './components/CandlestickSeries.svelte';
export { default as LineSeries } from './components/LineSeries.svelte';
export { default as AreaSeries } from './components/AreaSeries.svelte';
export { default as BarSeries } from './components/BarSeries.svelte';
export { default as HistogramSeries } from './components/HistogramSeries.svelte';
export { default as BaselineSeries } from './components/BaselineSeries.svelte';

// Re-export types from lightweight-charts
export type {
  ChartOptions,
  DeepPartial,
  IChartApi,
  ISeriesApi,
  Time,
  SeriesType,
  CandlestickData,
  LineData,
  AreaData,
  BarData,
  HistogramData,
  BaselineData,
} from 'lightweight-charts';
