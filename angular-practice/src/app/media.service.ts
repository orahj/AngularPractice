import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import{catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
constructor(private http: HttpClient) { }
get(medium: any){
  const getOptions ={
    params: {medium}
  };
  return this.http.get<MediaItemResponse>('mediaitems',getOptions)
  .pipe(map(response => {
    return response.mediaItems;
  }),
  catchError(this.handleError)
  );
}
add(mediaItem: any){
return this.http.post('mediaitems',mediaItem)
.pipe(catchError(this.handleError));
}
delete(mediaItem: any){
  // const index = this.mediaItems.indexOf(mediaItem);
  // if(index >= 0){
  //   this.mediaItems.splice(index,1);
  // }
  return this.http.delete(`mediaitems/${mediaItem.id}`)
  .pipe(catchError(this.handleError));
}
private handleError(error: HttpErrorResponse){
  console.log(error.message);
  return throwError('A data error occured, please try again!')
}
}

interface MediaItem{
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface MediaItemResponse{
  mediaItems: MediaItem[];
}