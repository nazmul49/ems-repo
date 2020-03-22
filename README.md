# Employee Management System

Following features are present:
1. Adding new  employee
2. Showing list of employee with search option
3. Updating employee details

### Prerequisites

#### For server side 
```
Java version: 1.8 or higher
Apache Maven version: 3.5 or higher
Database: mysql v7.2.4
```
Database Name: ems (you can change by yourself by editing in application.properties)

N.B. Provide your database user name and password in application.properties

#### For client side
```
node version: 10.0 or higher
npm version: 5.0.0 or higher
angular-cli: 1.7.4 or higher
```

### Downloading project from github

using git cli:

Clone the project from repository (https://github.com/nazmul49/ems-repo)
Example:
```
git clone https://github.com/nazmul49/ems-repo.git
```

### Installation or Build

#### For server side, run the below commands in project directory
```
cd EMS_Server
mvn clean install
mvn spring-boot:run
```
Now server application will be running on localhost:8080
#### For client side, run the below commands in project directory
```
cd EMS_Client
npm install
npm start
```
Now client application will be running on localhost:4200
