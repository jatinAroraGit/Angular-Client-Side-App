import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Position } from "./position";
import { HttpClientModule } from "@angular/common/http";

@Injectable()
export class PositionService {


  constructor(private http: HttpClient) { }
  private url = "https://web422-api.herokuapp.com";
  getPositions(): Observable<Position[]> 
  {
    return this.http.get<Position[]>(`${this.url}/positions`);

  }
  getPosition(id) : Observable<Position[]> {
    return this.http.get<Position[]>(`${this.url}/position/` + id);
  }

  savePosition(Position) : Observable<any>{
    return this.http.put<any>(this.url + '/position/' + Position._id, Position);
  }
}
