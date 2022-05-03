import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  medium = '';
  mediaItems: any;
  constructor(private mediaService: MediaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap
    .subscribe(paramMap =>{
      let medium:any = paramMap.get('medium');
      if(medium?.toLowerCase() ==='all'){
        medium = '';
      }
      this.getMediaItems(medium);
    })
  }
  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
  onMediaItemdelete(mediaItem: any){
    this.mediaService.delete(mediaItem)
    .subscribe(() =>{
      this.getMediaItems(this.medium);
    });
  }

}
