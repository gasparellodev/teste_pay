import { useCallback, useState } from 'react'

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
      return true
    } catch (error) {
      console.error('Clipboard Hook | Failed to copy: ', error)
      return false
    }
  }, [])

  return { isCopied, copyToClipboard }
}

export default useCopyToClipboard
