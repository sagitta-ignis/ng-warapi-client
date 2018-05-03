import { Injectable } from '@angular/core';
import { WarApiHttpClient } from '../../war-api-http-client.service';
import { IWorldconquestMap } from './map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorldconquestMapsHttpService {

  constructor(private api: WarApiHttpClient) { }

  public getMaps() {
    return this.api.get<string[]>(`/worldconquest/maps`);
  }

  public getStaticMap(mapName: string) {
    if (!mapName) {
      throw new Error('mapName must be defined and non empty');
    }
    return this.api.get<IWorldconquestMap>(`/worldconquest/maps/${mapName}/static`);
  }

  public getDynamicMap(mapName: string) {
    if (!mapName) {
      throw new Error('mapName must be defined and non empty');
    }
    return this.api.get<IWorldconquestMap>(`/worldconquest/maps/${mapName}/dynamic/public`);
  }
}
