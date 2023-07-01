'use client';

import { createContext, ReactNode, useContext, useState } from "react";
import { z } from 'zod';

interface FormContextProps {
  inputText: string;
  setInputText: (text: string) => void;
  parsedInput: z.SafeParseReturnType<{
    events: {
      url: string;
      visitorId: string;
      timestamp: number;
    }[];
  }, {
    events: {
      url: string;
      visitorId: string;
      timestamp: number;
    }[];
  }>;
  error?: z.ZodError<{
    events: {
      url: string;
      visitorId: string;
      timestamp: number;
    }[];
  }>
}

export const FormContext = createContext({} as FormContextProps);

interface Props {
  children: ReactNode;
}

const inputSchema = z.object({
  events: z.array(z.object({
    url: z.string(),
    visitorId: z.string(),
    timestamp: z.number(),
  }))
});

export const FormProvider = ({ children }: Props) => {
  const [inputText, setInputText] = useState('');

  function isJsonString(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

  const parsedInput = inputSchema.safeParse(inputText !== "" && isJsonString(inputText) ? JSON.parse(inputText) : "");

  const error = parsedInput.success ? undefined : parsedInput.error;

  // console.log('parsedInput', parsedInput.success ? parsedInput.data : parsedInput.error)

  return (
    <FormContext.Provider value={{ inputText, setInputText, parsedInput, error }}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => {
  const context = useContext(FormContext);

  return context;
}
