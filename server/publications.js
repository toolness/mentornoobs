Meteor.publish(null, function() {
  return Meteor.users.find({}, {
    fields: {
      'profile.mentorTopics': 1,
      'profile.noobTopics': 1,
      'services.twitter.screenName': 1,
      'services.twitter.profile_image_url': 1,
      'services.twitter.profile_image_url_https': 1,
    }
  });
});
