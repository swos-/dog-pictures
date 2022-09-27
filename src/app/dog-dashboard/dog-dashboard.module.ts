import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogDashboardComponent } from './dog-dashboard/dog-dashboard.component';
import { DogService } from './dog-pictures.service';
import { DogPictureComponent } from './dog-dashboard/dog-picture/dog-picture.component';
import { DogLinksComponent } from './dog-dashboard/dog-links/dog-links.component';

@NgModule({
  declarations: [
    DogDashboardComponent,
    DogPictureComponent,
    DogLinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DogDashboardComponent
  ],
  providers: [
    DogService
  ]
})
export class DogDashboardModule { }
