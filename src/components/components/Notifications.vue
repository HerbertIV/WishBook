<template>
    <div v-if="notifications.length" class="notification-container">
        <div v-for="(notification, index) in notifications" :key="index" class="notification" :class="notification.type">
            {{ notification.message }}
            <button @click="removeNotification(index)">x</button>
        </div>
    </div>
</template>
<script >
import { ref } from 'vue';

export default {
    name: "Notifications",
    setup() {
        const notifications = ref([]);
        const addNotification = (message, type = 'info') => {
            notifications.value.push({ message, type });
            setTimeout(() => {
                removeNotification(0);
            }, 5000);
        };
        const removeNotification = (index) => {
            notifications.value.splice(index, 1);
        };

        return {
            notifications,
            addNotification,
            removeNotification,
        };
    },
};
</script>
<style>
/* Style można dostosować do swoich potrzeb */
.notification-container {
    position: fixed;
    top: 10px;
    z-index: 9999;
    width: 100%;
    padding: 0 10px;
}

.notification {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.info {
    background-color: #3498db;
    color: white;
}

.success {
    background-color: #5bc970;
    color: white;
}

.error {
    background-color: #e74c3c;
    color: white;
}

/* Dodatkowe style dla innych typów powiadomień */
</style>
