// Import stylesheets
import './style.css';

const items = document.querySelectorAll('.cursor-pointer');
const prev = document.querySelector('li:first-child');
const next = document.querySelector('li:last-child');
let pagesAsArray = document.querySelectorAll('li');

prev.style.display = 'none';
let currentPage = 1;
const valuesOfItems = Object.values(
  document.querySelectorAll('.cursor-pointer p')
).map((item) => item.innerHTML);

function makeVisible(pageNumber) {
  items.forEach((item, index) => {
    if (index === pageNumber * 2 - 1 || index === pageNumber * 2 - 2) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

makeVisible(currentPage);
pagesAsArray[currentPage].style.textDecoration = 'underline';

pagesAsArray.forEach((pageIndicator) => {
  pageIndicator.addEventListener('click', () => {
    const numberOfPageAsText = pageIndicator.querySelector('a').innerHTML;
    const numberOfPage = Number(numberOfPageAsText);

    if (numberOfPage === 1) {
      pagesAsArray[currentPage].style.textDecoration = 'none';
      prev.style.display = 'none';
      next.style.display = 'block';
      currentPage = numberOfPageAsText;
      makeVisible(numberOfPage);
      pagesAsArray[currentPage].style.textDecoration = 'underline';
    }
    if (numberOfPage > 1) {
      pagesAsArray[currentPage].style.textDecoration = 'none';
      prev.style.display = 'block';
      next.style.display = 'block';
      currentPage = numberOfPageAsText;
      makeVisible(numberOfPage);
      pagesAsArray[currentPage].style.textDecoration = 'underline';
    }

    const numberOfLastPage = pagesAsArray.length - 2;

    if (numberOfPage === numberOfLastPage) {
      pagesAsArray[currentPage].style.textDecoration = 'none';
      next.style.display = 'none';
      prev.style.display = 'block';
      makeVisible(numberOfPage);
      pagesAsArray[currentPage].style.textDecoration = 'underline';
    }
    if (pageIndicator.querySelector('a').innerHTML === 'Previous') {
      pagesAsArray[currentPage].style.textDecoration = 'none';

      next.style.display = 'block';
      currentPage = Number(currentPage) - 1;
      makeVisible(currentPage);
      pagesAsArray[currentPage].style.textDecoration = 'underline';
      if (currentPage === 1) {
        prev.style.display = 'none';
      }
    }
    if (pageIndicator.querySelector('a').innerHTML === 'Next') {
      pagesAsArray[currentPage].style.textDecoration = 'none';

      currentPage = Number(currentPage) + 1;
      makeVisible(currentPage);
      prev.style.display = 'block';
      pagesAsArray[currentPage].style.textDecoration = 'underline';

      if (currentPage === numberOfLastPage) {
        next.style.display = 'none';
      }
    }
  });
});
