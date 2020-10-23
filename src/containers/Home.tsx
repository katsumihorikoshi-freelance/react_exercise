import React, { FC } from 'react';
import 'App.css';
import { forceSlice } from 'features/force';
import useGetForces from 'hooks/use-get-forces';
import Home from '../components/Home';

const EnhancedHome: FC = () => {
  const { forces, isLoading } = useGetForces();

  return <Home forces={forces} isLoading={isLoading} />;
};

export { forceSlice, EnhancedHome };
