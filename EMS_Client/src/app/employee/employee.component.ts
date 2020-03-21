import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { AppConstants } from '../app.constant';
import { GenderType } from '../enums/gender.enum';
import { ProgrammingLanguageType } from '../enums/programming-language.enum';

import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees = [];
  public errorMsg;
  public uploadedImageUrl: any = null;

  public genderTypeOptions = [];

  public imageBaseUrl = AppConstants.IMAGE_BASE_URL;
  public defaultImageUrl = AppConstants.DEFAULT_IMAGE_URL;

  public employeeForm: FormGroup;

  private _file: File = null;
  private _genderTypes = GenderType;

  constructor(private _employeeService: EmployeeService,
    private _toastr: ToastrService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.genderTypeOptions = Object.keys(this._genderTypes);

    this.getEmployeeList();

    this.employeeForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]],
      contactNumber: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(11)]],
      email: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      programmingLanguage: [null],
      presentAddress: [null]
      // imei: [null, [Validators.required]],
      // callerId: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern('[0-9]*')]]
    });
  }

  getEmployeeList() {
    this._employeeService.getEmployees()
      .subscribe(response => {
        this.employees = response;
      }, error => {
        this._toastr.error(error.error.message);
      });
  }

  onSubmit() {
    /**
     * This function will work for adding and editing employee
     */
    this._employeeService.addEmployee(this.employeeForm.value)
      .subscribe(response => {
        this.employeeForm.reset();
        this.getEmployeeList();
      }, error => {
        this._toastr.error(error.error.message);
      });
  }

  loadEmployeeDetailsOnEditForm(employeeInfo) {
    this.employeeForm.patchValue({
      id: employeeInfo.id,
      name: employeeInfo.name,
      contactNumber: employeeInfo.contact_number,
      email: employeeInfo.email,
      gender: employeeInfo.gender,
      dob: employeeInfo.date_of_birth,
      programmingLanguage: employeeInfo.programming_language,
      presentAddress: employeeInfo.present_address
    });
  }

  handleFileInput(event) {
    if (event.target.files && event.target.files.length > 0) {
      this._file = event.target.files[0];

      var mimeType = this._file.type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }

      var reader = new FileReader();
      reader.readAsDataURL(this._file);
      reader.onload = (_event) => {
        this.uploadedImageUrl = reader.result;
      }
    }
  }
}
