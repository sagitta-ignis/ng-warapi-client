import { NgModule } from '@angular/core';
import { WorldconquestMapsHttpService } from './worldconquest-maps-http.service';
import { WorldconquestMapIconImageService } from './worldconquest-map-icon-image.service';
import { WarApiClientModule } from '../../war-api-client.module';

@NgModule({
  imports: [WarApiClientModule],
  providers: [WorldconquestMapsHttpService]
})
export class WorldconquestMapsModule { }
