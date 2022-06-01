const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(`please double check your class names, there is no ${selector} class`);
};

const links = getElement(".nav__links");
const navBtnDOM = getElement(".nav__btn");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show__links");
});


const date = getElement("#date");
const currentYear = new Date().getFullYear()
date.text