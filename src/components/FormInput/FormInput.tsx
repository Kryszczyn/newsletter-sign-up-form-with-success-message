import { useState } from 'react';
import heroImageMobile from './../../assets/images/illustration-sign-up-mobile.svg';
import heroImageDekstop from './../../assets/images/illustration-sign-up-desktop.svg';
import FormList from './FormList/FormList';

type FormInputProps = {
    email: string,
    setEmail: (email: string) => void;
    setFormCompleted: (isFormCompleted: boolean) => void;
}

export default function FormInput({setFormCompleted, email, setEmail}: FormInputProps){
    const [isError, setIsError] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const validateEmail = (email: string) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const handleSubscription = () => {
        if(validateEmail(email)){
            setIsError(false);
            setFormCompleted(true);
        } else {
            setIsError(true);
        }
    }

    return (
        <div className="w-screen md:w-1/2 h-screen md:h-2/3 bg-white md:rounded-3xl md:p-6 flex flex-col md:flex-row items-center md:justify-center">
            <div className='md:w-1/2 md:pe-6 p-4 order-2 '>
                <h1 className='text-4xl font-bold'>Stay updated!</h1>
                <p className='py-6'>Join 60,000+ product managers receiving monthly updates on:</p>
                <div className='mb-8'>
                    <FormList text="Product discovery and building what matters" />
                    <FormList text="Measuring to ensure updated are a success" />
                    <FormList text="and much more!" />
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <label className='font-semibold'>Email address</label>
                        <label className={`font-bold text-custom-tomato text-sm ${(isError ? 'block' : 'hidden')}`}>Valid email required</label>
                    </div>
                    <input 
                        onChange={(e)=>setEmail(e.target.value)} 
                        className='border border-custom-grey py-2 px-4 rounded-lg outline-none' placeholder="email@company.com" 
                    />
                </div>
                <button 
                    className='w-full bg-custom-dark-slate-grey text-white px-4 py-2 my-4 rounded-md transition-colors hover:bg-custom-tomato'
                    onClick={handleSubscription}
                >
                    Subscribe to monthly newsletter
                </button>
            </div>
            <div className='md:w-1/2 h-full w-screen md:order-2'>
                <img className='w-full h-full' src={isMobile ? heroImageMobile : heroImageDekstop} alt="hero-image"/>
            </div>
        </div>
    )
}