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

export const postCheckoutOrder = async (orderInfo, router) => {
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
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const postAddProduct = async (productInfo, router) => {
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
      router.push("/admin");
      //navigate ?
    }
  } catch (error) {
    console.log("error", error);
  }
};
