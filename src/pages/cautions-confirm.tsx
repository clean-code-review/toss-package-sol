import React, { useState } from 'react';
import { Txt, Box, Button, Checkbox } from '@saul-atomrigs/design-system';
import { useNavigation } from '../hooks/navigation';

export default function CautionsConfirmPage() {
  const [isChecked, setIsChecked] = useState(false);
  const { goTo } = useNavigation();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleNext = () => {
    if (isChecked) {
      goTo('/return-address');
    }
  };

  return (
    <>
      <Box>
        <Txt size='xl' weight='bold'>
          이 내용을 확인해주세요
        </Txt>
      </Box>
      <Box>
        <Box>
          <Txt>• 박스 또는 비닐 포장을 미리 해주세요</Txt>
        </Box>
        <Box>
          <Txt>• 박스 세 변의 합이 80cm를 넘을 수 없어요</Txt>
        </Box>
        <Box>
          <Txt>• 무게는 500g을 넘을 수 없어요</Txt>
        </Box>
      </Box>
      <Box>
        <Checkbox
          id='cautionsCheck'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </Box>
      <Button onClick={handleNext} fullWidth disabled={!isChecked}>
        유의 사항을 확인했어요
      </Button>
    </>
  );
}
