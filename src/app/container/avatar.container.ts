import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CommitsService} from '@api/commits/commits.service';
import {onChange} from '@uitl/input-changed';
import {Commit} from '@api/commits/commit';
import {Failure} from '@api/failure/failure';
import {UserService} from '@api/user/user.service';
import {DomSanitizer} from '@angular/platform-browser';

/*
  It is the first design descision:
  Does the container handles the error or does it propagate it? You decide!

  A container does not have styles nor any template for itself!
 */
@Component({
  selector: 'avatar-container',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarContainer implements OnChanges {

  @Input() username: string;

  avatarUrl: string;
  failures: Failure[] = [];

  constructor(private userService: UserService, private sanitizer: DomSanitizer) { }

  ngOnChanges({username}: SimpleChanges) {
    onChange(username, this.loadAvatar);
  }

  loadAvatar = (username: string) => {
    this.userService.readAvatar(username)
      .then(this.handleSuccess)
      .catch(this.handleFailure);
  }

  handleSuccess = (image: Blob) => {
    console.log(image);
    this.avatarUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(image));
  }

  handleFailure = () => {
    this.failures = [new Failure('Oh dear! Something went wrong, we are sorry!')];
  }
}
