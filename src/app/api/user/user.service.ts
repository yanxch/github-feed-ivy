import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {flatMap, map} from 'rxjs/operators';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  readUser(username: string): Promise<User> {
    return this.http.get(`https://api.github.com/users/${username}`)
      .pipe(
        map(avatarUrl),
      )
      .toPromise();
  }
}

function avatarUrl(response: any): User {
  return {
    name: response.login,
    avatarUrl: response.avatar_url
  };
}
