
<div ng-app="artpear" ng-controller="formCtrl">
  <form novalidate>
    First Name:<br>
    <input type="text" ng-model="user.firstName"><br>
    Last Name:<br>
    <input type="text" ng-model="user.lastName">
    e-mail:<br>
    <input type="text" ng-model="user.email">
    About Me:<br>
    <input type="text" ng-model="user.aboutMe">
    <br><br>
    <button ng-click="reset()">RESET</button>
  </form>
  <div class='form-group'>
    <div id="profile" class="user-profile text-left">
      <div class="row img-upload">
        <div class="col-xs-4">
          <img id="avatar" src="[[privateProfile.avatar.url || '/img/user1.png']]" class='img img-circle'>
        </div>
        <div class="col-xs-8">
          <form class="form-inline" role="form">
            <div class="form-group">
              <label for="exampleInputFile">Profile Pic</label>
              <input type="file" id="avatar-upload">
              <p class="help-block">Select a new img (1MB Max) </p>
            </div>
          </form>
  <p>form = {{user}}</p>
  <p>master = {{master}}</p>
</div>



<script>
var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    $scope.master = {firstName: "John", lastName: "Doe"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});
</script>
<script type="text/javascript">
bowtie.user.info(function(user){
  if(!user){
    // There is no user signed in
  }else{
    $("#user_name").val(user.name);
    $("#user_email").val(user.email);
    bowtie.user.profile(function(profile){
      if(profile.avatar){
        $("#avatar").src = profile.avatar.url;
      }
    });
    $("#avatar-upload").on("change", function(){
      var file = this.files[0];
      // Update the current avatar preview
      if(file){
         var fr = new FileReader();
         fr.onload = function () {
           $("#avatar").each(function(){
             this.src = fr.result;
           });
         }
         fr.readAsDataURL(file);
      }
      bowtie.user.profile({
        avatar: file
      });
    });
  }
});
</script>
