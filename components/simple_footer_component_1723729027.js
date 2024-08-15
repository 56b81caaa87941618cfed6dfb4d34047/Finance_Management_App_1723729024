/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723729027", {
    template: `
    <footer id="footer-section" style="min-height: 430px"  class="flex-1 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div id="footer-container" class="max-w-screen-xl p-8 mx-auto rounded-lg shadow-lg">
            <form id="uniswap-swap-form" class="space-y-6 bg-purple-800 bg-opacity-30 p-6 rounded-xl backdrop-filter backdrop-blur-md">
                <div class="flex items-center justify-between">
                    <h2 class="text-2xl font-bold text-purple-100">Create your first swap</h2>
                    <button class="text-purple-200 hover:text-purple-100">
                        <i class='bx bx-cog text-xl'></i>
                    </button>
                </div>
                <div class="space-y-4">
                    <div class="bg-purple-700 bg-opacity-30 p-4 rounded-xl backdrop-filter backdrop-blur-sm">
                        <label for="from-token" class="block text-sm font-medium text-purple-200 mb-2">From</label>
                        <div class="flex items-center space-x-2">
                            <select v-model="fromToken" class="flex-grow bg-transparent text-purple-100 text-lg focus:outline-none">
                                <option value="" disabled selected>Select token</option>
                                <option value="ETH">ETH</option>
                                <option value="USDC">USDC</option>
                                <option value="DAI">DAI</option>
                                <option value="WBTC">WBTC</option>
                            </select>
                            <input type="number" v-model="fromAmount" class="w-1/2 bg-transparent text-purple-100 text-right text-lg focus:outline-none" placeholder="0.0">
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="bg-purple-600 hover:bg-purple-500 text-purple-100 p-2 rounded-full">
                            <i class='bx bx-transfer-alt text-xl'></i>
                        </button>
                    </div>
                    <div class="bg-purple-700 bg-opacity-30 p-4 rounded-xl backdrop-filter backdrop-blur-sm">
                        <label for="to-token" class="block text-sm font-medium text-purple-200 mb-2">To</label>
                        <div class="flex items-center space-x-2">
                            <select v-model="toToken" class="flex-grow bg-transparent text-purple-100 text-lg focus:outline-none">
                                <option value="" disabled selected>Select token</option>
                                <option value="ETH">ETH</option>
                                <option value="USDC">USDC</option>
                                <option value="DAI">DAI</option>
                                <option value="WBTC">WBTC</option>
                            </select>
                            <input type="number" v-model="toAmount" class="w-1/2 bg-transparent text-purple-100 text-right text-lg focus:outline-none" placeholder="0.0" readonly>
                        </div>
                    </div>
                </div>
                <button @click="submitSwap" type="button" class="w-full py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-purple-100 bg-purple-600 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400">Swap</button>
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
