'use client'

import { useForm } from "@/contexts/form-context";

export const Input = () => {
  const { inputText, setInputText } = useForm();

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputText(e.target.value);
  }

  return (
    <textarea
      className="w-full min-h-[50vh]"
      id="inputjson"
      name="inputjson"
      onChange={onChange}
      value={inputText}
    ></textarea>
  )
}
