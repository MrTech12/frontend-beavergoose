export interface Link {
    id: number;
    address: string;
    fileName: string;
    senderID: string;
    receiverID: string;
    allowedDownloads: number;
}