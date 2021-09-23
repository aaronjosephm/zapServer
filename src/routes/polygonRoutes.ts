import { test } from '../apis/PolygonClient';
import { Request, Response } from 'express';

const getCryptoExchanges = async (req: Request, res: Response) => {
  try {
    const result = await test();
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
}

export {
  getCryptoExchanges
}