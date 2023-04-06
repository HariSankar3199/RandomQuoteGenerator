export const addBookmark =(quote)=>{
    return{
        type:"ADDBOOKMARK",
        payload:quote,
    }
}

export const delBookmark=(quote)=>{
    return {
        type:"DELADDBOOKMARK",
        payload:quote,
    }
    

}

// export const getTag=(tag)=>{
//     return{
//         type:"GETTAGS",
//     payload:tag    }
// }