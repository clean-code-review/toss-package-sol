import { Txt, Box } from '@saul-atomrigs/design-system';
import { useNavigation } from '../hooks/navigation';
import { START_ROUTE } from './start/constants';

export default function NotFound() {
  const { goTo } = useNavigation();

  return (
    <Box padding="32px">
      <Txt size="xl" weight="bold" color="red">
        404 - 페이지를 찾을 수 없습니다
      </Txt>
      <Txt size="base">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </Txt>
      <button onClick={() => goTo(START_ROUTE)} style={{ marginTop: '24px', padding: '8px 16px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        홈으로 이동
      </button>
    </Box>
  );
}