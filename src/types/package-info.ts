import { StoreType, ProductType, WeightType } from './store-types';
import { ReceipientInfo } from './recipient-info';

export interface PackageInfo {
  store: StoreType;
  product: ProductType;
  value: number;
  weight: WeightType;
  receipientInfo: ReceipientInfo;
  returnAddress: string;
}
