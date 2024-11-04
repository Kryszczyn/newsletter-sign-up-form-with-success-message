import { useState } from "react"
import FormInput from "./components/FormInput/FormInput"
import ThanksComponent from "./components/ThanksComponent/ThanksComponent"

export default function App() {
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="w-screen h-screen bg-custom-charcoal-grey md:flex md:items-center md:justify-center">
      {
        !isFormCompleted ? <FormInput email={email} setEmail={setEmail} setFormCompleted={setIsFormCompleted} /> : <ThanksComponent email={email} setFormCompleted={setIsFormCompleted} />
      }
    </div>
  )
}