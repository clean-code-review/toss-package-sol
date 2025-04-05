import { Box, List } from '@saul-atomrigs/design-system';
import { useNavigate } from 'react-router-dom';
import { type StoreType, usePackageInfoStore } from '../store/package-info';

export default function ToPage() {
  const navigate = useNavigate();
  const { receipientInfo, setRecipientInfo, store } = usePackageInfoStore();

  const handleStoreSelect = (addressType: StoreType) => {
    setRecipientInfo({
      ...receipientInfo,
      addressType,
    });
    navigate('/product-info');
  };

  const handleAddressSelect = () => {
    setRecipientInfo({
      ...receipientInfo,
      addressType: 'custom',
    });
    navigate('/product-info');
  };

  return (
    <List direction='vertical'>
      <Box onClick={() => handleStoreSelect(store)}>{store} 편의점으로</Box>
      <Box onClick={handleAddressSelect}>원하는 주소로</Box>
    </List>
  );
}
