import { container } from "tsyringe";
import { S3StorageProvider } from "../StorageProvider/implementation/S3StorageProvider";
import { IMailProvider } from "./IMailProvider";
import { EtherealMailProvider } from "./Implementations/EtherealMailProvider";

// container.registerInstance<IMailProvider>(
//     "EtherealMailProvider",
//     new EtherealMailProvider()
// );

const mailProvider = {
    local: container.resolve(EtherealMailProvider),
    s3: container.resolve(S3StorageProvider)
};

container.registerInstance<IMailProvider>(
    "MailProvider",
    mailProvider[process.env.MAIL_PROVIDER]

);