import { Txt, Box, Button } from '@saul-atomrigs/design-system';
import { useNavigation } from '../../hooks/navigation';

export default function ConfirmPage() {
  const { goTo } = useNavigation();

  const paymentDetails = {
    productPrice: 35000,
    deliveryFee: 3000,
    discount: 5000,
    totalAmount: 33000,
  };

  const handlePayment = () => {
    alert('결제가 완료되었습니다.');
    goTo('/');
  };

  return (
    <>
      <Box>
        <Txt size='xl' weight='bold'>
          결제 확인
        </Txt>
      </Box>
      <Box padding='16px' bg='#f9f9f9'>
        <Box>
          <Txt size='base'>상품 금액</Txt>
          <Txt size='base'>
            {paymentDetails.productPrice.toLocaleString()}원
          </Txt>
        </Box>
        <Box>
          <Txt size='base'>배송비</Txt>
          <Txt size='base'>{paymentDetails.deliveryFee.toLocaleString()}원</Txt>
        </Box>
        <Box>
          <Txt size='base'>할인</Txt>
          <Txt size='base' color='blue'>
            -{paymentDetails.discount.toLocaleString()}원
          </Txt>
        </Box>
        <Box>
          <Txt size='lg' weight='bold'>
            총 결제 금액
          </Txt>
          <Txt size='lg' weight='bold'>
            {paymentDetails.totalAmount.toLocaleString()}원
          </Txt>
        </Box>
      </Box>
      <Button onClick={handlePayment} fullWidth>
        동의하고 결제하기
      </Button>
    </>
  );
}
