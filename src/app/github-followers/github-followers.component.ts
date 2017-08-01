import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private service: GithubFollowersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    Observable.combineLatest([this.route.paramMap, this.route.queryParamMap])
      .switchMap(combined => {
        const id = +combined[0].get('id');
        const page = combined[1].get('page');
        const order = combined[1].get('order');

        return this.service.getAll();
      })
      .subscribe(followers => this.followers = followers);
  }
}
