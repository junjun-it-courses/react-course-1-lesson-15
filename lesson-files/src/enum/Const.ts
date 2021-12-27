// It will not be added to compiled JS file because it's not have been used
// anywhere else in code

const enum protocols {
    HTTP = 'http',
    HTTPS = 'https',
    FTP = 'ftp',
    SFTP = 'sftp',
    TCP_IP = 'TCP/IP',
    SMTP = 'smtp',
    DNS = 'DNS'
}

// Let's use somewhere
const httpProtocols: string[] = [protocols.HTTP, protocols.HTTPS]
const fileTransferProtocols: string[] = [protocols.FTP, protocols.SFTP]
const DNSProtocols: string[] = [protocols.DNS, protocols.TCP_IP]
const mailProtocols: string[] = [protocols.SMTP]

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