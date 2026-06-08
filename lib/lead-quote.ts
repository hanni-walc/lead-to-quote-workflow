export type LeadSource = 'Google Ads' | 'Referral' | 'Organic' | 'Instagram' | 'Walk-in' | string;

export type LeadInput = {
  score: number;
  source: LeadSource;
};

export type AddOn = {
  label: string;
  price: number;
};

export type BuildQuoteInput = {
  basePrice: number;
  addOns: AddOn[];
  taxRate: number;
  depositRate: number;
};

export type BuildQuoteOutput = {
  subtotal: number;
  tax: number;
  total: number;
  depositDue: number;
  lines: Array<AddOn & { kind: 'base' | 'addon' }>;
};

const roundMoney = (value: number) => Math.round(value * 100) / 100;

export function leadStageFor(lead: LeadInput): 'hot' | 'warm' | 'cold' {
  if (lead.score >= 85) return 'hot';
  if (lead.score >= 55) return 'warm';
  return 'cold';
}

export function buildQuote(input: BuildQuoteInput): BuildQuoteOutput {
  const subtotal = input.basePrice + input.addOns.reduce((sum, addOn) => sum + addOn.price, 0);
  const tax = roundMoney(subtotal * input.taxRate);
  const total = roundMoney(subtotal + tax);
  const depositDue = roundMoney(total * input.depositRate);

  return {
    subtotal: roundMoney(subtotal),
    tax,
    total,
    depositDue,
    lines: [
      { label: 'Base project price', price: input.basePrice, kind: 'base' },
      ...input.addOns.map((addOn) => ({ ...addOn, kind: 'addon' as const })),
    ],
  };
}

const cadenceByVertical: Record<string, string[]> = {
  roofing: [
    'Send confirmation within 5 minutes',
    'Follow up after 4 hours with quote summary',
    'Follow up next business morning with booking CTA',
    'Check in 72 hours later with a deadline reminder',
  ],
  cleaning: [
    'Send confirmation within 10 minutes',
    'Follow up the next morning with before/after examples',
    'Check in 48 hours later with a short booking CTA',
    'Send a final reminder after 5 days',
  ],
  photography: [
    'Send confirmation within 15 minutes',
    'Follow up the same day with portfolio links',
    'Check in 24 hours later with a package reminder',
    'Send a final message after 3 days',
  ],
};

export function followUpSchedule(vertical: string): string[] {
  return cadenceByVertical[vertical.toLowerCase()] ?? [
    'Send confirmation within 10 minutes',
    'Follow up next business morning with a concise quote summary',
    'Check in 72 hours later with a booking CTA',
    'Send one final reminder after 5 days',
  ];
}

export function recommendedDepositPercent(leadStage: 'hot' | 'warm' | 'cold'): number {
  if (leadStage === 'hot') return 0.35;
  if (leadStage === 'warm') return 0.25;
  return 0.15;
}

export function pipelineHealth(leads: LeadInput[]) {
  const hot = leads.filter((lead) => leadStageFor(lead) === 'hot').length;
  const warm = leads.filter((lead) => leadStageFor(lead) === 'warm').length;
  const cold = leads.filter((lead) => leadStageFor(lead) === 'cold').length;
  const total = leads.length || 1;

  return {
    hot,
    warm,
    cold,
    hotRate: roundMoney((hot / total) * 100),
    warmRate: roundMoney((warm / total) * 100),
    coldRate: roundMoney((cold / total) * 100),
  };
}

export function demoLeadToQuoteWorkflow() {
  const lead = {
    name: 'Maya Chen',
    source: 'Google Ads' as const,
    vertical: 'roofing',
    score: 92,
    requestedService: 'Full roof replacement',
    location: 'La Jolla, CA',
  };

  const stage = leadStageFor(lead);
  const quote = buildQuote({
    basePrice: 2400,
    addOns: [
      { label: 'Drone inspection', price: 300 },
      { label: 'Rush turnaround', price: 200 },
    ],
    taxRate: 0.0825,
    depositRate: recommendedDepositPercent(stage),
  });

  return {
    lead,
    stage,
    quote,
    schedule: followUpSchedule(lead.vertical),
  };
}
