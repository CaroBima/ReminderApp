import { ServerStreamFileResponseOptionsWithError } from 'http2';

export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
