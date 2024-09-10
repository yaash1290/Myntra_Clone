import { useDispatch, useSelector } from "react-redux"
import { bagActions } from "../store/bagSlice"

const HomeItem = ({item})=>{

    const bagItem=useSelector(store=>store.bag);
    const elementId=bagItem.indexOf(item.id)>=0;

    const dispatch = useDispatch()

    const handleAddToBag = ()=>{
     dispatch(bagActions.addToBag(item.id))
    }

    const handleDeleteBtn=()=>{
        dispatch(bagActions.removeFromBag(item.id))
    }

    return(
        <>
        <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      
   { elementId ? 
   <button type="button" className="btn-add-bag btn btn-danger" onClick={handleDeleteBtn}>Delete</button> 
     :
   <button type="button" className="btn-add-bag btn btn-success" onClick={handleAddToBag}>Add to Bag</button> }
     

    </div>`
        </>
    )
}

export default HomeItem