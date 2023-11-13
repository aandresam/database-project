import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon, IonicModule } from '@ionic/angular';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BtnComponent } from './components/btn/btn.component';
import { TableComponent } from './components/table/table.component';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    BtnComponent,
    TableComponent,
    ComboboxComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    BtnComponent,
    TableComponent,
    ComboboxComponent,
    FormsModule,
    IonicModule
  ]
})
export class SharedModule { }
