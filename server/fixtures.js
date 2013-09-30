var defaultUsers = [
  {
    createdAt: Date.now(),
    profile: {
      name: "Atul Varma",
      mentorTopics: [
        "javascript",
        "html",
        "css"
      ],
      noobTopics: [
        "cooking"
      ]
    },
    services: {
      twitter: {
        screenName: "toolness",
        id : "9717342",
        profile_image_url: "http://a0.twimg.com/profile_images/61009098/112964840_75_normal.jpg",
        profile_image_url_https: "https://si0.twimg.com/profile_images/61009098/112964840_75_normal.jpg"
      }
    }
  },
  {
    createdAt: Date.now(),
    profile: {
      name: "iamjessklein",
      mentorTopics: [
        "design",
        "doodling"
      ],
      noobTopics: [
        "javascript"
      ]
    },
    services: {
      twitter: {
        screenName: "iamjessklein",
        id : "17116749",
        profile_image_url: "http://a0.twimg.com/profile_images/63406159/avatar2_normal.gif",
        profile_image_url_https: "https://si0.twimg.com/profile_images/63406159/avatar2_normal.gif"
      }
    }
  }
];

if (Meteor.users.find().fetch().length == 0) {
  console.log("No users found, adding some.");
  defaultUsers.forEach(function(user) { Meteor.users.insert(user); });
  console.log("Done.");
}
