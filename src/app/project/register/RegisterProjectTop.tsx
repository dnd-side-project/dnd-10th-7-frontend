'use client'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useRouter } from 'next/navigation';

const RegisterProjectTop = () => {
    const router = useRouter();
    return (
        <div className='w-[1440px] bg-white'>  
            <ArrowBackIosRoundedIcon 
                className='absolute top-[25px] left-[18px] cursor-pointer'
                onClick={() => router.push('/')}
            />
            <nav className='flex items-center justify-center h-[69px]'>
                <section className='max-w-[1080px] w-full'>
                    <div className='text-h2 flex items-center'>프로젝트 등록하기</div>
                </section>
            </nav>
            <hr className='w-full h-[1px] bg-gray-400' />
        </div>
    )
}

export default RegisterProjectTop;