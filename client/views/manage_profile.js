var parseTopics = function(template, name) {
  var selector = "input[name=" + name + "Topics]";
  return template.find(selector).value.split(',').map(function(topic) {
    return topic.trim();
  });
};

Template.manageProfile.helpers({
  mentorTopics: function() {
    return (this.profile.mentorTopics || []).join(', ');
  },
  noobTopics: function() {
    return (this.profile.noobTopics || []).join(', ');    
  },
  hasFormChanged: function() {
    if (Session.get('profileForm') === null) return false;
    return Session.get('profileForm') != JSON.stringify([
      this.profile.mentorTopics, this.profile.noobTopics
    ]);
  }
});

Session.set('profileForm', null);

Template.manageProfile.events({
  'keyup input': function(e, t) {
    if (e.keyCode == 13) return t.find('.js-update').click();
    Session.set('profileForm', JSON.stringify([
      parseTopics(t, 'mentor'), parseTopics(t, 'noob')
    ]));
  },
  'click .js-update': function(e, t) {
    Meteor.users.update({_id: t.data._id}, {
      $set: {
        'profile.mentorTopics': parseTopics(t, 'mentor'),
        'profile.noobTopics': parseTopics(t, 'noob')
      }
    });
  }
});
