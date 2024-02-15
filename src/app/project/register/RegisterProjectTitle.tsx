type TitleProps = {
    title: string;
};

const RegisterProjectTitle = ({ title }: TitleProps) => {
    const marginBottom = title === "분야" ? "mb-4" : "mb-8";

    return <div className={`text-title ${marginBottom}`}>{title}</div>;
};

export default RegisterProjectTitle;
