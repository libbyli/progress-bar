let count = 0;

const changeBar = (button) => {
  let bar = document.getElementsByClassName('bar');
  if (button === 'next') {
    bar[count].style.background = 'green';
    count += 1;
  } else {
    count -= 1;
    bar[count].style.background = 'white';
  }
};
