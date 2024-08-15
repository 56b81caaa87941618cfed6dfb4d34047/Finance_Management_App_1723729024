/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723729027", {
    template: `
    <footer id="footer-section" style="min-height: 430px" class="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div id="footer-container" class="max-w-screen-xl p-8 mx-auto rounded-lg shadow-lg">
            <form id="uniswap-swap-form" class="space-y-6 bg-white bg-opacity-10 p-6 rounded-xl">
                <div class="flex items-center justify-between">
                    <h2 class="text-2xl font-bold text-white">Swap</h2>
                    <button class="text-white hover:text-gray-300">
                        <i class='bx bx-cog text-xl'></i>
                    </button>
                </div>
                <div class="space-y-4">
                    <div class="bg-gray-800 bg-opacity-50 p-4 rounded-xl">
                        <label for="from-token" class="block text-sm font-medium text-gray-300 mb-2">From</label>
                        <div class="flex items-center space-x-2">
                            <select v-model="fromToken" class="flex-grow bg-transparent text-white text-lg focus:outline-none">
                                <option value="" disabled selected>Select token</option>
                                <option value="ETH">ETH</option>
                                <option value="USDC">USDC</option>
                                <option value="DAI">DAI</option>
                                <option value="WBTC">WBTC</option>
                            </select>
                            <input type="number" v-model="fromAmount" class="w-1/2 bg-transparent text-white text-right text-lg focus:outline-none" placeholder="0.0">
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full">
                            <i class='bx bx-transfer-alt text-xl'></i>
                        </button>
                    </div>
                    <div class="bg-gray-800 bg-opacity-50 p-4 rounded-xl">
                        <label for="to-token" class="block text-sm font-medium text-gray-300 mb-2">To</label>
                        <div class="flex items-center space-x-2">
                            <select v-model="toToken" class="flex-grow bg-transparent text-white text-lg focus:outline-none">
                                <option value="" disabled selected>Select token</option>
                                <option value="ETH">ETH</option>
                                <option value="USDC">USDC</option>
                                <option value="DAI">DAI</option>
                                <option value="WBTC">WBTC</option>
                            </select>
                            <input type="number" v-model="toAmount" class="w-1/2 bg-transparent text-white text-right text-lg focus:outline-none" placeholder="0.0" readonly>
                        </div>
                    </div>
                </div>
                <button @click="submitSwap" type="button" class="w-full py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">Swap</button>
            </form>
        </div>
    </footer>
  
    `,
    data() {
        return {
            fromToken: '',
            toToken: '',
            fromAmount: 0,
            toAmount: 0
        };
    },
    methods: {
        // Start of submitSwap method
        submitSwap() {
            // Here you would typically call a function to interact with Uniswap
            console.log('Swap submitted:', this.fromToken, this.toToken, this.fromAmount, this.toAmount);
        },
        // End of submitSwap method

        // Start of updateToAmount method
        updateToAmount() {
            // This is a placeholder. In a real app, you'd calculate this based on exchange rates
            this.toAmount = this.fromAmount * 1.5;
        }
        // End of updateToAmount method
    },
    watch: {
        fromAmount() {
            this.updateToAmount();
        },
        fromToken() {
            this.updateToAmount();
        },
        toToken() {
            this.updateToAmount();
        }
    }
});
