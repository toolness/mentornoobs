Template.personItem.helpers({
  mentorTopics: function() {
    return this.profile.mentorTopics || [];
  },
  noobTopics: function() {
    return this.profile.noobTopics || [];
  },
  name: function() {
    return this.services.twitter.screenName;
  },
  avatarUrl: function() {
    return this.services.twitter.profile_image_url_https;
  },
  profileUrl: function() {
    return "http://twitter.com/" + this.services.twitter.screenName;
  }
});
