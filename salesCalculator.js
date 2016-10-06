var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  }, 
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var calculateTax = function (salePrice, province) {
  switch (province) {
    case "BC":
      return salesTaxRates.BC * salePrice;
      break;
    case "AB":
      return salesTaxRates.AB * salePrice;
      break;
    case "SK":
      return salesTaxRates.SK * salePrice;
      break;  
    default:

      return "You dun goof'd";
  }
}

function calculateSalesTax(salesData, taxRates) {

  var answer = {};

  salesData.forEach(function(report) {

  	var companyName = report["name"];
    var companyProvince = report["province"];
    var current_sales = report["sales"];

    var current_taxes = current_sales.map(function(salePrice){
      return calculateTax(salePrice, companyProvince);
    });

  	if (answer[companyName] === undefined) {

  		answer[companyName] = {all_sales: current_sales, all_taxes: current_taxes};

  	} else {

      answer[companyName].all_sales = 
        answer[companyName].all_sales.concat(current_sales);

      answer[companyName].all_taxes = 
        answer[companyName].all_taxes.concat(current_taxes);

  	} 
  	
  });

  for (var companyName in answer) {

  	var salesSum = 0;
    var taxesSum = 0;

  	for (var i = 0; i < answer[companyName].all_sales.length; i++) {
  		salesSum += answer[companyName].all_sales[i];
      taxesSum += answer[companyName].all_taxes[i];
  	}

    answer[companyName]['totalSales'] = salesSum;

    answer[companyName]['totalTaxes'] = taxesSum;

  }

  return answer;
}



var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/