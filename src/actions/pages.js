
export const SEL_NAV_ITEM = "SEL_NAV_ITEM" 

export function sel_nav_item(currentItem) {

    return dispatch => {
        dispatch({
            type : SEL_NAV_ITEM ,
            payload : currentItem ,
        })
    }

}