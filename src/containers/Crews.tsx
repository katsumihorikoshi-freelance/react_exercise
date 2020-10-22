import React, { FC } from 'react';
import 'App.css';
import { useParams } from 'react-router';
import { crewSlice } from 'features/crew';
import useGetCrews from 'hooks/use-get-crews';
import Crews from '../components/Crews';

interface ParamType {
  forceCode: string;
}

const EnhancedCrews: FC = () => {
  const { forceCode } = useParams<ParamType>();
  const { crews, isLoading } = useGetCrews(forceCode);

  return <Crews crews={crews} isLoading={isLoading} />;
};

export { crewSlice, EnhancedCrews };
