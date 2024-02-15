interface TitleProps {
  title: string;
}

const RegisterSendbackTitle = ({ title }: TitleProps) => {
  return <div className="mt-16 mb-6 text-title">{title}</div>;
};

export default RegisterSendbackTitle;
