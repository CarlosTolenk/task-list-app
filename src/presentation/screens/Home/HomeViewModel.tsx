import {useNavigation} from '@react-navigation/native';
import {ScreenValues, StackNavigation} from '../../../router';

interface IHomeViewModel {
  onNavigation(route: ScreenValues): Promise<void>;
}

export const useHomeViewModel = (): IHomeViewModel => {
  const navigation = useNavigation<StackNavigation>();

  async function onNavigation(route: ScreenValues): Promise<void> {
    navigation.navigate(route);
  }

  return {
    onNavigation,
  };
};
