'use strict';

export const openTab = e => {
  try {
    const tabsWrapper = document.querySelector(e);
  
    const tabsHeader = tabsWrapper.querySelectorAll('div')[0];
    const tabsContent = tabsWrapper.querySelectorAll('div')[1];

    const headers = tabsHeader.querySelectorAll('button');
    const content = tabsContent.querySelectorAll('article');

    [...headers].forEach((element, index) => {
      element.addEventListener('click', () => {
        [...headers].forEach((element) => {
          element.classList.remove('tabs__header-item--active');
        });

        [...content].forEach((element) => {
          element.classList.remove('tabs__content--active');
        });

        element.classList.add('tabs__header-item--active');
        content[index].classList.add('tabs__content--active');
      });
    });
  } catch {
    console.error('Tabs not found');
  }
};
