import { RouterModule, Routes } from "@angular/router";
import { MediaItemFormComponent } from "./media-item-form/media-item-form.component";
import { MediaItemListComponent } from "./media-item-list/media-item-list.component";

const appRoute: Routes = [
    {path: 'add', component:MediaItemFormComponent},
    {path: ':medium', component: MediaItemListComponent},
    {path:'',redirectTo:'all',pathMatch:'full'}
];

export const routing = RouterModule.forRoot(appRoute);