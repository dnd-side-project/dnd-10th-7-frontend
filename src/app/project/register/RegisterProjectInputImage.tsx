import Button from "@component/components/common-components/button/Button"
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const RegisterProjectInputImage = () => {
  return (
    <>
      {/* 사진 등록하기 */}
      <Button className='flex items-center gap-2'>
          <AddCircleOutlineOutlinedIcon className='text-purple-main5' />
          사진 등록하기
      </Button>
    </>
  )
}

export default RegisterProjectInputImage;