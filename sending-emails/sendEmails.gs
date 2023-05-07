function sendEmails() {
  //gets the current active spreadsheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //gets sheet1, you can change the name here
  var sheet = ss.getSheetByName("Sheet1");

  //from the second row till the last row
  for (var i = 2; i < sheet.getLastRow() + 1; i++) {
    //stores the name, gets ith row and 1st column
    var name = sheet.getRange(i, 1).getValue();
    //stores the email address, gets the ith row and 2nd column
    var emailAddress = sheet.getRange(i, 2).getValue();

    //sending email, parameters: receiver's email address, subject, body
    MailApp.sendEmail(emailAddress, "Hello " + name, "Test Email");

    //sets the ith row and 3rd column with the Email Sent remark
    sheet.getRange(i, 3).setValue("Email Sent");
    //set the background of the 1th row and 3rd column
    sheet.getRange(i, 3).setBackground("#ffffe0");
  }
}
