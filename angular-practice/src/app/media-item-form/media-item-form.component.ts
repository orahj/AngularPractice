import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MediaService } from '../media.service';
import { lookupListToken } from '../provider';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private mediaService: MediaService, 
    @Inject(lookupListToken) public lookupLists:any, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('',Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control(''),
    });
  }
  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { year: true };
    }
  }
  onSubmit(mediaItem : any) {
    this.mediaService.add(mediaItem)
    .subscribe(() =>{
      this.router.navigate(['/',mediaItem.medium])
    });
  }
}
