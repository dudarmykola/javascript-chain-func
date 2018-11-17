import {chain} from './chain';

const urls = ['//jsonplaceholder.typicode.com/posts/1',
  '//jsonplaceholder.typicode.com/posts/2',
  '//jsonplaceholder.typicode.com/posts/3',
  '//jsonplaceholder.typicode.com/posts/4',
  '//jsonplaceholder.typicode.com/posts/5',
  '//jsonplaceholder.typicode.com/posts/6',
  '//jsonplaceholder.typicode.com/posts/7',
  '//jsonplaceholder.typicode.com/posts/8',
];

chain(urls).then( response => {
  response.map(item => {
    const $res = document.createElement('li');
    $res.innerHTML = `
              <h4>${item.id}</h4>
               <p>${item.title}</p>
               <p>${item.body}</p>
     `;
    document.getElementById('app').appendChild($res);
  });
});

