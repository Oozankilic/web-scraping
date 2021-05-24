function sendReport() {
  var message = {
    to: "okan@analyticahouse.com",
    subject: "Ozan Kılıç",
    body: "Merhaba, \n\nAnalyticHouse case study çalışmasında istenen çıktım ektedir. Bu mail Google Apps Script kullanılarak atılmıştır. \n\nTeşekkürler,\nOzan Kılıç",
    name: "Ozan",
    attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("Markastok")]
  }
  MailApp.sendEmail(message);
}
