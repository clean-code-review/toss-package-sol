import { useNavigate } from 'react-router-dom';
import { Path } from '../router';

export function useNavigation() {
  const navigate = useNavigate();

  const goTo = (path: Path) => {
    navigate(path);
  };

  return {
    goTo,
  };
}
