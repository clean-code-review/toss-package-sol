import { useState } from 'react';
import { Txt, Box, Button, Checkbox } from '@saul-atomrigs/design-system';
import { useNavigation } from '../hooks/navigation';

export default function ReturnAddressPage() {
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const { goTo } = useNavigation();

  const handleAddressChange = (value: string) => {
    if (selectedAddress === value) {
      setSelectedAddress(null);
    } else {
      setSelectedAddress(value);
    }
  };

  const handleNext = () => {
    if (selectedAddress) {
      goTo('/confirm');
    }
  };

  return (
    <>
      <Box>
        <Txt size='xl' weight='bold'>
          문제가 생기면 어디로 보낼까요?
        </Txt>
      </Box>
      <Box>
        <Box>
          <Checkbox
            id='home'
            checked={selectedAddress === 'home'}
            onChange={() => handleAddressChange('home')}
          />
          <Txt>집</Txt>
        </Box>
        <Box>
          <Checkbox
            id='office'
            checked={selectedAddress === 'office'}
            onChange={() => handleAddressChange('office')}
          />
          <Txt>회사</Txt>
        </Box>
        <Box
          padding='12px'
          onClick={() => handleAddressChange('new')}
          style={{ cursor: 'pointer', border: '1px solid #e0e0e0' }}
        >
          <Txt>새로운 주소 입력하기</Txt>
        </Box>
      </Box>
      <Button onClick={handleNext} fullWidth disabled={!selectedAddress}>
        확인
      </Button>
    </>
  );
}
