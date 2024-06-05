import { ObjectResponse } from './interfaces/object-response.interface';

export function res(
  ok: boolean,
  message: string,
  data: any,
): Promise<ObjectResponse<any>> {
  const response: ObjectResponse<any> = {
    ok,
    message,
    data,
  };
  return Promise.resolve(response);
}
