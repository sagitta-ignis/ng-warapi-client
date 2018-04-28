import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WarApiHttpClient } from './war-api-http-client.service';
import { WARAPI_ROOT } from './war-api-client.module';

describe('WarApiHttpClientService', () => {

  const apiRoot = 'https://war-service-live.foxholeservices.com/api';
  let httpTestingController: HttpTestingController;
  let warApiHttpClient: WarApiHttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        {provide: WARAPI_ROOT, useValue: apiRoot},
        WarApiHttpClient
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    warApiHttpClient = TestBed.get(WarApiHttpClient);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject([WarApiHttpClient], (service: WarApiHttpClient) => {
    expect(service).toBeTruthy();
  }));

  it('should append GET url to provided root', () => {
    const mapsEndpoint = '/worldconquest/maps';

    warApiHttpClient.get(mapsEndpoint).subscribe();
    const req = httpTestingController.expectOne(`${apiRoot}${mapsEndpoint}`);
    expect(req.request.method).toEqual('GET');
    req.flush([]);
  });

  it('should append GET url to provided root and add slash if needed', () => {
    const mapsEndpoint = 'worldconquest/maps';

    warApiHttpClient.get(mapsEndpoint).subscribe();
    const req = httpTestingController.expectOne(`${apiRoot}/${mapsEndpoint}`);
    expect(req.request.method).toEqual('GET');
    req.flush([]);
  });
});
