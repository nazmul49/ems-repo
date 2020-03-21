import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';
import { AppConstants } from '../app.constant';

@Injectable()
export class EmployeeService {

  private _employeeListUrl: string = environment.baseUrl + environment.getEmployeeList;
  private _addEmployeeUrl: string = environment.baseUrl + environment.addEmployee;

  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getEmployees() {
    return this._http.get<any>(this._employeeListUrl, this._httpOptions)
      .catch(this.errorHandler);
  }

  addEmployee(employeeData) {
    // let formData: FormData = new FormData();
    // formData.append('name', employeeData.name);
    // formData.append('contact_number', employeeData.contactNumber);
    // formData.append('email', employeeData.email);
    // formData.append('gender', employeeData.gender);
    // formData.append('date_of_birth', employeeData.dob);
    // formData.append('programming_language', employeeData.programmingLanguage);
    // formData.append('present_address', employeeData.presentAddress);
    // formData.append('file', file);
    // console.log("Employee data: ", employeeData);

    let requestData = {};
    if (employeeData.id != null) {
      requestData['id'] = employeeData.id;
    }
    requestData['name'] = employeeData.name;
    requestData['contact_number'] = employeeData.contactNumber;
    requestData['email'] = employeeData.email;
    requestData['gender'] = employeeData.gender;
    requestData['date_of_birth'] = employeeData.dob;
    requestData['programming_language'] = employeeData.programmingLanguage;
    requestData['present_address'] = employeeData.presentAddress;
    requestData['profile_picture_url'] = employeeData.profile_picture_url;

    return this._http.post<any>(this._addEmployeeUrl, JSON.stringify(requestData), this._httpOptions)
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
