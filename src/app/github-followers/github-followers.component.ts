import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubFollowersService, private route: ActivatedRoute) { }

  ngOnInit() {
    // query
    this.route.queryParamMap.subscribe(query => {
      const page = +query.get('page');
      const order = query.get('order');
      console.log('page: ' + page + ', order:' + order);
    });

    this.service.getAll()
      .subscribe(res => this.followers = res);
  }

}
