'use client'
import { useForm } from "@/contexts/form-context";
import { Button } from "../ui/button"

export const ResetInputButton = () => {
  const { setInputText } = useForm();

  function onClick() {
    setInputText('');
  }

  return (
    <Button onClick={onClick}>
      Reset Input
    </Button>
  )
}
