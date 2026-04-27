import { useState } from "react";
import { WHATSAPP_NUMBER } from "../../utils/constants";
import { Link } from "react-router-dom";

const ProductCard = ({ product, showVariants = false }) => {
  const hasVariants =
    showVariants && product.variants && product.variants.length > 0;

  const isSimpleView = !showVariants;

  const defaultVariant =
    product.variants && product.variants.length > 0
      ? product.variants[0]
      : null;

  const [selectedVariant, setSelectedVariant] = useState(defaultVariant);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryType, setDeliveryType] = useState("pickup");

  const DELIVERY_FEE = 3500;

  const price = hasVariants ? selectedVariant?.price || 0 : product.price || 0;

  const subtotal = price * quantity;
  const deliveryCost = deliveryType === "delivery" ? DELIVERY_FEE : 0;
  const grandTotal = subtotal + deliveryCost;

  const handleConfirmOrder = () => {
    if (!customerName.trim() || !customerPhone.trim()) {
      alert("Please enter your name and phone number");
      return;
    }

    const orderData = {
      product: product.name,
      size: selectedVariant?.size || "N/A",
      quantity,
      deliveryType,
      total: grandTotal,
      name: customerName,
      phone: customerPhone,
      date: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    const message = `Hello Bethosin Bliss,

🛍 Product: ${product.name}
📦 Size: ${selectedVariant?.size || "Standard"}
🔢 Quantity: ${quantity}
🚚 Delivery: ${deliveryType}
💰 Total: ₦${grandTotal.toLocaleString()}

👤 Name: ${customerName}
📞 Phone: ${customerPhone}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");

    setShowModal(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <>
      {/* 🔥 CARD */}
      <div className="reveal hover-lift group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden">
        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
          />

          {product.bestSeller && (
            <span className="absolute top-2 left-2 bg-white text-blue-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
              Best Seller
            </span>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-blue-900">
            {product.name}
          </h3>

          <p className="text-gray-500 text-xs mt-1 line-clamp-3">
            {product.description}
          </p>

          {/* VARIANTS */}
          {hasVariants && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {product.variants.map((variant) => {
                const isActive = selectedVariant?.size === variant.size;

                return (
                  <button
                    key={variant.size}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-3 py-1 rounded-full text-xs border transition 
                    ${
                      isActive
                        ? "bg-blue-900 text-white border-blue-900"
                        : "bg-white text-blue-900 border-gray-300 hover:border-blue-900"
                    }`}
                  >
                    {variant.size}
                  </button>
                );
              })}
            </div>
          )}

          {/* ACTION */}
          <div className="flex items-center justify-between mt-4">
            {isSimpleView ? (
              <Link
                to="/products"
                className="w-full block text-center bg-blue-900 text-white py-2 rounded-full text-xs font-semibold hover:bg-blue-700 transition"
              >
                View Product
              </Link>
            ) : (
              <>
                {/* QUANTITY */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-7 h-7 rounded-full border text-blue-900 text-sm hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span className="text-sm font-semibold">{quantity}</span>

                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-7 h-7 rounded-full border text-blue-900 text-sm hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <span className="text-blue-900 font-bold text-sm">
                  ₦{grandTotal.toLocaleString()}
                </span>

                <button
                  onClick={() => setShowModal(true)}
                  className="bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-green-700 transition"
                >
                  Order
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {!isSimpleView && showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl animate-scaleIn">
            <h2 className="text-lg font-bold text-blue-900 mb-4">
              Confirm Your Order
            </h2>

            <div className="text-sm space-y-2 mb-4">
              <p className="font-semibold">{product.name}</p>
              {hasVariants && <p>Size: {selectedVariant?.size}</p>}
              <p>Qty: {quantity}</p>
              <p>Subtotal: ₦{subtotal.toLocaleString()}</p>
            </div>

            <input
              type="text"
              placeholder="Your Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mb-2 focus:ring-2 focus:ring-blue-900 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mb-2 focus:ring-2 focus:ring-blue-900 outline-none"
            />

            <select
              value={deliveryType}
              onChange={(e) => setDeliveryType(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mb-3 focus:ring-2 focus:ring-blue-900 outline-none"
            >
              <option value="pickup">Pickup</option>
              <option value="delivery">Delivery (+₦1000)</option>
            </select>

            <p className="font-semibold text-blue-900">
              Total: ₦{grandTotal.toLocaleString()}
            </p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border py-2 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmOrder}
                className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS */}
      {success && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg animate-bounce">
          Order sent successfully!
        </div>
      )}
    </>
  );
};

export default ProductCard;
