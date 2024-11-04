import thanksIcon from './../../assets/images/icon-success.svg';

type ThanksComponentProps = {
    setFormCompleted: (isFormCompleted: boolean) => void;
    email: string
}

export default function ThanksComponent({setFormCompleted, email}: ThanksComponentProps){
    return (
        <div className="md:w-1/4 w-screen md:h-1/2 h-screen flex items-start justify-center flex-col bg-white p-9 rounded-xl">
            <img className='mb-6' src={thanksIcon} alt='thanks_icon' />
            <h1 className='text-5xl font-bold mb-4'>Thanks for subscribing!</h1>
            <p >a Confirmation email has been sent to <b>{email}</b>. Please open it and click the button iside to confirm your subscription</p>
            <button onClick={() => setFormCompleted(false)} className='w-full text-white py-2 my-6 bg-custom-dark-slate-grey rounded-lg transition-colors hover:bg-custom-tomato'>Dismiss message</button>
        </div>
    )
}