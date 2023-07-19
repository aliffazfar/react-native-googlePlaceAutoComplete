import {useAppSelector} from '../redux';

export const useQueryPlaces = () => {
  return useAppSelector(state => state.queryPlaces);
};
