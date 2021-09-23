import { Request } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

export default RequestWithBody;