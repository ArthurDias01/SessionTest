'use client'

import { transformData } from '../../lib/transform'
import { InputData } from '@/interfaces/global';
import { useForm } from '@/contexts/form-context';
import clsx from 'clsx';

export const TransformedData = () => {
  const { inputText, error } = useForm();

  const transformedData = error === undefined ? transformData(JSON.parse(inputText) as InputData) : null;

  return (
    <code className={clsx("max-w-1/2 text-slate-800 dark:text-white font-bold", {
      "text-red-500 dark:text-red-300": error !== undefined,
    })}>
      {transformedData !== null ? JSON.stringify(transformedData, null, 2) : null}
      {error !== undefined && inputText !== "" ? <p>Error: {JSON.stringify(error, null, 2)}</p> : null}
    </code>
  )
};
