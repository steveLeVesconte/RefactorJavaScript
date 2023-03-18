
const statement = require('./statement.js');

test('calculate total amount', () => {

const invoices =[
  {
      "customer":"BigCo",
      "performances":[
          {
              "playID":"hamlet",
              "audience":55
          },
          {
              "playID":"as-like",
              "audience":35
          },
          {
              "playID":"othello",
              "audience":40
          }
      ]
  }
];

  const plays = {
    'hamlet': { name: 'Hamlet', type: 'tragedy' },
    'as-like': { name: 'As You Like It', type: 'comedy' },
    'othello': { name: 'Othello', type: 'tragedy' },
  };
  const result = statement.statement(invoices, plays);
  expect(result).toEqual('Statement for BigCo\n' +
    'Hamlet: $650.00 (55 seats)\n' +
    'As You Like It: $580.00 (35 seats)\n' +
    'Othello: $500.00 (40 seats)\n' +
    'Amount owed is $1,730.00\n' +
    'You earned 47 credits\n');
});
