import { Component, OnInit, Input } from '@angular/core';
import  { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { ConfigService } from "../config.service";


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
post = { };

  constructor(private route: ActivatedRoute,
              private config: ConfigService,
              private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id'); //perno to id apo to parameter k vazo to + mprosta gia na gini string
    this.post = this.getPostbyID(id);

  }

  getPostbyID(id: number) {
    return this.config.getPostbyID(id);
  }


  getBack() {
    this.location.back();
  }
}
