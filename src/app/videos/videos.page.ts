import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  videos: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataVideos();
  }

  getDataVideos(){
    const url = 'https://adamix.net/defensa_civil/def/videos.php';
    this.http.get<any>(url).subscribe(
      {
        next: resp => {
          this.videos = resp.datos;
          console.log(this.videos)
        },
        error: err => {
          console.log(err)
        }
      }
    );
  }
}
