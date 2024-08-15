/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1723730892", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <section id="blank-section" class="bg-brown-500 dark:bg-gray-900 flex-1">
                <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="grid">
                        <div class="flex-1 isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 p-8">
                            <div class="bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl h-full">
                                <h2 class="text-2xl font-bold mb-4 text-white">Chatbot</h2>
                                <div class="space-y-4">
                                    <div class="flex items-start">
                                        <div class="flex-shrink-0">
                                            <i class='bx bx-bot text-3xl text-white'></i>
                                        </div>
                                        <div class="ml-3 bg-white p-3 rounded-lg shadow">
                                            <p class="text-gray-800">Hello! How can I assist you today?</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start justify-end">
                                        <div class="mr-3 bg-blue-500 p-3 rounded-lg shadow">
                                            <p class="text-white">Hi! I have a question about your services.</p>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <i class='bx bx-user text-3xl text-white'></i>
                                        </div>
                                    </div>
                                    <div class="flex items-start">
                                        <div class="flex-shrink-0">
                                            <i class='bx bx-bot text-3xl text-white'></i>
                                        </div>
                                        <div class="ml-3 bg-white p-3 rounded-lg shadow">
                                            <p class="text-gray-800">Of course! I'd be happy to help. What would you like to know about our services?</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <input type="text" placeholder="Type your message..." class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </div>          
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
