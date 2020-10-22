import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import 'App.css';
import { Crew } from 'domains/crew';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { crewSlice } from 'features/crew';
import { RootState } from 'features';
import Crews from '../components/Crews';

interface ParamType {
  forceCode: string;
}

const EnhancedCrews: FC = () => {
  const crews = useSelector<RootState, Crew[]>(
    (state: RootState) => state.crew.crews,
  );
  const { forceCode } = useParams<ParamType>();
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
  }, []);

  return <Crews crews={crews} isLoading={isLoading} />;
};

export { crewSlice, EnhancedCrews };
