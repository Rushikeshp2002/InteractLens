import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';

const Star=({stars})=>{
    const ratingStar = Array.from({length:5},(elem,index)=>{
        let number = index + 0.5;
    
    return(
     <span key={index}>
        {stars >=index+1
        ?(<FaStar className='text-amber-500-600 ' fill='yellow'/>)
        :(stars >= number)
        ?(<FaStarHalfAlt className='text-amber-600 ' fill='yellow'/>)
        :(<AiOutlineStar className='text-amber-600 ' fill='yellow'/>)}
       

     </span>
    )
})

return(
    <div className='flex  my-2'>
       {ratingStar}
        
    </div>
)
}

export default Star;