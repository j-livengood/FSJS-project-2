/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// ========== LOAD HTML FIRST ========== //
window.addEventListener('DOMContentLoaded', () => {


// ========== GLOBAL VARIABLES ========== //
const studentList = document.querySelectorAll('.student-item'); // grab list of students
const showItems = 10; // show 10 students


// ========== FUNCTIONS ========== //
const createElement = (elementName, property, value) => {
   const element = document.createElement(elementName);
   element[property] = value;
   return element;
 }

 const appendChild = (elementName, appendTo, property = '', value = '') => {
   const element = createElement(elementName, property, value);
   appendTo.appendChild(element);
   return element;
 }

   // list is studentListItems
   // page is the current page
const showPage = (list, page) => {
   const startIndex = (page * showItems) - showItems;
   const endIndex = page * showItems;

   for (let i = 0; i < list.length; i++) {         // loop over items in student list
      if (i >= startIndex && i < endIndex) {       // check if index of list item is between startIndex and endIndex
         list[i].style.display = '';               // if yes, set display to empty string
      } else {
         list[i].style.display = 'none';           // if no, set display to none
      }
   }
}

const divRemoval = () => {
   const removeDiv = document.querySelector('.pagination');
   if (removeDiv) {
      removeDiv.parentElement.removeChild(removeDiv);
   }
}


// list is studentListItems
// num is showItems
const appendPageLinks = (list) => {
   const page = document.querySelector('.page');     // grab div.page to append div.pagination
   
   // const paginationDiv = createElement('div', 'className', 'pagination');
   // page.appendChild(paginationDiv);   
   const paginationDiv = appendChild('div', page, 'className', 'pagination');                      // append div to page
   const paginationList = appendChild('ul', paginationDiv)

                                                      // determine how many pages are needed
   const numOfPages = Math.ceil(list.length/showItems);     // studentListItems / showItems = numOfPages
                                                      // (example) 50 / 10 = 5    

   for (let i = 0; i < numOfPages; i++) {                          // create loop to determine number of list items
      const paginationListItem = appendChild('li', paginationList)

      const paginationListItemAnchor = appendChild('a', paginationListItem, 'href', '#');
      paginationListItemAnchor.textContent = i + 1;

      if (paginationListItemAnchor.textContent === '1') {     // check for text content on inital page load
         paginationListItemAnchor.className += 'active';       // set first anchor class to active
      }
   }

   
   page.addEventListener('click', (e) => {            // add click listener to each anchor
      if (e.target.tagName === 'A') {                 // check if click target is and anchor tag
         const newPageNum = e.target.textContent;     // grab event targets text content

         for (i = 0; i < paginationList.children.length; i++) {              // loop over anchors and remove class name
            paginationList.children[i].firstElementChild.className = '';     // remove all anchor class names
         }

         e.target.className = 'active';     // add class name to target

         showPage(list, newPageNum);     // show new page
      }
   });
}


// ========== EXCEEDS EXPECTATIONS SECTION ========== //
const appendSearch = () => {
   const page = document.querySelector('.page');     // grab div.page to append div.pagination

   const pageHeader = document.querySelector('.page-header');      // grab page header div
   const searchDiv = appendChild('div', pageHeader, 'className', 'student-search');
   
   const searchBar = appendChild('input', searchDiv, 'type', 'text');
   searchBar.placeholder = 'Search for a student!';       // set placeholder

   const searchButton = createElement('button', 'textContent', 'SEARCH');         // create search button
   searchBar.insertAdjacentElement('afterend', searchButton);     // insert after search input

   let newList = [];

   const filter = (list) => {     // create filter function
      const inputFilter = searchBar.value.toLowerCase();     // grab input value
      newList =[]

      for (let i = 0; i < list.length; i++) { // loop over list of students
         let student = list[i];                                                                   // grab student
         const studentName = list[i].firstElementChild.firstElementChild.nextElementSibling;      // grab students name node
         const nameValue = studentName.textContent;                                               // store the text content

         if (nameValue.toLowerCase().indexOf(inputFilter) > -1) {     // check value against filter
            student.style.display = '';                               // if a match, display is empty
            newList.push(student);
         } else {
            student.style.display = 'none';                           // if not a match, display is none
         }
      }
   };

   page.addEventListener('click', (e) => {     // listen for click
      if (e.target.tagName === 'BUTTON') {     // on search button
         filter(studentList);                  // call filter;
         showPage(newList, 1);
         divRemoval();
         appendPageLinks(newList, showItems);
      }
   });

   // page.addEventListener('keyup', (e) => {     // listen for click
   //    if (e.target.tagName === 'INPUT') {     // on search button
   //       filter(studentList);                  // call filter;
   //       showPage(newList, 1);
   //       divRemoval();
   //       appendPageLinks(newList, showItems);
   //    }
   // });
}




// ========== FUNCTION CALLS ========== //
showPage(studentList, 1);
appendPageLinks(studentList, showItems);
appendSearch();

});