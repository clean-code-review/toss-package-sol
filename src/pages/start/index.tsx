import { Box, List } from '@saul-atomrigs/design-system';
import { useNavigate } from 'react-router-dom';
import { usePackageInfoStore } from '../../store/package-info';
import { type StoreType } from '../../types/store-types';
import { TO_ROUTE } from '../to/constants';

export default function StartPage() {
  const navigate = useNavigate();
  const { setStore } = usePackageInfoStore();

  const handleStoreSelect = (store: StoreType) => {
    setStore(store);
    navigate(TO_ROUTE);
  };

  return (
    <List direction='vertical'>
      <Box onClick={() => handleStoreSelect('gs25')}>GS25</Box>
      <Box onClick={() => handleStoreSelect('cu')}>CU</Box>
    </List>
  );
}
