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
  sellRecord: function(recordToSell){
    this.bankBalance -= (recordToSell.price * recordToSell.quanity);
  }
}

module.exports = RecordStore;
