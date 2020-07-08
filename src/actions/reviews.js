export const addReview = (review, productId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/products/${productId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(response => response.json())
        .then(product => dispatch({
            type: 'ADD_REVIEW', 
            payload: product
        }));
    }
}

export const deleteReview = (reviewId, productId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/products/${productId}/reviews/${reviewId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(product => dispatch({type: 'DELETE_TRANSACTION', payload: product}))
    }
}