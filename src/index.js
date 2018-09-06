import printMe from './print.js';
import '../css/style.css';

function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');

    let target = 'I am a';
    let mesage = `${target} develop environment! `;
  // Lodash, now imported by this script
    element.innerHTML = 'Hello'+ 'webpack' + mesage;

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    element.classList.add('hello');

    return element;
  }
  
  // document.body.appendChild(component());
  let element = component();
  document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      // printMe();
      document.body.removeChild(element);
      element = component(); // 重新渲染页面后，component 更新 click 事件处理
      document.body.appendChild(element);
    })
  }