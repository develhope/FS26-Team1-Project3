import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    const wishlist = localStorage.getItem("wishlist");
    if (wishlist) {
      setWish(JSON.parse(wishlist));
    }
  }, []);

  const addToWish = (petId) => {
    setWish((prevWish) => {
      const updatedWishlist = [...prevWish, petId];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const removeFromWish = (petId) => {
    setWish((prevWish) => {
      const updatedWishlist = prevWish.filter((id) => id !== petId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const isInWishlist = (petId) => wish.includes(petId);

  const toggleWish = (petId) => {
    console.log(wish);
    if (isInWishlist(parseInt(petId))) removeFromWish(parseInt(petId));
    else addToWish(parseInt(petId));
  };

  const clearWish = () => {
    setWish([]);
    localStorage.removeItem("wish");
  };

  return (
    <WishlistContext.Provider
      value={{
        wish,
        addToWish,
        removeFromWish,
        clearWish,
        isInWishlist,
        toggleWish,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
