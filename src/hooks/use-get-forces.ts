import { useEffect, useState } from 'react';
import { Force } from 'domains/force';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'features';
import { forceSlice } from 'features/force';

type ReturnValue = {
  forces: Force[];
  isLoading: boolean;
};
const useGetForces = (): ReturnValue => {
  const forces = useSelector<RootState, Force[]>(
    (state: RootState) => state.force.forces,
  );
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const { update } = forceSlice.actions;

    const load = async (): Promise<void> => {
      setIsLoading(true);
      axios
        .get(
          'https://us-central1-react-exercise2.cloudfunctions.net/app/forces',
        )
        .then((res) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          dispatch(update(res.data.forces));
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    };
    void load();
  }, []);

  return { forces, isLoading };
};
export default useGetForces;
