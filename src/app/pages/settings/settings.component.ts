import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Modules, SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{
  Modules!: Modules[];
  ModulesOriginal!: Modules[];
  DataHeaders!: string[];
  TotalRecords!: number;
  loading!: boolean;
  Module: Modules = {
    moduleId: 0,
    moduleName: '',
    description: '',
    iconUrl: '',
    url: '',
    isActive: true
  };
  ModuleToEdit!: number;
  UpdatingModuleId!: number;

  constructor (private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.fnGetModules();
    this.DataHeaders = ['Nombre Módulo','Icono','Nombre Icono', 'Descripcion', 'Url','Action']
  }

  fnGetModules(isUpdate?: boolean){
    if (!isUpdate) this.loading = true;

    this.settingsService.fnHttpGetModules().subscribe((response: HttpResponse<Modules[]>) => {
      if (response.ok){

        this.Modules = JSON.parse(JSON.stringify(response.body));
        this.ModulesOriginal = JSON.parse(JSON.stringify(response.body));
        this.TotalRecords = this.Modules.length;
        setTimeout(() =>  this.loading = false, 500);
      }
      else {
        console.log(`Status code: ${response.status}, message: ${response.statusText}`);
        setTimeout(() =>  this.loading = false, 500);
      }

    }, err =>{
      console.error(`Ocurrió un error: ${err}`)
      setTimeout(() =>  this.loading = false, 500);
    });
  }

  fnEditModule(id: number){
    if(this.ModuleToEdit && this.ModuleToEdit !== id) return;
    this.ModuleToEdit = id
  }

  fnCancelEdit(id: number){
    this.ModuleToEdit = 0;
    this.Modules = JSON.parse(JSON.stringify(this.ModulesOriginal));
  }

  fnSaveModule(module: Modules){
    this.UpdatingModuleId = module.moduleId;
    this.settingsService.fnHttpPutUpdateModule(module).subscribe((response) => {
      console.log(response)
      setTimeout(() => {
        this.UpdatingModuleId = 0;
        this.ModuleToEdit = 0;

      }, 500);
      this.fnGetModules(true);
    }, err => {
      console.error(err)
      this.UpdatingModuleId = 0;
      this.ModuleToEdit = 0;
    });
  }
}
