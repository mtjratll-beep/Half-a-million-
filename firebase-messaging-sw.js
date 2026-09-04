/* Firebase Cloud Messaging service worker - worker/captain notifications only */
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCNgBpEMZ1WGQ9zkbJQDb9y6OJweFqWNpg',
  authDomain: 'half-27475.firebaseapp.com',
  databaseURL: 'https://half-27475-default-rtdb.firebaseio.com',
  projectId: 'half-27475',
  storageBucket: 'half-27475.firebasestorage.app',
  messagingSenderId: '270803082259',
  appId: '1:270803082259:web:eaa8ca526791b2280fb3e6',
  measurementId: 'G-B31TSL4WN9'
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload?.notification?.title || 'طلب خدمة جديد 🚗';
  const body = payload?.notification?.body || 'يوجد طلب جديد مسند إليك';
  self.registration.showNotification(title, {
    body,
    icon: 'https://cdn-icons-png.flaticon.com/512/2961/2961218.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/2961/2961218.png',
    tag: 'worker-new-order',
    renotify: true,
    requireInteraction: true,
    data: payload?.data || {}
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
    for (const client of clientList) {
      if ('focus' in client) return client.focus();
    }
    if (clients.openWindow) return clients.openWindow('./index.html');
  }));
});
