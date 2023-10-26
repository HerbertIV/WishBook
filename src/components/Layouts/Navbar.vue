<script setup >
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="block h-16 items-center justify-center max-w-full">
                <div class="grid w-full items-center h-full">
                    <div class="block">
                        <div class="flex justify-between w-full items-baseline space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <RouterLink class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                        :to="{ name: 'Home', headerText: 'Home' }">
                                Dodaj wpis
                            </RouterLink>
                            <RouterLink class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                        :to="{ name: 'Wpisy', params: {headerText: 'Wpisy'} }">
                                Wpisy
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>