export interface BufferedFile {
  fieldname: string;
  filename: string;
  encoding: string;
  mimetype: AppMimeType;
  size: number;
  createReadStream: Buffer | string | any;
}

export interface StoredFile extends HasFile, StoredFileMetadata {}

export interface HasFile {
  file: Buffer | string;
}

export interface StoredFileMetadata {
  id: string;
  name: string;
  encoding: string;
  mimetype: AppMimeType;
  size: number;
  updatedAt: Date;
  fileSrc?: string;
}

export type AppMimeType = 'image/png' | 'image/jpeg';

