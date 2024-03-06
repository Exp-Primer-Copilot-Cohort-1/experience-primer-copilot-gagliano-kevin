function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    scope: {
      member: '='
    },
    template: '<div>{{member.name}} has the following skills: <ul><li ng-repeat="skill in member.skills">{{skill}}</li></ul></div>'
  };
}