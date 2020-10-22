import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import 'App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Force } from 'domains/force';
import { forceSlice } from 'features/force';
import { RootState } from 'features';
import Home from '../components/Home';

const EnhancedHome: FC = () => {
  const forces = useSelector<RootState, Force[]>(
    (state: RootState) => state.force.forces,
  );
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
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

  return <Home forces={forces} isLoading={isLoading} />;
};

export { forceSlice, EnhancedHome };
