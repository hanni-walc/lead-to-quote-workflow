import { describe, expect, it } from 'vitest';
import { buildQuote, leadStageFor, followUpSchedule } from './lead-quote';

describe('leadStageFor', () => {
  it('classifies hot leads', () => {
    expect(leadStageFor({ score: 92, source: 'Google Ads' })).toBe('hot');
  });

  it('classifies warm leads', () => {
    expect(leadStageFor({ score: 66, source: 'Referral' })).toBe('warm');
  });

  it('classifies cold leads', () => {
    expect(leadStageFor({ score: 31, source: 'Organic' })).toBe('cold');
  });
});

describe('buildQuote', () => {
  it('calculates totals with add-ons and tax', () => {
    const quote = buildQuote({
      basePrice: 2400,
      addOns: [
        { label: 'Drone shots', price: 300 },
        { label: 'Rush turnaround', price: 200 },
      ],
      taxRate: 0.0825,
      depositRate: 0.25,
    });

    expect(quote.subtotal).toBe(2900);
    expect(quote.tax).toBe(239.25);
    expect(quote.total).toBe(3139.25);
    expect(quote.depositDue).toBe(784.81);
  });

  it('keeps totals stable when there are no add-ons', () => {
    const quote = buildQuote({
      basePrice: 1500,
      addOns: [],
      taxRate: 0,
      depositRate: 0.5,
    });

    expect(quote.subtotal).toBe(1500);
    expect(quote.total).toBe(1500);
    expect(quote.depositDue).toBe(750);
  });
});

describe('followUpSchedule', () => {
  it('returns an opinionated follow-up cadence', () => {
    expect(followUpSchedule('roofing')).toEqual([
      'Send confirmation within 5 minutes',
      'Follow up after 4 hours with quote summary',
      'Follow up next business morning with booking CTA',
      'Check in 72 hours later with a deadline reminder',
    ]);
  });
});
