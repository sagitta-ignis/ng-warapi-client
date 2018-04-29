import { TestBed, inject } from '@angular/core/testing';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { WarApiClientModule } from '../../war-api-client.module';

import { WorldconquestMapsHttpService } from './worldconquest-maps-http.service';

import { maps as testMaps } from '../../../../assets/mocks/maps';
import { map as testStaticMap } from '../../../../assets/mocks/static-map';
import { map as testDynamicMap } from '../../../../assets/mocks/dynamic-map';

describe('WorldconquestMapsHttpService', () => {

  const apiRoot = 'api';
  let httpTestingController: HttpTestingController;
  let worldconquestMapsService: WorldconquestMapsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, WarApiClientModule.forRoot({ apiRoot }) ],
      providers: [
        WorldconquestMapsHttpService
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    worldconquestMapsService = TestBed.get(WorldconquestMapsHttpService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject([WorldconquestMapsHttpService], (service: WorldconquestMapsHttpService) => {
    expect(service).toBeTruthy();
  }));

  describe('/worldconquest/maps', () => {
    it('should GET maps', () => {
      worldconquestMapsService.getMaps().subscribe(
        maps => expect(maps).toEqual(testMaps, 'should return expected maps'),
        fail
      );

      const req = httpTestingController.expectOne(`${apiRoot}/worldconquest/maps`);
      expect(req.request.method).toEqual('GET');
      req.flush(testMaps);
    });
  });

  describe('/worldconquest/maps/:mapName/static', () => {

    it('should GET static map', () => {
      const mapName = 'WeatheredExpanse';

      worldconquestMapsService.getStaticMap(mapName).subscribe(
        map => expect(map as any).toEqual(testStaticMap, 'should return expected static map'),
        fail
      );

      const req = httpTestingController.expectOne(`${apiRoot}/worldconquest/maps/${mapName}/static`);
      expect(req.request.method).toEqual('GET');
      req.flush(testStaticMap);
    });

    it('should throw Error when mapName is undefined', () => {
      expect(() => worldconquestMapsService.getStaticMap(undefined)).toThrowError();
    });

    it('should throw Error when mapName is null', () => {
      expect(() => worldconquestMapsService.getStaticMap(null)).toThrowError();
    });

    it('should throw Error when mapName is empty', () => {
      expect(() => worldconquestMapsService.getStaticMap('')).toThrowError();
    });

  });

  describe('/worldconquest/maps/:mapName/dynamic/public', () => {
    it('should GET dynamic public map', () => {
      const mapName = 'WeatheredExpanse';

      worldconquestMapsService.getDynamicMap(mapName).subscribe(
        map => expect(map as any).toEqual(testDynamicMap, 'should return expected dyanmic map'),
        fail
      );

      const req = httpTestingController.expectOne(`${apiRoot}/worldconquest/maps/${mapName}/dynamic/public`);
      expect(req.request.method).toEqual('GET');
      req.flush(testDynamicMap);
    });

    it('should throw Error when mapName is undefined', () => {
      expect(() => worldconquestMapsService.getDynamicMap(undefined)).toThrowError();
    });

    it('should throw Error when mapName is null', () => {
      expect(() => worldconquestMapsService.getDynamicMap(null)).toThrowError();
    });

    it('should throw Error when mapName is empty', () => {
      expect(() => worldconquestMapsService.getDynamicMap('')).toThrowError();
    });
  });

});
