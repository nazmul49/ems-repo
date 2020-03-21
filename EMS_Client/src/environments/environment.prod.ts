export const environment = {
  production: true,
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
