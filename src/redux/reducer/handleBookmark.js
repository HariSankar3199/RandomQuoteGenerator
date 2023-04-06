const Bookmark=[]

const handleBookmark=(state=Bookmark,action)=>{
const quote=action.payload

    switch (action.type) {
        case "ADDBOOKMARK":
           return[...state,quote] 
            break;
        case "DELBOOKMARK":
           return state=state.filter((x)=>{
            return x._id!==quote._id
           })
            break;
    
        default: return state
            break;
    }
}
export default handleBookmark
