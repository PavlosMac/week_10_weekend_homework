var Customer = function(name, cashBalance){
  this.name = name;
  this.cashBalance = cashBalance;
  this.records = [];
};


Customer.prototype = {
  buyRecords: function(quantity, record){
    this.records.push(record);
    this.cashBalance -= (quantity * record.price);
  },
  sellRecord: function(record){
  return  this.records.find(function(element){
      element.album === record.album;
    });
    this.cashBalance += record.price;
  }

}



module.exports = Customer;
