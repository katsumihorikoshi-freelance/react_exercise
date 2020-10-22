import { CrewState } from './crew';
import { ForceState } from './force';

export interface RootState {
  force: ForceState;
  crew: CrewState;
}
