import type { ProductType, WeightType } from '../types/store-types';

export const WEIGHT_OPTIONS: Record<string, WeightType> = {
  LIGHT: '500g',
  MEDIUM: '1000g',
  HEAVY: '5000g',
};

export const PRODUCT_OPTIONS: Array<{ value: ProductType; label: string }> = [
  { value: 'clothes', label: '의류' },
  { value: 'electronics', label: '전자제품' },
  { value: 'books', label: '도서' },
  { value: 'foods', label: '식품' },
];
