import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicsApiService } from './comics/shared/comics-api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicsSvc: ComicsApiService) { }
  allComics!: Observable<any>;

  ngOnInit() {
    this.getComics();
  }

  getComics() {
    this.allComics = this.comicsSvc.getAllComics();
  }
}

