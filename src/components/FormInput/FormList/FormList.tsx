import bulletImage from './../../../assets/images/icon-list.svg';

type FormListProps = {
    text: string
};

export default function FormList({text}: FormListProps){
    return (
        <div className='flex items-center gap-4 my-3'>
            <img src={bulletImage} alt="bullet_image" />
            <p>{text}</p>
        </div>
    )
}