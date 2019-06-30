import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {flatMap, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  readAvatar(username: string): Promise<Blob> {
    return this.http.get(`https://api.github.com/users/${username}`)
      .pipe(
        map(avatarUrl),
        flatMap(url => this.http.get(url, { responseType: 'blob'}))
      )
      .toPromise();
  }
}

function avatarUrl(response: any) {
  return response.avatar_url;
}
