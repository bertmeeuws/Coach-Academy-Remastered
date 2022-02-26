export const config = {
  redis: {
    namespace: 'default',
    host: 'localhost',
    port: 6379,
    password: 'MDNcVb924a',
  } as { namespace: string; host: string; port: number; password: string },
};

export const minio_config = {
  endPoint: '127.0.0.1',
  port: 9000,
  useSSL: false,
  accessKey: 'minio',
  secretKey: 'minio123',
};
