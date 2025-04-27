import { ChangeEventHandler, useState } from 'react';
import { TextInput, Txt, Box, Button } from '@saul-atomrigs/design-system';
import { usePackageInfoStore } from '../../store/package-info';
import { useNavigation } from '../../hooks/navigation';
import { CAUTIONS_CONFIRM_ROUTE } from '../cautions-confirm/constants';
import { PhoneNumberInput } from './PhoneNumberInput';

export default function ReceipientInputPage() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPhoneError, setShowPhoneError] = useState(false);
  const { receipientInfo, setRecipientInfo } = usePackageInfoStore();
  const { goTo } = useNavigation();

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleNext = () => {
    setShowPhoneError(true);
    
    const isPhoneValid = phoneNumber.length === 11;
    
    if (name && isPhoneValid) {
      setRecipientInfo({
        ...receipientInfo,
        name,
        phone: phoneNumber,
      });
      goTo(CAUTIONS_CONFIRM_ROUTE);
    }
  };

  const isFormValid = name && phoneNumber;

  return (
    <>
      <Box>
        <Txt size='xl' weight='bold'>
          받는 분의 이름을 알려주세요
        </Txt>
        <Txt size='sm' color='secondary'>
          택배 라벨에 표시될 이름입니다
        </Txt>
      </Box>
      <Box style={{gap: '8px'}}>
        <TextInput
          label='이름'
          name='recipientName'
          value={name}
          onChange={handleNameChange}
          placeholder='이름을 입력하세요'
        />
        <PhoneNumberInput
          value={phoneNumber}
          onChange={setPhoneNumber}
          name='recipientPhone'
          showError={showPhoneError}
        />
      </Box>
      <Button onClick={handleNext} fullWidth disabled={!isFormValid}>
        다음
      </Button>
    </>
  );
}
