'use client'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Check, ClipboardText } from "@phosphor-icons/react"
import { useState } from "react";

interface Props {
  text: string;
}


export function CopyToClipboard({ text }: Props) {
  const [textCopied, setTextCopied] = useState("Copy Input to ClipBoard")

  //copy to clipboard function
  function copyToClipboard() {
    navigator.clipboard.writeText(text);
    setTextCopied("Copied!")
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" onClick={copyToClipboard}>
            {textCopied === "Copy Input to ClipBoard" ?
              <ClipboardText size={16} />
              :
              <Check size={16} />
            }
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{textCopied}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
