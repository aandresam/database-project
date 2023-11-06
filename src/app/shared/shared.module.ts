import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon, IonicModule } from '@ionic/angular';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BtnComponent } from './components/btn/btn.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    BtnComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    BtnComponent
  ]
})
export class SharedModule { }
