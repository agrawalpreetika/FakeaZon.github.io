
export const findProductInWishList = (wishList, productId) => wishList.length>0 && wishList.some(item => item._id === productId);
