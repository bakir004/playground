import type { ChangeEvent } from 'react'
import { useState } from 'react'

export const Input = () => {
  const [prompt, setPrompt] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputPrompt = event.currentTarget.value
    setPrompt(inputPrompt)
  }

  const submit = () => {
    setSubmitting(true)
    console.log(prompt)
  }

  return (
    <div style={{display: 'flex', flexDirection: "column", position:"absolute", top: '50%', left: '50%', transform: 'translate(-50%, -50%)',gap:'0.5rem', width:"300px"}}>
      <label htmlFor="main">Write what you want to change about this website!</label>
      <textarea name="main" onChange={handleChange} />
      <button disabled={submitting} onClick={submit}>{submitting ? "Submitting..." : "Submit"}</button>
      {submitting && <p style={{fontSize:"12px", marginTop:"-0.5rem"}}>Refresh your page after a moment to see your changes!</p>}
    </div>
  )
}
