import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

import { AppRoutingModule, routingComponents } from './app-routing.modules';
import { EmployeeService } from './services/employee.service';
import { SearchPipe } from './custom-pipes/search.pipe';

@NgModule({
	declarations: [
		AppComponent,
		SideMenuComponent,
		routingComponents,
		SearchPipe
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		NgbModule.forRoot(),
		DragulaModule.forRoot(),
		ToastrModule.forRoot(),
		AppRoutingModule
	],
	providers: [
		EmployeeService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
