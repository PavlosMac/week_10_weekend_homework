var RecordStore = function(name, city, bankBalance){
  this.name = name;
  this.city = city;
  this.records = [];
  this.bankBalance = bankBalance;

}

RecordStore.prototype = {
  addRecord: function(record){
    this.records.push(record);
  },

  getBalanceTotal: function(){
    return this.records.reduce(function(a,b){
      return a + b.price;
    }, 0);
  },

  sellRecord: function(quantityToSell, recordToSell){
    this.bankBalance += (recordToSell.price * quantityToSell);
    recordToSell.stock -= quantityToSell;
  },

  findInventoryFor: function(record){
      var aRecord = this.records.find(function(myRecord){
        return record.artist === myRecord.artist;
      })
      return aRecord;
    },

    getInfo: function(){
        var newArray = this.records.map(function(element){
        return element.stock * element.price;
      });
      var stockValue = newArray.reduce(function(a,b){
        return a + b;
      },0);
      var toString = `stock value: ${stockValue.toFixed(2)}, bank balance: ${this.bankBalance}`;
      return toString;
    }

}



module.exports = RecordStore;
