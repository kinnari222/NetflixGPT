import OpenAI from 'openai';
import { OPENAI_GPT_KEY } from './constants';

const client = new OpenAI({
  apiKey: OPENAI_GPT_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
}); 

export default client;
