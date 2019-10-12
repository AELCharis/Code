import { Injectable } from '@angular/core';
import { configuration } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration;

  constructor() { }



  getConfig() {
    return this.config;
  }

  getPostbyID(id: number) {
    return this.config.blog.posts[id - 1 ];   //id post start from 1 array from 0
  }
}
