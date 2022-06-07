// Can be used as an identifier, increment each time when you insert a record
let idx = 0; 

/* 
  Please go through the HTML the code first for better understanding
  You don't need to modify HTML to complete this week's task
  No need to worry about the CSS at all
*/

// DOM Selections
const elements = {
  addButton: document.querySelector('.add__btn'),
  selectOption: document.querySelector('.add__type'),
  descBox: document.querySelector('.add__description'),
  budgetValue: document.querySelector('.add__value'),
  incomeList: document.querySelector('.income__list'),
  expenseList: document.querySelector('.expenses__list'),
  incomeValue: document.querySelector('.budget__income--value'),
  expenseValue: document.querySelector('.budget__expenses--value'),
  ramainingBudgetValue: document.querySelector('.budget__value')
};

// Object to hold the budget records
const budgetRecords = {
  incomes: [], // object structure would be { id, description, value }
  expenses: [],
  incomeTotal: 0,
  expenseTotal: 0,
  remainingBudget: 0,

  addExpense: function (desc, value) {
    // add your code here
    // it should push a new object in the 'this.expenses' array
    console.log(idx, desc, value);
    this.expenses.push({ id: idx++, desc, value });
    this.calculateTotal();

    elements.expenseList.insertAdjacentHTML('beforeend',
      `<div class="item clearfix" id="expense-0">
          <div class="item__description">${desc}</div>
          <div class="right clearfix">
              <div class="item__value">- ${value}</div>
              <div class="item__delete">
                  <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
              </div>
          </div>
      </div>`
    );
  },


  addIncome: function (desc, value) {
    // add your code here
    // it should push a new object in the 'this.incomes' array
    console.log(idx, desc, value);
    this.incomes.push({ id: idx++, desc, value }); 
    this.calculateTotal();

    elements.incomeList.insertAdjacentHTML('beforeend',
        `<div class="item clearfix" id="income-0">
            <div class="item__description">${desc}</div>
            <div class="right clearfix">
                <div class="item__value">+ ${value}</div>
                <div class="item__delete">
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>`
    );
  },

  calculateTotal: function () {
    // add your code here
    // find out the values for this.incomeTotal, this.expenseTotal and this.remainingBudget
    this.incomeTotal = 0;
    this.incomes.map((ele) => {
      this.incomeTotal = this.incomeTotal + parseInt(ele.value);
    });
    console.log("Total Income = " + this.incomeTotal);
    elements.incomeValue.innerHTML = this.incomeTotal;

    this.expenseTotal = 0;
    this.expenses.map((ele) => {
      this.expenseTotal = this.expenseTotal + parseInt(ele.value);
    });
    console.log("Total Expenses = " + this.expenseTotal);
    elements.expenseValue.innerHTML = this.expenseTotal;
    
    this.remainingBudget = this.incomeTotal - this.expenseTotal;
    elements.ramainingBudgetValue.innerHTML = this.remainingBudget;
  }
};

// Adds the event listener on the check button
// Everything is done in this part, no need to modify. Just try to understand
elements.addButton.addEventListener('click', () => {
  const recordType = elements.selectOption.value;
  const desc = elements.descBox.value;
  const value = elements.budgetValue.value;

  if (recordType === 'inc') {
    budgetRecords.addIncome(desc, value);
  } else {
    budgetRecords.addExpense(desc, value);
  }

  // shows the object in the console
  console.log(budgetRecords);
});