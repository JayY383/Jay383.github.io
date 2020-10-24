// You may wish to find an effective randomizer function on MDN.
/*
const { default: countries } = require('./countries');
*/
function getRandomIntInclusive(min, max) {
  min1 = Math.ceil(min);
  max1 = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  // The maximum is inclusive and the minimum is inclusive
}

function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}
// descending sort(b,a)

function sortByKey(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {
      // You're going to do your lab work in here. Replace this comment.
     
      if (document.querySelector('.flex-inner')) {
        document.querySelector('.flex-inner').remove();
      }

      const countryArr = range(10);
      const countryArr2 = countryArr.map(() => {
        const number = getRandomIntInclusive(0, 243);
        return fromServer[number];
      });

      const reverseList = countryArr2.sort((a, b) => sortByKey(b, a, 'name'));
      const newol = document.createElement('ol');
      newol.className = 'flex-inner';
      $('form').prepend(newol);

      reverseList.forEach((el, i) => {
        const li = document.createElement('li');
        $(li).append(`<input type="checkbox" value= ${el.code} id= ${el.code} />`);
        $(li).append(`<label for= ${el.code}>${el.name}</label>`);
        $(newol).append(li);
      });
    })
    .catch((err) => console.log(err));
});

/*
      create an array of 10 elements, then loop throught them and then sort and ....
      const conArry2 = conArry.map() => {
        const number =

        function getRandomIntInclusive(min, max) {
        // eslint-disable-next-line no-param-reassign
        min = Math.ceil(min);
        // eslint-disable-next-line no-param-reassign
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
        // The maximum is inclusive and the minimum is inclusive
      }
       */