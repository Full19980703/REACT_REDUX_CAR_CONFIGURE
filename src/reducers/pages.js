

import { SEL_NAV_ITEM } from "../actions/pages";
import update from 'immutability-helper' ;

const initialState = {
    item : 1,
    isPrev : false ,
    isNext : true ,
}

export default function pages(state = initialState , action={}) {
    switch(action.type){
        case SEL_NAV_ITEM :
            return update(state , {
                $merge : {
                    item : action.payload ,
                    isPrev : action.payload !== 1 ,
                    isNext : action.payload !== 3 
                }
            }) ;
        default :
            return state ;
    }
}