var joinTopics = function(user, name) {
  return (user.profile[name + 'Topics'] || []).join(', ');
};

var parseTopics = function(template, name) {
  var selector = "input[name=" + name + "Topics]";
  return template.find(selector).value.split(',').map(function(topic) {
    return topic.trim();
  });
};

var topicsChanged = function(template, name) {
  return joinTopics(template.data, name) !=
         parseTopics(template, name).join(', ');
};

var checkFormChanged = function(t) {
  var changed = topicsChanged(t, 'mentor') || topicsChanged(t, 'noob');
  Session.set('profileFormChanged', changed);
};

Template.manageProfile.helpers({
  mentorTopics: function() { return joinTopics(this, 'mentor'); },
  noobTopics: function() { return joinTopics(this, 'noob'); },
  hasFormChanged: function() { return Session.get('profileFormChanged'); }
});

Template.manageProfile.rendered = function() {
  checkFormChanged(this);
};

Template.manageProfile.events({
  'keyup input': function(e, t) {
    if (e.keyCode == 13) return t.find('.js-update').click();
    checkFormChanged(t);
  },
  'click .js-update': function(e, t) {
    Meteor.users.update({_id: t.data._id}, {
      $set: {
        'profile.mentorTopics': parseTopics(t, 'mentor'),
        'profile.noobTopics': parseTopics(t, 'noob')
      }
    });
    checkFormChanged(t);
  }
});
