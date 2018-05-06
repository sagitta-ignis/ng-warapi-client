import { TestBed, inject } from '@angular/core/testing';

import { WorldconquestMapIconImageService, WARAPI_ICON_PREFIX, WARAPI_ICON_SUFFIX } from './icon-image.service';
import { WorldconquestMapIcon } from './icon.enum';
import { WorldconquestTeam } from '../team.enum';

describe('WorldconquestMapIconImageService', () => {

  const prefix = 'MapIcon';
  const suffix = '.png';
  let iconImageService: WorldconquestMapIconImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: WARAPI_ICON_PREFIX, useValue: prefix},
        {provide: WARAPI_ICON_SUFFIX, useValue: suffix},
        WorldconquestMapIconImageService
      ]
    });
    iconImageService = TestBed.get(WorldconquestMapIconImageService);
  });

  it('should be created', inject([WorldconquestMapIconImageService], (service: WorldconquestMapIconImageService) => {
    expect(service).toBeTruthy();
  }));

  it('should construct file name as prefix + icon name + suffix', () => {
    const iconName = 'SalvageField';
    expect(iconImageService.getIconFilename(WorldconquestMapIcon[iconName])).toEqual(`${prefix}${iconName}${suffix}`);
  });

  it('should construct file name as prefix + icon name + team name + suffix', () => {
    const iconName = 'SalvageField';
    expect(iconImageService.getIconFilename(WorldconquestMapIcon[iconName], WorldconquestTeam.NONE))
      .toEqual(`${prefix}${iconName}${suffix}`);
    expect(iconImageService.getIconFilename(WorldconquestMapIcon[iconName], WorldconquestTeam.WARDENS))
      .toEqual(`${prefix}${iconName}Warden${suffix}`);
    expect(iconImageService.getIconFilename(WorldconquestMapIcon[iconName], WorldconquestTeam.COLONIALS))
      .toEqual(`${prefix}${iconName}Colonial${suffix}`);
  });

  it('should throw error when icon is null', () => {
    expect(() => iconImageService.getIconFilename(null)).toThrowError();
  });

  it('should throw error when icon is undefined', () => {
    expect(() => iconImageService.getIconFilename(null)).toThrowError();
  });

  it('should throw error when icon is empty', () => {
    expect(() => iconImageService.getIconFilename(null)).toThrowError();
  });
});
