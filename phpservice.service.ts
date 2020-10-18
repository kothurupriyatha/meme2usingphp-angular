import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'})
export class PhpserviceService {
  //private url = 'http://localhost/memeback/connection.php';
 //private url = 'http://localhost/memeback/testimageconnect.php';
  constructor(private http:HttpClient) {
  }
  /*performGetEx():Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin','*');
      return this.http.get<any>(this.url,{headers:headers});
  
}*/

postImage(fd : FormData): Observable<any>{
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin','*');
  return this.http.post('http://localhost/memeback/testimageconnect.php',fd,{headers:headers, responseType: 'json'} );
  } 

getImage(): Observable<any> {
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin','*');
  return this.http.get( 'http://localhost/memeback/getImage.php',{headers:headers,responseType: 'blob'} ) ; 
 
  }
}