import { minio_config } from './../config/index';
import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';
import { BufferedFile } from './types';
import * as crypto from 'crypto';
import { Stream } from 'stream';

@Injectable()
export class MinioClientService {

  constructor(private readonly minio: MinioService) {
    this.logger = new Logger('MinioService');

    // THIS IS THE POLICY
    const policy = {
      Version: '2012-10-17',
      Statement: [
        {
          Effect: 'Allow',
          Principal: {
            AWS: ['*'],
          },
          Action: [
            's3:ListBucketMultipartUploads',
            's3:GetBucketLocation',
            's3:ListBucket',
          ],
          Resource: ['arn:aws:s3:::images'], // Change this according to your bucket name
        },
        {
          Effect: 'Allow',
          Principal: {
            AWS: ['*'],
          },
          Action: [
            's3:PutObject',
            's3:AbortMultipartUpload',
            's3:DeleteObject',
            's3:GetObject',
            's3:ListMultipartUploadParts',
          ],
          Resource: ['arn:aws:s3:::images/*'], // Change this according to your bucket name
        },
      ],
    };
    this.client.setBucketPolicy(
      "images",
      JSON.stringify(policy),
      function (err) {
        if (err) throw err;

        console.log('Bucket policy set');
      },
    );
  }

  private readonly logger: Logger;
  private readonly bucketName = 'images';

  public get client() {
    return this.minio.client;
  }

 

  public async upload(
    file: BufferedFile,
    bucketName: string = this.bucketName,
  ) {
    if (!(file.mimetype.includes('jpeg') || file.mimetype.includes('png'))) {
      throw new HttpException(
        'File type not supported',
        HttpStatus.BAD_REQUEST,
      );
    }
    const timestamp = Date.now().toString();
    const hashedFileName = crypto
      .createHash('md5')
      .update(timestamp)
      .digest('hex');
    const extension = file.filename.substring(
      file.filename.lastIndexOf('.'),
      file.filename.length,
    );
    const metaData = {
      'Content-Type': file.mimetype,
    };

    // We need to append the extension at the end otherwise Minio will save it as a generic file
    const fileName = hashedFileName + extension;
    const fileStream = file.createReadStream()

    this.client.putObject(
      bucketName,
      fileName,
      fileStream,
      metaData,
      function (err, res) {
        if (err) {
          throw new HttpException(
            'Error uploading file',
            HttpStatus.BAD_REQUEST,
          );
        }
      },
    );

    return {
      url: `${minio_config.endPoint}:${minio_config.port}`,
      path: `/${bucketName}/${fileName}`
    };
  }



  async delete(objetName: string, bucketName: string = this.bucketName) {
    this.client.removeObject(bucketName, objetName, function (err, res) {
      if (err)
        throw new HttpException(
          'An error occured when deleting!',
          HttpStatus.BAD_REQUEST,
        );
    });
  }
  
}
