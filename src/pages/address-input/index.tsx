import { ChangeEventHandler, useState } from 'react';
import { TextInput, Txt, Box, Button } from '@saul-atomrigs/design-system';
import { useStore, useRecipientInfo } from '../../store/package-info';
import { useNavigation } from '../../hooks/navigation';

export default function AddressInputPage() {
  const [address, setAddress] = useState('');
  const { store } = useStore();
  const { receipientInfo, setRecipientInfo } = useRecipientInfo();
  const { goTo } = useNavigation();

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAddress(e.target.value);
  };

  const handleNext = () => {
    setRecipientInfo({
      ...receipientInfo,
      address,
    });
    goTo('/receipient-input');
  };

  const isAddressValid = address.length > 0;

  return (
    <>
      <Box>
        <Txt size='xl' weight='bold'>
          받는분 근처 {store}를 알려주세요
        </Txt>
        <Txt size='sm' color='secondary'>
          지역, 지하철역으로도 검색할 수 있어요
        </Txt>
      </Box>
      <Box>
        <TextInput
          label='물건 받을 지점'
          name='storeLocation'
          value={address}
          onChange={handleSearchChange}
          placeholder='주소 또는 지하철역을 입력하세요'
        />
      </Box>
      <Button onClick={handleNext} fullWidth disabled={!isAddressValid}>
        다음
      </Button>
    </>
  );
}
