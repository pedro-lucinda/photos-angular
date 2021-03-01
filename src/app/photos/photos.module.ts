import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [PhotoComponent],
  // precisa colocar para tornar acessivel
  exports: [PhotoComponent]
})

export class PhotosModule{

}


