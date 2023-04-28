import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductManagementComponent } from './views/product-management/product-management.component';
import { CategoryManagementComponent } from './views/category-management/category-management.component';
import { GiftManagementComponent } from './views/gift-management/gift-management.component';
import { ReclamationManagementComponent } from './views/reclamation-management/reclamation-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import {NgToastModule} from 'ng-angular-popup';
import { SearchPipe } from './search.pipe';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    NgChartsModule,
    NgApexchartsModule,
    NgToastModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ProductManagementComponent,
    CategoryManagementComponent,
    GiftManagementComponent,
    ReclamationManagementComponent,
    SearchPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
