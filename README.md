# Angular Login Page

This repository contains an example Angular login page application, located in the `auth-app` subdirectory. The project demonstrates a simple authentication flow using Angular 20+ and includes a dashboard and login page.

## Project Structure

```
angular-login-page/
  ├── auth-app/           # Main Angular application
  └── token-storage-practices.md  # Security notes
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.dev/tools/cli) (v20+)

Install Angular CLI globally if you haven't already:
```bash
npm install -g @angular/cli
```

### Installation
1. Navigate to the Angular app directory:
   ```bash
   cd auth-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   
Open your browser and go to [http://localhost:4200](http://localhost:4200) to view the app.

### Building for Production
To build the app for production:
```bash
ng serve
```
The build artifacts will be stored in the `dist/` directory.
