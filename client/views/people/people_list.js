Template.peopleList.helpers({
  people: function() {
    return Meteor.users.find({_id: {$not: Meteor.userId()}});
  }
});
