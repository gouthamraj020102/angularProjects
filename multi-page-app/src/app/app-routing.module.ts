import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CharactersComponent } from "./characters/characters.component";
import { PowersComponent } from "./powers/powers.component";
import { MySharedComponentComponent } from "./shared/my-shared-component/my-shared-component.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'powers/:name', component: PowersComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CharactersComponent, PowersComponent, MySharedComponentComponent];
