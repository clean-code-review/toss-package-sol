import { Box, List } from '@saul-atomrigs/design-system';
import { useNavigate } from 'react-router-dom';
import { usePackageInfoStore, StoreType } from '../store/package-info';

export default function StartPage() {
  const navigate = useNavigate();
  const { setStore } = usePackageInfoStore();

  const handleStoreSelect = (store: StoreType) => {
    setStore(store);
    navigate('/to');
  };

  return (
    <List direction='vertical'>
      <Box onClick={() => handleStoreSelect('gs25')}>GS25</Box>
      <Box onClick={() => handleStoreSelect('cu')}>CU</Box>
    </List>
  );
}
