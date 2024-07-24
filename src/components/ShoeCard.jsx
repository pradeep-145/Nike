

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImage }) => {
    const handleClick=()=>{
        if(bigShoeImage!==imgUrl.bigShoe)
        {
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
  return (
    <div className={` border-2 hover:shadow-md rounded-xl ${bigShoeImage===imgUrl.bigShoe?'border-coral-red':'border-transparent'} cursor-pointer  max-sm:flex-1`} onClick={handleClick}>
        <img src={imgUrl.thumbnail} alt="soe collection" className="object-contain flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl" />
    </div>
  )
}

export default ShoeCard