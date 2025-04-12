import { useState } from 'react';
import { Modal, Txt, Box, Button } from '@saul-atomrigs/design-system';

interface DamageWaiverModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DamageWaiverModal = ({
  isOpen,
  onClose,
  onConfirm,
}: DamageWaiverModalProps) => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleConfirm = () => {
    if (isAgreed) {
      onConfirm();
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='보내기 전에 확인해주세요'>
      <Box style={{ marginBottom: '16px' }}>
        <Txt size='base' weight='bold' style={{ marginBottom: '12px' }}>
          이런 물건은 보낼 수 없어요.
        </Txt>
        <Box style={{ marginLeft: '12px', marginBottom: '8px' }}>
          <Txt size='sm'>• 완충재가 충분하지 않을 때</Txt>
        </Box>
        <Box style={{ marginLeft: '12px', marginBottom: '16px' }}>
          <Txt size='sm'>• 제품이 박스 안에서 흔들릴 때</Txt>
        </Box>
      </Box>

      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '24px',
          cursor: 'pointer',
        }}
        onClick={() => setIsAgreed(!isAgreed)}
      >
        <input
          type='checkbox'
          id='damage-waiver'
          checked={isAgreed}
          onChange={() => setIsAgreed(!isAgreed)}
          style={{ marginRight: '8px' }}
        />
        <label htmlFor='damage-waiver'>
          <Txt size='sm'>파손 면책 동의하기</Txt>
        </label>
      </Box>

      <Button fullWidth onClick={handleConfirm} disabled={!isAgreed}>
        확인
      </Button>
    </Modal>
  );
};
