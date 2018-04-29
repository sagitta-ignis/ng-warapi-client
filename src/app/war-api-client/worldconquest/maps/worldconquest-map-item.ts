import { WorldconquestMapFlag } from './worldconquest-map-flag.enum';
import { WorldconquestTeam } from '../worldconquest-team.enum';
import { WorldconquestMapIcon } from './worldconquest-map-icon.enum';

export interface IWorldconquestMapItem {
  teamId: WorldconquestTeam;
  iconType: WorldconquestMapIcon;
  x: number;
  y: number;
  flags: number;
}
