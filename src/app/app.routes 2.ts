import { NgModule } from '@angular/core';            // <-- THIS must be imported
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { Notfound404Component } from './pages/notfound404/notfound404.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NewgoalComponent } from './pages/goals/newgoal/newgoal.component';
import { GoallistComponent } from './pages/goals/goallist/goallist.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/settings/profile/profile.component';
import { SecurityComponent } from './pages/settings/security/security.component';
import { ReleasenotesComponent } from './pages/settings/releasenotes/releasenotes.component';
import { AccountComponent } from './pages/account/account.component';
import { SigninComponent } from './pages/account/signin/signin.component';
import { LogoutComponent } from './pages/account/logout/logout.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SupportComponent } from './pages/settings/support/support.component';
import { DocumentationComponent } from './pages/settings/documentation/documentation.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [
    {
//        path: ':accountUserId',
        path: 'username',
        // correct to redirect to public if account user id does not exist
        // if account user id is not current user, check to see if the details have been shared with the current user
        // if account user id did not permit current user to have access, .. ??
        component: LayoutComponent,
        children: [
            { path: 'welcome', component: WelcomeComponent },
            { 
                path: 'goals',
                component: GoalsComponent,
                data: {
                    breadcrumb: 'Goals'
                },
                children: [
                    {
                        path: 'new',
                        component: NewgoalComponent,
                        data: {
                            breadcrumb: 'New Goal'
                        },
                    },
                    /*
                    Uncommit after there is a reference to an actual goal
                    {
                        path: ':goalId',
                        component: GoaldetailsComponent,
                        data: {
                            breadcrumb: ':goalName'
                        },
                    },
                    */
                    {
                        path: '',
                        component: GoallistComponent,
                        data: {
                            breadcrumb: 'Goals List'
                        }
                    },
                    {
                        path: '**',
                        redirectTo: '',
                        pathMatch: 'prefix'
                    }
                ]
            },
            { 
                path: 'settings',
                component: SettingsComponent,
                data: {
                    breadcrumb: 'Settings'
                },
                children: [
                    { 
                        path: 'profile',
                        component: ProfileComponent,
                        data: {
                            breadcrumb: 'Profile'
                        },
                    },
                    { 
                        path: 'security',
                        component: SecurityComponent,
                        data: {
                            breadcrumb: 'Security'
                        },
                    },
                    { 
                        path: 'support',
                        component: SupportComponent,
                        data: {
                            breadcrumb: 'Support'
                        },
                    },
                    { 
                        path: 'documentation',
                        component: DocumentationComponent,
                        data: {
                            breadcrumb: 'Documentation'
                        },
                    },
                    { 
                        path: 'releasenotes', 
                        component: ReleasenotesComponent,
                        data: {
                            breadcrumb: 'Release Notes'
                        },
                    }
                ]
            },
            {
                path: '**',
                redirectTo: 'welcome',
                pathMatch: 'prefix'
            }
        ]
    },
    {
        path: 'account',
        component: AccountComponent,
        children: [
            { path: 'signin', component: SigninComponent },
            { path: 'logout', component: LogoutComponent },
            { path: 'register', component: RegisterComponent }
        ]
    },
    {
        path: '',
        component: PortfolioComponent,
        children: [
            { path: 'home', component: PortfolioComponent },
            { path: 'experience', component: PortfolioComponent },
            { path: 'services', component: PortfolioComponent },
            { path: 'projects', component: PortfolioComponent },
            { path: 'thoughts', component: PortfolioComponent },
            { path: 'testimony', component: PortfolioComponent },
            { path: 'contact', component: PortfolioComponent },
            { path: 'blog', component: PortfolioComponent },
        ]
    },
    // if auth, default to dashboard
    // if no auth, default to "/" .. where this display the home page for the landing page of the sales site
    // setup root production of home to display company name
//    { path: '**', redirectTo: '/', pathMatch: 'full' }
    { path: '**', component: Notfound404Component }

];
const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled', // automatically scrolls to top when navigating
    anchorScrolling: 'enabled',            // enables #fragment scrolling
    scrollOffset: [0, 64]                  // optional: offset scroll to account for fixed header height (like your navbar)
  };
  @NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }