// ============================================================
// AUTHORS CONFIGURATION
// ============================================================
// To add a NEW AUTHOR:
//   1. Add his entry to the list below, at the marked spot.
//   2. Create a new file in js/quotes/ (copy _TEMPLATE.js,
//      rename it to <id>.js, and fill in the quotes).
// ============================================================

window.AUTHORS = [
  {
    id: "tocqueville",
    name: "Alexis de Tocqueville",
    years: "1805 – 1859"
  },
  {
    id: "jefferson",
    name: "Thomas Jefferson",
    years: "1743 – 1826"
  }
,{
       id: "gwashington",
       name: "George Washinton",
       years: "1732 – 1799"
     }
,{
       id: "jadams",
       name: "John Adams",
       years: "1735 – 1826"
     }
,{
       id: "bfranklin",
       name: "Benjamin Franklin",
       years: "1706 – 1790"
     }
,{
       id: "jmadison",
       name: "James Madison",
       years: "1751 – 1836"
     }
,{
       id: "harrystruman",
       name: "Harry S. Truman",
       years: "1894 – 1972"
     }
,{
       id: "gwashington",
       name: "George Washinton",
       years: "1732 – 1799"
     }
,{
       id: "gwashington",
       name: "George Washinton",
       years: "1732 – 1799"
     }
,{
       id: "gwashington",
       name: "George Washinton",
       years: "1732 – 1799"
     }
,{
       id: "gwashington",
       name: "George Washinton",
       years: "1732 – 1799"
     }
,{
       id: "gwashington",
       name: "George Washinton",
       years: "1732 – 1799"
     }

  // ==========================================================
  // ▼▼▼ ADD NEW AUTHOR HERE ▼▼▼
  //
  // ,{
  //   id: "machiavelli",
  //   name: "Niccolò Machiavelli",
  //   years: "1469 – 1527"
  // }
  //
  // ▲▲▲ ADD NEW AUTHOR HERE ▲▲▲
  // ==========================================================
];

window.QUOTES = window.QUOTES || {};
window.registerAuthorQuotes = function(id, quotes) {
  window.QUOTES[id] = quotes;
};

