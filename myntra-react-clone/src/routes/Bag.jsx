import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";


const Bag = () =>{

 const bagItems = useSelector(store =>store.bag)
 const items = useSelector(store =>store.items)

 const finalItems = items.filter(item=>{
  const itemIndex = bagItems.indexOf(item.id)
  return itemIndex >=0;
 })

  

    return (
        <>
        
    <main>
      <div classNameName="bag-page">
        <div classNameName="bag-items-container">
          {finalItems.map(item=><BagItem item ={item}/>)}
          
        </div>
        <BagSummary/>
      </div>
    </main>
    
        </>
    )
}

export default Bag;