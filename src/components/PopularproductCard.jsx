import { star } from "../assets/icons"
const PopularproductCard = ({imgURL , name, price }) => {
  return (
    <div className="flex flex-1 flex-col rounded-xl shadow-md w-full max-sm:w-full hover:scale-[1.01]  transition duration-250 ease-in-out">
        <img src= {imgURL}alt={name} width={280} height={280}/>
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className="font-montserrat  text-xl leading-normal text-slate-gray">(4.5)
            </p>
        </div>
                <h3 className="font-palanquin font-semibold leading-normal text-2xl mt-2 ">{name}</h3>
                <p className="font-montserrat font-semibold text-coral-red leading-normal text-2xl mt-2 ">{price}</p>

    </div>
  )
}

export default PopularproductCard