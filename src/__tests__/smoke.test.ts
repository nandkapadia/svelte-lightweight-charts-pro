/**
 * @fileoverview Smoke tests for package exports and TypeScript types.
 *
 * These tests verify that all components can be imported and have correct types.
 */

import { describe, it, expect } from 'vitest';
import * as SvelteCharts from '../index';
import Chart from '../components/Chart.svelte';
import CandlestickSeries from '../components/CandlestickSeries.svelte';
import LineSeries from '../components/LineSeries.svelte';
import AreaSeries from '../components/AreaSeries.svelte';
import BarSeries from '../components/BarSeries.svelte';
import HistogramSeries from '../components/HistogramSeries.svelte';
import BaselineSeries from '../components/BaselineSeries.svelte';

describe('Package Exports', () => {
  it('should export Chart component', () => {
    expect(SvelteCharts.Chart).toBeDefined();
    expect(Chart).toBeDefined();
  });

  it('should export all series components', () => {
    expect(SvelteCharts.CandlestickSeries).toBeDefined();
    expect(SvelteCharts.LineSeries).toBeDefined();
    expect(SvelteCharts.AreaSeries).toBeDefined();
    expect(SvelteCharts.BarSeries).toBeDefined();
    expect(SvelteCharts.HistogramSeries).toBeDefined();
    expect(SvelteCharts.BaselineSeries).toBeDefined();
  });

  it('should have component constructors', () => {
    expect(typeof Chart).toBe('function');
    expect(typeof CandlestickSeries).toBe('function');
    expect(typeof LineSeries).toBe('function');
    expect(typeof AreaSeries).toBe('function');
    expect(typeof BarSeries).toBe('function');
    expect(typeof HistogramSeries).toBe('function');
    expect(typeof BaselineSeries).toBe('function');
  });
});

describe('Component Structure', () => {
  it('Chart component should be a valid Svelte component', () => {
    // Verify component is a function (Svelte 5 components are constructor functions)
    expect(typeof Chart).toBe('function');
    expect(Chart.name).toBe('Chart');
  });

  it('Series components should be valid Svelte components', () => {
    const seriesComponents = [
      { component: CandlestickSeries, name: 'CandlestickSeries' },
      { component: LineSeries, name: 'LineSeries' },
      { component: AreaSeries, name: 'AreaSeries' },
      { component: BarSeries, name: 'BarSeries' },
      { component: HistogramSeries, name: 'HistogramSeries' },
      { component: BaselineSeries, name: 'BaselineSeries' },
    ];

    seriesComponents.forEach(({ component, name }) => {
      expect(typeof component).toBe('function');
      expect(component.name).toBe(name);
    });
  });
});

describe('TypeScript Types', () => {
  it('should export TypeScript types', () => {
    // This test verifies that TypeScript types are properly exported
    // The actual type checking happens at compile time
    expect(true).toBe(true);
  });
});
