import { EventEmitter, Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { PostResponse } from '../interface/postResponse';
import { Subject, catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly baseUrl:string =environment.baseUrl;

  
  
  private http= inject(HttpClient);

  constructor() { }

  public darkMode=signal<boolean>(false);


  getPost(){
    const url=`${this.baseUrl}post`;
    
    return this.http.get<PostResponse>(url)
    .pipe(
      map( ({visitas})=>{
        return visitas;
      }),
      catchError( err => throwError( () => err.error.message ))
    );

  }

  getOnePost(id:string){
    const url=`${this.baseUrl}post/${id}`;
    return this.http.get<any>(url)
    .pipe(
      map( resp=>{
        return resp;
      }),
      catchError( err => throwError( () => err.error.message ))
    );

  }

  enviarNotificacion(body:any){
   
    const url =`${this.baseUrl}email/plaint-email`;
    return this.http.post<any[]>(url,body)
    .pipe(
      map( resp=>{
       
        return resp;
      }),
      catchError( err => throwError( () => err.error.message ))
    );
  }

}
