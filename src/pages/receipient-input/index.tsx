import React, { useState } from 'react';
import { TextInput, Txt, Box, Button } from '@saul-atomrigs/design-system';
import { usePackageInfoStore } from '../../store/package-info';
import { useNavigation } from '../../hooks/navigation';
import { CAUTIONS_CONFIRM_ROUTE } from '../cautions-confirm/constants';

export default function ReceipientInputPage() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { receipientInfo, setRecipientInfo } = usePackageInfoStore();
  const { goTo } = useNavigation();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleNext = () => {
    setRecipientInfo({
      ...receipientInfo,
      name,
      phone: phoneNumber,
    });
    goTo(CAUTIONS_CONFIRM_ROUTE);
  };

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
      <Box>
        <TextInput
          label='이름'
          name='recipientName'
          value={name}
          onChange={handleNameChange}
        />
        <TextInput
          label='휴대폰 번호'
          name='recipientPhone'
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </Box>
      <Button onClick={handleNext} fullWidth>
        다음
      </Button>
    </>
  );
}
