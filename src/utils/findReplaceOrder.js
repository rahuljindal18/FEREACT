export const findReplaceOrder = (obj) => {
    const linkColorValue = obj['link-color'];
    const tempObj1 = {};
    const tempObj2 = {};

    for(let key in obj){
        if(obj[key].match(/link-color/g) !== null){
            obj[key] = linkColorValue;
            tempObj2[key] = obj[key];
        }
        else{
            tempObj1[key] = obj[key];
        }
    }

    return Object.assign(tempObj1, tempObj2);
}