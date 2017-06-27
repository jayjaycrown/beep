import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePageePage } from './profile-pagee';

@NgModule({
  declarations: [
    ProfilePageePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePageePage),
  ],
  exports: [
    ProfilePageePage
  ]
})
export class ProfilePageePageModule {}
