// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: "http://localhost:8080/api/v1",

  // conductors component api urls
  getConductorList: "admin/conductors",
  deleteConductor: "admin/conductor/delete/",
  addConductor: "admin/conductor/new/",
  editConductor: "admin/conductor/update/",
  unassignedDevicesForConductor: "admin/conductor/free/devices",

  // Employee component api urls
  getEmployeeList: "/employees",
  addEmployee: "/employee/add",
  editEmployee: "/employee/edit"
};
