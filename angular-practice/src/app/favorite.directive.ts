import { Directive, HostBinding,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {
@HostBinding('class.is-favorite') isFavorite = true;
@HostBinding('class.is-favorite-hovering') hovering = false;

@HostListener('mouseenter') onMouseEnter(){
  this.hovering = true;
}
@HostListener('mouseleave') OnMouseLeave(){
  this.hovering = false;
}
@Input() set appFavorite(value: boolean){
  this.isFavorite = value;
}
}
