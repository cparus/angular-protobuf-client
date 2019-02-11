import { Injectable, } from '@angular/core';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {
  }

  getProtoTest(): Observable<any> {
    return this.http.get('http://localhost:5000/api/Protobufs/ProtobufList', { responseType: 'arraybuffer' })
      .pipe(map((response: ArrayBuffer) => {
        const arr = new Uint8Array(response);
        console.log(arr);
        return response;
      }));
  }
}


