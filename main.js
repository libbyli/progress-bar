let count = 0;

const changeBar = (button) => {
  let bar = document.getElementsByClassName('bar');
  bar[count].style.background = 'green';
  count += 1;
};
