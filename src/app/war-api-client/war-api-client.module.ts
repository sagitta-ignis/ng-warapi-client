import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WarApiClientConfig } from './war-api-client-config';
import { environment } from '../../environments/environment';
import { WarApiHttpClient } from './war-api-http-client.service';

export const WARAPI_ROOT = new InjectionToken<string>('WARAPI_ROOT');

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class WarApiClientModule {
  static forRoot(config?: WarApiClientConfig): ModuleWithProviders {
    return {
      ngModule: WarApiClientModule,
      providers: [
        {provide: WARAPI_ROOT, useValue: (config && config.apiRoot) || environment.apiRoot},
        WarApiHttpClient
      ]
    };
  }
}
