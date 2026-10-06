      
	  
	  



function setFormulasForRow(rowNumber=3) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  
  // Dynamically build formulas using template literals
  const formulaF = `=SUMIF(Keuangan!$C:$C, $A$${rowNumber} & " -*", Keuangan!$D:$D)`;
  const formulaG = `=C${rowNumber}-F${rowNumber}`;
  
  // Apply to columns F and G for the specified row
  sheet.getRange(`F${rowNumber}`).setFormula(formulaF);
  sheet.getRange(`G${rowNumber}`).setFormula(formulaG);
}

// Example usage to set it for Row 1:
function applyToRow1() {
  setFormulasForRow(1);
}

// Example usage to set it for Row 2:
function applyToRow2() {
  setFormulasForRow(2);
}