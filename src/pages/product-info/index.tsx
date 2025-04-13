import { useState } from 'react';
import {
  TextInput,
  Button,
  Txt,
  Box,
  Modal,
  List,
} from '@saul-atomrigs/design-system';
import { usePackageInfoStore } from '../../store/package-info';
import { WEIGHT_OPTIONS, PRODUCT_OPTIONS } from '../../constants';
import { DamageWaiverModal } from '../../components/modals/damage-waiver-modal';
import { ADDRESS_INPUT_ROUTE } from '../address-input/constants';
import { useNavigation } from '../../hooks/navigation';

const weightOptions = Object.values(WEIGHT_OPTIONS);

export default function ProductInfo() {
  const { goTo } = useNavigation();
  const { weight, value, product, setWeight, setValue, setProduct } =
    usePackageInfoStore();

  const [weightModalOpen, setWeightModalOpen] = useState(false);
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [damageWaiverModalOpen, setDamageWaiverModalOpen] = useState(false);

  const handleNext = () => {
    // 필요한 검증 후 면책 동의 모달 표시
    setDamageWaiverModalOpen(true);
  };

  const handleWaiverConfirm = () => {
    goTo(ADDRESS_INPUT_ROUTE);
  };

  return (
    <>
      <Txt size='xl' weight='bold'>
        보내는 물건의 정보를 확인해주세요
      </Txt>

      {/* 물건 무게 */}
      <Box>
        <Txt size='base'>물건 무게</Txt>
        <Button onClick={() => setWeightModalOpen(true)}>
          {weight || '무게 선택'}
        </Button>
      </Box>

      {/* 물건 금액 */}
      <Box>
        <Txt size='base'>물건 금액</Txt>
        <TextInput
          name='value'
          value={value.toString()}
          onChange={(e) => setValue(Number(e.target.value))}
          placeholder='금액을 입력하세요'
          type='number'
        />
      </Box>

      {/* 물건 정보 */}
      <Box>
        <Txt size='base'>물건 정보</Txt>
        <Button onClick={() => setProductModalOpen(true)}>
          {PRODUCT_OPTIONS.find((option) => option.value === product)?.label ||
            '물건 종류 선택'}
        </Button>
      </Box>

      {/* 무게 선택 모달 */}
      <Modal
        isOpen={weightModalOpen}
        onClose={() => setWeightModalOpen(false)}
        title='무게 선택'
      >
        <List direction='vertical'>
          {weightOptions.map((option) => (
            <Box
              key={option}
              padding='12px'
              onClick={() => {
                setWeight(option);
                setWeightModalOpen(false);
              }}
              style={{
                cursor: 'pointer',
                backgroundColor: weight === option ? '#f0f0f0' : 'transparent',
              }}
            >
              <Txt>{option}</Txt>
            </Box>
          ))}
        </List>
      </Modal>

      {/* 물건 정보 선택 모달 */}
      <Modal
        isOpen={productModalOpen}
        onClose={() => setProductModalOpen(false)}
        title='물건 정보 선택'
      >
        <List direction='vertical'>
          {PRODUCT_OPTIONS.map(({ value, label }) => (
            <Box
              key={value}
              padding='12px'
              onClick={() => {
                setProduct(value);
                setProductModalOpen(false);
              }}
              style={{
                cursor: 'pointer',
                backgroundColor: product === value ? '#f0f0f0' : 'transparent',
              }}
            >
              <Txt>{label}</Txt>
            </Box>
          ))}
        </List>
      </Modal>

      {/* 손상 면책 동의 모달 */}
      <DamageWaiverModal
        isOpen={damageWaiverModalOpen}
        onClose={() => setDamageWaiverModalOpen(false)}
        onConfirm={handleWaiverConfirm}
      />

      <Button onClick={handleNext} fullWidth>
        다음
      </Button>
    </>
  );
}
