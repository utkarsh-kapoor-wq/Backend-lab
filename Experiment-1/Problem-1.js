// 1: Exporting nested objects and function from Module using exports Object.

// usign exports object 
const nestedObject  = {
    pair1 : "val1",
    pair2 : "val2",
    second : {
        a : 1 ,
        b : 2 ,
    }
}

const greeting = ()=>{
    return("Good morning !!!!")
}

exports.nestedObject = nestedObject;
exports.greeting = greeting;


export const nestedObject1 = {
    pair1 : "val1",
    pair2 : "val2",
    second : {
        a : 1 ,
        b : 2 ,
    }
}


const nestedObject3  = {
    pair1 : "val1",
    pair2 : "val2",
    second : {
        a : 1 ,
        b : 2 ,
    }
}
export default nestedObject3;


const nestedObject4  = {
    pair1 : "val1",
    pair2 : "val2",
    second : {
        a : 1 ,
        b : 2 ,
    }
}

export const {pair1,pair2,second:{a,b}} = nestedObject4