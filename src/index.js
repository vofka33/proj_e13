import './style.css';

const btn = document.querySelector('.btn');
const div_jsonData = document.querySelector('.jsonData');

function getJson() {
  fetch('http://localhost:3000/posts/')
    .then(response => response.json())
    .then(json => {
        div_jsonData.innerHTML = '';
        for (let item of json.values()) {
            // console.log(item);
            div_jsonData.innerHTML += '<br>';
            for (let elem in item) {
                // console.log(elem, '=', item[elem]);
                const newString = `${elem} = ${item[elem]}<br>`;
                div_jsonData.innerHTML += newString;
            }
        }
    })
}
btn.addEventListener('click', getJson);
