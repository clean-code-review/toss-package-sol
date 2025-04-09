import { create } from 'zustand';
import { StoreType, ProductType, WeightType } from '../types/store-types';
import { ReceipientInfo } from '../types/recipient-info';
import { PackageInfo } from '../types/package-info';

// 초기 스토어 상태
const initialState: PackageInfo = {
  store: 'gs25',
  product: 'clothes',
  value: 0,
  weight: '500g',
  receipientInfo: {
    addressType: 'gs25',
    address: '',
    name: '',
    phone: '',
  },
  returnAddress: '',
};

// 액션 타입 정의
interface PackageInfoActions {
  setStore: (store: StoreType) => void;
  setProduct: (product: ProductType) => void;
  setValue: (value: number) => void;
  setWeight: (weight: WeightType) => void;
  setReceipientInfo: (info: ReceipientInfo) => void;
  setReturnAddress: (address: string) => void;
  reset: () => void;
}

// 패키지 정보 스토어 생성
export const usePackageInfoStore = create<PackageInfo & PackageInfoActions>(
  (set) => {
    const setField =
      <K extends keyof PackageInfo>(key: K) =>
      (value: PackageInfo[K]) => {
        set({ [key]: value });
      };

    return {
      ...initialState,

      setStore: setField('store'),
      setProduct: setField('product'),
      setValue: setField('value'),
      setWeight: setField('weight'),
      setReceipientInfo: setField('receipientInfo'),
      setReturnAddress: setField('returnAddress'),

      reset: () => set(initialState),
    };
  }
);
