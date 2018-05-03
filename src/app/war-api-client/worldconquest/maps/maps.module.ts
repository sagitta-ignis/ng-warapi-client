import { NgModule } from '@angular/core';
import { WorldconquestMapsHttpService } from './maps-http.service';
import { WarApiClientModule } from '../../war-api-client.module';

@NgModule({
  imports: [WarApiClientModule],
  providers: [WorldconquestMapsHttpService]
})
export class WorldconquestMapsModule { }
