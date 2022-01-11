const getData = () => {
  fetch("./data.json")
    .then(res => res.json())
    .then(data => console.log(data));
};
getData();
