import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {

  transform(mediaItems:any): any {
    const categories: any | any[] = [];
    mediaItems.forEach((element: any) => {
      if(categories.indexOf(element.category) <= -1){
        categories.push(element.category);
      }
    });

    return categories.join(', ');
  }

}
