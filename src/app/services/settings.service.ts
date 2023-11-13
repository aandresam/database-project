import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl + 'settings';
  }

  fnHttpGetModules(): Observable<any>{
    return this.http.get<Modules[]>(`${this.apiUrl}/GetModules`,
    {
      observe: 'response',
      reportProgress: true,
    });
  }

  fnHttpPutUpdateModule(module: Modules): Observable<any>{
    const moduleId: number = module.moduleId;
    const module_send = {
      moduleName: module.moduleName,
      description: module.description,
      iconUrl: module.iconUrl,
      url: module.url
    };
    return this.http.put<Modules>(`${this.apiUrl}/UpdateModule/${moduleId}`, module_send,
    {
      observe: 'response',
      reportProgress: true,
    });
  }
}

export interface Modules{
  moduleId: number,
  moduleName: string,
  description?: string,
  iconUrl?: string,
  url?: string,
  isActive: boolean
}
