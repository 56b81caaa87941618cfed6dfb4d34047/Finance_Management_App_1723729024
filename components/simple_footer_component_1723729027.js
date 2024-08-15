/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723729027", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10 rounded-lg shadow-lg">
            <form id="uniswap-swap-form" class="space-y-4">
                <div>
                    <label for="from-token" class="block text-sm font-medium text-white">From Token</label>
                    <input type="text" id="from-token" name="from-token" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter token address">
                </div>
                <div>
                    <label for="to-token" class="block text-sm font-medium text-white">To Token</label>
                    <input type="text" id="to-token" name="to-token" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter token address">
                </div>
                <div>
                    <label for="amount" class="block text-sm font-medium text-white">Amount</label>
                    <input type="number" id="amount" name="amount" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter amount">
                </div>
                <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Swap</button>
            </form>
        </div>
    </footer>
    `,
    data() {
        return {
            fromToken: '',
            toToken: '',
            amount: 0
        };
    },
    methods: {
        // Start of submitSwap method
        submitSwap(event) {
            event.preventDefault();
            // Here you would typically call a function to interact with Uniswap
            console.log('Swap submitted:', this.fromToken, this.toToken, this.amount);
        }
        // End of submitSwap method
    }
});
