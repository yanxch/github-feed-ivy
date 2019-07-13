import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CommitsService} from '@api/commits/commits.service';
import {onChange} from '@util/input-changed';
import {Commit} from '@api/commits/commit';
import {Failure} from '@api/failure/failure';

/*
  It is the first design descision:
  Does the container handles the error or does it propagate it? You decide!

  A container does not have styles nor any template for itself!
 */
@Component({
  selector: 'commits-container',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsContainer implements OnChanges {

  @Input() username: string;

  commits: Commit[] = [];
  failures: Failure[] = [];

  constructor(private commitsService: CommitsService) { }

  ngOnChanges({username}: SimpleChanges) {
    onChange(username, this.loadCommmits);
  }

  loadCommmits = (username: string) => {
    this.commitsService.readCommitsByUsername(username)
      .then(this.handleSuccess)
      .catch(this.handleFailure)
  }

  handleSuccess = (commits: Commit[]) => {
    this.failures = [];
    this.commits = commits;
  }

  handleFailure = () => {
    this.commits = [];
    this.failures = [new Failure('Oh dear! Something went wrong, we are sorry!')];
  };
}
