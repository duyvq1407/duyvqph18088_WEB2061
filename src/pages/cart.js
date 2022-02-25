import Header from "../components/header";

const CartPage = {
    async render() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        return /* html */`
            ${await Header.render()}
            <div class="overflow-hidden pt-[130px]" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div class="overflow-hidden">
                    <div class="bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                
                    <div class="pointer-events-none flex max-w-full justify-center">
                    <div class="pointer-events-auto w-screen max-w-6xl">
                        <div class="flex h-full flex-col bg-white">
                        <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                            <div class="flex items-start justify-between">
                            <h2 class="text-4xl font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                            <div class="ml-3 flex h-7 items-center">
                                <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                <span class="sr-only">Close panel</span>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                </button>
                            </div>
                            </div>
                
                            <div class="mt-8">
                            <div class="flow-root">
                                <ul role="list" class="-my-6 divide-y divide-gray-200">
                                ${cart.map((cart1) => `
                                    <li class="flex py-6">
                                        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img src="${cart1.image}" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                                        </div>
                    
                                        <div class="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <a href="#"> ${cart1.name} </a>
                                            </h3>
                                            <p class="ml-4">${new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(cart1.price * cart1.quantity)}</p>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-500">Salmon</p>
                                        </div>
                                        <div class="flex flex-1 items-end justify-between text-sm">
                                            <p class="text-gray-500">Quantity: ${cart1.quantity}</p>
                    
                                            <div class="flex">
                                            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                            </div>
                                        </div>
                                        </div>
                                    </li>

                                `)}
                                </ul>
                            </div>
                            </div>
                        </div>
                
                        <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                            <div class="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>$262.00</p>
                            </div>
                            <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            <div class="mt-6">
                            <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                            </div>
                            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                or <a href="/" class="font-medium text-indigo-600 hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></a>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        `;
    },
};
export default CartPage;