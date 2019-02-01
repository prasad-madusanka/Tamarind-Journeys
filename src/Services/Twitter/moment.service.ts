import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  constructor(private http: HttpClient) { }

  getMoment(moment_id) {
    var path = environment.SERVICE_TWITTER_MOMENTS + moment_id
    return this.http.get(path)
  }
}
