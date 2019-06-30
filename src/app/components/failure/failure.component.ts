import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import {Failure} from '@api/failure/failure';

@Component({
  selector: 'failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FailureComponent implements OnInit {

  @Input()
  failures: Failure[] = [];

  constructor() {}

  ngOnInit() {}
}
