export const fetchProducts = async (setProductList) => {
  try {
    const response = await fetch("/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("oof", json);
      //set state ?
      setProductList(json);
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchOrders = async (setOrdersList) => {
  try {
    const response = await fetch("/api/orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("oof", json);
      //set state ?
      setOrdersList(json);
    }
  } catch (error) {
    console.log("error", error);
    setNotification({ msg: error, type: "error" });
  }
};

export const postCheckoutOrder = async (
  orderInfo,
  router,
  setNotification,
  setCartCounts
) => {
  try {
    const response = await fetch("/api/checkout-order", {
      method: "POST",
      body: JSON.stringify({
        ...orderInfo,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("oof", json);
      //set state ?
      localStorage.removeItem("cartItems");
      //navigate ?
      router.push("/profile");
      setNotification({ msg: "Order Placed!", type: "success" });
      setCartCounts(null);
    }
  } catch (error) {
    console.log("error", error);
    setNotification({ msg: error, type: "error" });
  }
};

export const postAddProduct = async (productInfo, router, setNotification) => {
  try {
    const response = await fetch("/api/admin/product", {
      method: "POST",
      body: JSON.stringify({
        ...productInfo,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("oof", json);
      //set state ?
      router.reload();
      //navigate ?
      setNotification({ msg: "New product added", type: "success" });
    }
  } catch (error) {
    console.log("error", error);
    setNotification({ msg: error, type: "error" });
  }
};

export const patchEditProduct = async (
  productInfo,
  router,
  setNotification
) => {
  try {
    //productInfo needs to contain following objects
    //productId , title , price , description
    const response = await fetch("/api/admin/product", {
      method: "PATCH",
      body: JSON.stringify({
        ...productInfo,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("oof", json);
      //set state ?
      router.reload();
      //navigate ?
      setNotification({ msg: "Product details updated", type: "success" });
    }
  } catch (error) {
    console.log("error", error);
    setNotification({ msg: error, type: "error" });
  }
};
