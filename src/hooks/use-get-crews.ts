import { Crew } from 'domains/crew';
import { RootState } from 'features';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { crewSlice } from 'features/crew';

type ReturnValue = {
  crews: Crew[];
  isLoading: boolean;
};

const useGetCrews = (forceCode: string): ReturnValue => {
  const crews = useSelector<RootState, Crew[]>(
    (state: RootState) => state.crew.crews,
  );
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const { update } = crewSlice.actions;

    const load = async (): Promise<void> => {
      setIsLoading(true);
      axios
        .get(
          `https://us-central1-react-exercise2.cloudfunctions.net/app/crews?forceCode=${forceCode}`,
        )
        .then((res) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          dispatch(update(res.data.crews));
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    };
    void load();
  }, [forceCode]);

  return { crews, isLoading };
};

export default useGetCrews;
