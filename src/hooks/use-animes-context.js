import { useContext } from 'react';
import AnimesContext from '@/context/animes';

function useAnimesContext() {
  return useContext(AnimesContext);
}

export default useAnimesContext;
