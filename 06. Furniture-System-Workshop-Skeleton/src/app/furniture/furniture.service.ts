import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Furniture } from '../models/furniture';


const creatF = "http://localhost:5000/furniture/create";
const getAllF = "http://localhost:5000/furniture/all";
const getSingleF = "http://localhost:5000/furniture/details/";
const getUserF = "http://localhost:5000/furniture/user";
const deleteF = "http://localhost:5000/furniture/delete/";

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {


  constructor(private http: HttpClient) {

   }
  createFurniture(data){
    return this.http.post(creatF, data);
  }

  getAllFurniture(): Observable<Array<Furniture>> {
    return this.http.get<Array<Furniture>>(getAllF);
  }

  getFurniture(id): Observable<Furniture>{
      return this.http.get<Furniture>(getSingleF + id);
  }

  getUserFurniture(): Observable<Array<Furniture>>{
    return this.http.get<Array<Furniture>>(getUserF);
  }


  deleteFurniture(id){
     return this.http.delete(deleteF + id);
  }

}
