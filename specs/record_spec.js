var Record = require('../record');
var assert = require('assert');

var record;

    describe('Record', function(){

      beforeEach(function(){
        record = new Record("the doors", "riding the storm", 5.99, 8);
      });

      it('should have a title', function(){
        assert.equal("riding the storm", record.album);
      });

      it('should have an artist', function(){
        assert.equal("the doors", record.artist);
      });

      it('should have a price', function(){
        assert.equal(5.99, record.price);
      });

      it('should have a stock level', function(){
        assert.equal(8, record.stock);
      });

    });
