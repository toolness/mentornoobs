var peopleData = [
  {
    name: 'toolness',
    avatarUrl: 'https://si0.twimg.com/profile_images/61009098/112964840_75_bigger.jpg'
  },
  {
    name: 'iamjessklein',
    avatarUrl: 'https://si0.twimg.com/profile_images/63406159/avatar2_bigger.gif'
  },
  {
    name: 'stenington',
    avatarUrl: 'https://si0.twimg.com/profile_images/1652614705/bighead_bigger.jpeg'
  }
];

Template.peopleList.helpers({
  people: peopleData
});
