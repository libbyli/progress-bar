let count = 0;

const changeBar = (button) => {
  let bar = document.getElementsByClassName('bar');
  if (button === 'next') {
    bar[count].style.background = '#ffe2e2';
    count += 1;
  } else {
    count -= 1;
    bar[count].style.background = '#FFFFFF';
  }
};
