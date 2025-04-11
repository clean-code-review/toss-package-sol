import { Box, List } from '@saul-atomrigs/design-system';
import { useNavigate } from 'react-router-dom';
import { usePackageInfoStore } from '../../store/package-info';
import { type StoreType } from '../../types/store-types';
import { PRODUCT_INFO_ROUTE } from '../product-info/constants';

export default function ToPage() {
  const navigate = useNavigate();
  const { receipientInfo, setRecipientInfo, store } = usePackageInfoStore();

  const handleStoreSelect = (addressType: StoreType) => {
    setRecipientInfo({
      ...receipientInfo,
      addressType,
    });
    navigate(PRODUCT_INFO_ROUTE);
  };

  // const handleAddressSelect = () => {};

  return (
    <List direction='vertical'>
      <Box onClick={() => handleStoreSelect(store)}>{store} 편의점으로</Box>
      {/* <Box onClick={handleAddressSelect}>원하는 주소로</Box> */}
    </List>
  );
}
