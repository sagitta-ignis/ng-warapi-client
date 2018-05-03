import { WorldconquestMapFlag } from './flag.enum';
import { WorldconquestTeam } from '../team.enum';
import { WorldconquestMapIcon } from './icon.enum';

export interface IWorldconquestMapItem {
  teamId: WorldconquestTeam;
  iconType: WorldconquestMapIcon;
  x: number;
  y: number;
  flags: number;
}
