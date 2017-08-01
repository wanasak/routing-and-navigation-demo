import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubFollowersService, private route: ActivatedRoute) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .subscribe(combined => {
      const id = +combined[0].get('id');
      const page = combined[1].get('page');
      const order = combined[1].get('order');
      console.log('id:' + id);
      console.log('page: ' + page + ', order:' + order);
    });

    this.service.getAll()
      .subscribe(res => this.followers = res);
  }

}
