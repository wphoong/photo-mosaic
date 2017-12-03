import moment from "moment";

const photos = [{
  id: "1",
  photoLink: "ez",
  title: "test1",
  description: "descript1",
  createdAt: 0
}, 
{
  id: "2",
  photoLink: "ez2",
  title: "test2",
  description: "descript2",
  createdAt: moment(0).subtract(4, "days").valueOf()
},
{
  id: "3",
  photoLink: "ez3",
  title: "test3",
  description: "descript3",
  createdAt: moment(0).add(4, "days").valueOf()
}
];

const photos2 = [{
  photoLink: "ez3",
  title: "test3",
  description: "descript3",
  createdAt: 1000
}];

export { photos as default, photos2 };