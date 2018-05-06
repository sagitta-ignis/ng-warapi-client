import { NgModule } from '@angular/core';
import { WorldconquestMapsHttpService } from './maps-http.service';
import { WarApiClientModule } from '../../war-api-client.module';
import { IconImageService } from './icon-image.service';

@NgModule({
  imports: [WarApiClientModule],
  providers: [WorldconquestMapsHttpService, IconImageService]
})
export class WorldconquestMapsModule { }
