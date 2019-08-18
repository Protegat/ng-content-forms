import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormExampleComponent } from './form-example/form-example.component';
import { AppComponent } from './app.component';

/* import { AuthGuard } from './auth/auth.guard'; */

const appRoutes: Routes = [
    {
        path: 'formExample',
        component: FormExampleComponent,
    },
    { path: '', redirectTo: '/formExample', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false,
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }