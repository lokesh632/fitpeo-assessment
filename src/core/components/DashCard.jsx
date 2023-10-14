import {useId} from 'react'
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai';

const DashCard = ({card}) => {
    const {color,label,rate,amount,icon}=card;
    const uid=useId();

  return (
    <div className='flex justify-evenly items-center px-2 py-4 rounded-md bg-white w-full' key={uid}>
        <div 
        className={`grid place-items-center rounded-full h-[120px] w-[120px] text-6xl ${color}`}>
        {icon}
        </div>
        <div className='pl-2'>
            <p className='text-gray-500 text-xs text-left'>{label}</p>
            <p className='text-gray-800 text-2xl text-left font-semibold'>${amount}K</p>
            <p className='flex justify-start items-center text-sm text-left'>
                {rate>10?
                <>
                <span className='font-bold text-green-700'><AiOutlineArrowUp /></span>
                <span className='font-bold text-green-700'>{rate}%</span>
                </>
                :
                <>
                <span className='font-bold text-red-700'><AiOutlineArrowDown /></span>
                <span className='font-bold text-red-700'>{rate}%</span>
                </>
                }
                <span>this month</span>
            </p>
        </div>
    </div>
  )
}

export default DashCard