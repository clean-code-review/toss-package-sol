import { create } from 'zustand';

// 패키지 정보 타입 정의
export type StoreType = 'gs25' | 'cu';
export type ProductType = 'clothes' | 'electronics' | 'books' | 'foods';
export type WeightType = '500g' | '1000g' | '5000g';

export interface RecipientInfo {
  addressType: 'gs25' | 'cu' | 'custom';
  address: string;
  name: string;
  phone: string;
}

export interface PackageInfo {
  store: StoreType;
  product: ProductType;
  value: number;
  weight: WeightType;
  receipientInfo: RecipientInfo;
  returnAddress: string;
}

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
  setRecipientInfo: (to: RecipientInfo) => void;
  setReturnAddress: (address: string) => void;
  reset: () => void;
}

// 패키지 정보 스토어 생성
export const usePackageInfoStore = create<PackageInfo & PackageInfoActions>(
  (set) => ({
    ...initialState,

    // 액션 구현
    setStore: (store) => set({ store }),
    setProduct: (product) => set({ product }),
    setValue: (value) => set({ value }),
    setWeight: (weight) => set({ weight }),
    setRecipientInfo: (receipientInfo) => set({ receipientInfo }),
    setReturnAddress: (returnAddress) => set({ returnAddress }),
    reset: () => set(initialState),
  })
);
