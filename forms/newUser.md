<html>
   <head>
      <title>Angular JS Forms</title>
      <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>

      <style>
         table, th , td {
            border: 1px solid grey;
            border-collapse: collapse;
            padding: 5px;
         }

         table tr:nth-child(odd) {
            background-color: #f2f2f2;
         }

         table tr:nth-child(even) {
            background-color: #ffffff;
         }
      </style>

   </head>
   <body>

      <h2>New User Form</h2>
      <div ng-app = "artpear" ng-controller = "userController">

         <form name = "userForm" novalidate>
            <table border = "0">
               <tr>
                  <td>Enter first name:</td>
                  <td><input name = "firstname" type = "text" ng-model = "firstName" required>
                     <span style = "color:red" ng-show = "userForm.firstname.$dirty && userForm.firstname.$invalid">
                        <span ng-show = "userForm.firstname.$error.required">First Name is required.</span>
                     </span>
                  </td>
               </tr>

               <tr>
                  <td>Enter last name: </td>
                  <td><input name = "lastname"  type = "text" ng-model = "lastName" required>
                     <span style = "color:red" ng-show = "userForm.lastname.$dirty && userForm.lastname.$invalid">
                        <span ng-show = "userForm.lastname.$error.required">Last Name is required.</span>
                     </span>
                  </td>
               </tr>

               <tr>
                  <td>Enter Organization: </td>
                  <td><input name = "organizationName"  type = "text" ng-model = "organizationName">
                     <span style = "color:red" ng-show = "userForm.organizationname.$dirty && userForm.organizationname.$invalid">
                        <span ng-show = "userForm.organizationname.$error">Organization Name.</span>
                     </span>
                  </td>
               </tr>

               <tr>
                  <td>Email: </td><td><input name = "email" type = "email" ng-model = "email" length = "100" required>
                     <span style = "color:red" ng-show = "userForm.email.$dirty && userForm.email.$invalid">
                        <span ng-show = "userForm.email.$error.required">Email is required.</span>
                        <span ng-show = "userForm.email.$error.email">Invalid email address.</span>
                     </span>
                  </td>
               </tr>

               <tr>
                  <td>
                     <button ng-click = "reset()">Reset</button>
                  </td>
                  <td>
                     <button ng-disabled = "userForm.firstname.$dirty &&
                        userForm.firstname.$invalid || userForm.lastname.$dirty &&
                        userForm.lastname.$invalid || userForm.email.$dirty &&
                        userForm.email.$invalid" ng-click="submit()">Submit</button>
                  </td>
               </tr>

            </table>
         </form>
      </div>

      <script>
         var mainApp = angular.module("mainApp", []);

         mainApp.controller('userController', function($scope) {
            $scope.reset = function(){
               $scope.firstName = "Buddy";
               $scope.lastName = "Cianci";

               $scope.email = "makeArtWithBuddy@example.com";
            }

            $scope.reset();
         });
      </script>

   </body>
</html>

-----------------------------------------------------
<input name = "firstname" type = "text" ng-model = "firstName" required>
<input name = "lastname" type = "text" ng-model = "lastName" required>
<input name = "email" type = "email" ng-model = "email" required>
<button ng-click = "reset()">Reset</button>

<script>
   function studentController($scope) {
      $scope.reset = function(){
         $scope.firstName = "Buddy";
         $scope.lastName = "Cianci";
         $scope.email = "makeArtWithBuddy@example.com.com";
      }

      $scope.reset();
   }
</script>
