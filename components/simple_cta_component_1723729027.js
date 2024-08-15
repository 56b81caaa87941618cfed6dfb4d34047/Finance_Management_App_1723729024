/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned. */
Vue.component("simple_cta_component_1723729027", {
    template: `
    <section id="cta-component" class="bg-gray-50 dark:bg-gray-800 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto">
            <div id="cta-content" class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
                <h2 id="cta-title" class="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white text-center">Crypto Trading Habits Survey</h2>
                <p id="cta-subtitle" class="mb-8 text-gray-600 dark:text-gray-300 text-center">Help us tailor a wealth manager for you by sharing your crypto trading habits.</p>
                
                <form id="crypto-survey-form" class="space-y-6" @submit="submitSurvey">
                    <div>
                        <label for="trading-experience" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How long have you been trading crypto?</label>
                        <select id="trading-experience" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <option value="">Select an option</option>
                            <option value="less-than-1-year">Less than 1 year</option>
                            <option value="1-3-years">1-3 years</option>
                            <option value="3-5-years">3-5 years</option>
                            <option value="more-than-5-years">More than 5 years</option>
                        </select>
                    </div>
                    
                    <div>
                        <label for="trading-frequency" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How often do you trade?</label>
                        <select id="trading-frequency" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <option value="">Select an option</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="occasionally">Occasionally</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which cryptocurrencies do you trade? (Select all that apply)</label>
                        <div class="space-y-2">
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox text-purple-600" name="crypto" value="bitcoin">
                                <span class="ml-2 text-gray-700 dark:text-gray-300">Bitcoin</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox text-purple-600" name="crypto" value="ethereum">
                                <span class="ml-2 text-gray-700 dark:text-gray-300">Ethereum</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox text-purple-600" name="crypto" value="altcoins">
                                <span class="ml-2 text-gray-700 dark:text-gray-300">Altcoins</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox text-purple-600" name="crypto" value="defi-tokens">
                                <span class="ml-2 text-gray-700 dark:text-gray-300">DeFi tokens</span>
                            </label>
                        </div>
                    </div>
                    
                    <div>
                        <label for="investment-amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What's your typical investment amount per trade?</label>
                        <input type="text" id="investment-amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="e.g. $500">
                    </div>
                    
                    <div>
                        <label for="risk-tolerance" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How would you describe your risk tolerance?</label>
                        <select id="risk-tolerance" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <option value="">Select an option</option>
                            <option value="conservative">Conservative</option>
                            <option value="moderate">Moderate</option>
                            <option value="aggressive">Aggressive</option>
                            <option value="very-aggressive">Very Aggressive</option>
                        </select>
                    </div>
                    
                    <div>
                        <label for="trading-strategy" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What's your primary trading strategy?</label>
                        <textarea id="trading-strategy" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Briefly describe your strategy..."></textarea>
                    </div>
                    
                    <div>
                        <button type="submit" class="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Submit Survey</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null
        };
    },
    methods: {
        submitSurvey(event) {
            event.preventDefault();
            // Here you would typically send the form data to your backend
            console.log('Survey submitted');
            // You can add more logic here to handle the form submission
        }
    }
});
