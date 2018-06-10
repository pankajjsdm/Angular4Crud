import { Injectable } from '@angular/core';
import { Emp } from './emp';
import {observable,of, Observable} from 'rxjs';
import {Http,Headers,Response,RequestOptions} from "@angular/http";
import { HttpHeaders } from '@angular/common/http';

import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
  private serviceurl="http://localhost/api/emps"
private employee:Emp[];
  constructor(private http:Http) { }
  
  GetEmployeeAsync():Observable<Emp[]>{
     return this.http.get(this.serviceurl).pipe(map((res:Response) => res.json()));
  }
  InsertEmployee(data:Emp):Observable<Response>{
  let headers = new Headers({'Content-Type': 'application/json'});
   let body = JSON.stringify(data);
   let response= this.http.post(this.serviceurl,body,{headers: headers}).pipe(map((res:Response)=>res.json()));
    return response;
  }
  UpdateEmployee(data:Emp):Observable<Response>{    
    let headers = new Headers({'Content-Type': 'application/json'});
     let body = JSON.stringify(data);
     let response= this.http.put(this.serviceurl+"/"+ data.id,body,{headers: headers}).pipe(map((res:Response)=>res.json()))
      return response;
    }
DeleteEmployee(id:number):Observable<Response>{    
      let headers = new Headers({'Content-Type': 'application/json'}); 
      alert(id);     
       let response= this.http.delete(this.serviceurl+"/"+ id,{headers: headers}).pipe(map((res:Response)=>res.json()))
        return response;
      }
}
