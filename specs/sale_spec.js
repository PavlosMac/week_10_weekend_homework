var assert = require('assert');
var Customer = require('../customer');
var RecordStore = require('../record_store');
var Sale = require('../sale');
var Record = require('../record');


var recordStore;
var customer;
var sale;
var record;


  describe('sale', function(){

    beforeEach(function(){

      recordStore = new RecordStore('electric Pavs', "Dean Village", 1500);
      customer = new Customer("Jamie", 50);
      record = new Record("vibrasphere", "breathing place", 6.99, 6);
      sale = new Sale(recordStore, customer);

    });

    it('should be able to make a sale', function(){
      sale.tradeOff(3, record);
      assert.equal(1520.97, recordStore.bankBalance);
      assert.equal(29.03, customer.cashBalance);
    });

  });
