import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { FeaturesComponent } from './components/features/features.component';
import { SideUsersComponent } from './components/side-users/side-users.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    FeaturesComponent,
    SideUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CardComponent,
    FeaturesComponent,SideUsersComponent
  ]
})
export class SharedModule { }
