type TitleProps = {
    title: string;
}

const RegisterProjectTitle = ({
    title
}: TitleProps) => {
    return <div className='text-title mb-[16px]'>{title}</div>
}

export default RegisterProjectTitle;