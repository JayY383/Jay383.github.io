// You may wish to find an effective randomizer function on MDN.
/*
const { default: countries } = require('./countries');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
  //The maximum is inclusive and the minimum is inclusive 
}
*/
function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}
// descending sort(b,a)

function sortFunction(a, b, key) {
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
      
      console.log(fromServer);
      if (document.querySelector('.flex-inner')) {
        document.querySelector('.flex-inner').remove();
      }

      const newArr = range(10);
      const newArr2 = newArr.map(() => {
        const number = getRandomIntInclusive(0, 243);
        return fromServer[number];
      });
 
      const reverseList = newArr2.sort((a, b) => sortByKey(b, a, 'name')); 
      const ul = document.createElement('ul');
      ul.className = 'flex-inner';
      $('form').prepend(ul);

      reverseList.forEach((el, i) => {
        const li = document.createElement('li');
        // eslint-disable-next-line no-template-curly-in-string
        $(li).append('<input type="checkbox" value=${el.code} id= ${el.code} />');
        // eslint-disable-next-line no-template-curly-in-string
        $(li).append('<label for = ${el.code}>${el.name}</label>');
        $(ul).append(li);
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
      };
       */
      console.log('fromServer', fromServer)
     

    })
    .catch((err) => console.log(err));
});

