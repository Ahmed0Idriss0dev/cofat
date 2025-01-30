import { create } from "zustand";
interface Mystore {
    isModelShow:boolean ,
    SetisModelShow:(argement:boolean)=> void ,
}
 
const OurStore = create<Mystore>((set)=>({
isModelShow:false ,
SetisModelShow:(argement)=>set(({isModelShow:argement}))
}))
export default OurStore