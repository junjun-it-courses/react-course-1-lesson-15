// It will not be added to compiled JS file because it's not have been used
// anywhere else in code
// Let's use somewhere
var httpProtocols = ["http" /* HTTP */, "https" /* HTTPS */];
var fileTransferProtocols = ["ftp" /* FTP */, "sftp" /* SFTP */];
var DNSProtocols = ["DNS" /* DNS */, "TCP/IP" /* TCP_IP */];
var mailProtocols = ["smtp" /* SMTP */];
// Do some other pseudo logic
// function concatProtocols(...args): Array<string> {
//     return args
//        .reduce(
//            (acc, item) => {
//                 acc.concat(item)
//                 return acc
//            },
//            []
//        )
// }
//
//
// const arrOfProtocols: string[] = concatProtocols(
//     httpProtocols,
//     fileTransferProtocols,
//     DNSProtocols,
//     mailProtocols
// );
//
// console.log(arrOfProtocols);
