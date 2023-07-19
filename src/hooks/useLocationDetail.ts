import {useAppSelector} from '../redux';

export const useLocationDetail = () => {
  return useAppSelector(state => state.placeDetail);
};
