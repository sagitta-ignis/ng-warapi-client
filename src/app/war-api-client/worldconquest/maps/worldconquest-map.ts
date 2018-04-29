import { IWorldconquestMapItem } from './worldconquest-map-item';
import { IWorldconquestMapTextItem } from './worldconquest-map-text-item';

export interface IWorldconquestMap {
  mapItems: IWorldconquestMapItem[];
  regionId: number;
  mapTextItems: IWorldconquestMapTextItem[];
  worldExtentsMinX: number;
  worldExtentsMinY: number;
  worldExtentsMaxX: number;
  worldExtentsMaxY: number;
  lastUpdated: number;
  version: number;
}
