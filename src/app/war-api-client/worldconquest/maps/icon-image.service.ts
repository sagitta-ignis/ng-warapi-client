import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';
import { WorldconquestMapIcon } from './icon.enum';
import { WorldconquestTeam } from '../team.enum';

export const WARAPI_ICON_PREFIX = new InjectionToken<string>('WARAPI_ICON_PREFIX');
export const WARAPI_ICON_SUFFIX = new InjectionToken<string>('WARAPI_ICON_SUFFIX');

@Injectable()
export class WorldconquestMapIconImageService {

  constructor(
    @Optional() @Inject(WARAPI_ICON_PREFIX) private prefix: string,
    @Optional() @Inject(WARAPI_ICON_SUFFIX) private suffix: string
  ) {
    if (!this.prefix) {
      this.prefix = '';
    }
    if (!this.suffix) {
      this.suffix = '';
    }
  }

  public getIconFilename(icon: WorldconquestMapIcon, team?: WorldconquestTeam): string {
    if (!icon) {
      throw new Error('icon must exist and be non-empty');
    }
    let fileName = this.prefix;
    fileName += this.getFormatedIconName(icon);
    if (team && team !== WorldconquestTeam.NONE) {
      fileName += this.getFormatedTeamName(team);
    }
    fileName += this.suffix;
    return fileName;
  }

  protected getFormatedIconName(icon: WorldconquestMapIcon) {
    return WorldconquestMapIcon[icon];
  }

  protected getFormatedTeamName(team: WorldconquestTeam) {
    return team.substr(0, 1) + team.toLowerCase().substr(1, team.length - 2);
  }
}
