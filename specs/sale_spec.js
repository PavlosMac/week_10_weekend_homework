var assert = require('assert');
var Customer = require('../customer');
var RecordStore = require('../recordStore');
var Sale = require('../sale');
var Record = require('../record');


var recordStore;
var customer;


  describe('sale', function(){

    beforeEach(function(){

      recordStore = new RecordStore('electric Pavs', "Dean Village", 1500);
      customer = new Customer("Jamie", 50);
      sale = new Sale(recordStore, customer);
      record = new Record("vibrasphere", "breathing place", 6.99, 6);

    });

    it('should be able to make a sale', function(){
      sale.makeSale(3, record)
      assert.equal(1520.97, recordStore.bankBalance);
      assert.equal(29.03, recordStore.bankBalance);
    })

  });
