// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// PWA Install Prompt
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Show the install button
    installBtn.style.display = 'inline-block';
});

installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) {
        return;
    }

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    // Clear the deferredPrompt so it can only be used once
    deferredPrompt = null;
    installBtn.style.display = 'none';
});

// Handle successful installation
window.addEventListener('appinstalled', (evt) => {
    console.log('App installed successfully');
    installBtn.style.display = 'none';
});

// Online/Offline Status
const onlineStatus = document.getElementById('onlineStatus');

function updateOnlineStatus() {
    if (navigator.onLine) {
        onlineStatus.textContent = 'Online';
        onlineStatus.classList.remove('offline');
    } else {
        onlineStatus.textContent = 'Offline';
        onlineStatus.classList.add('offline');
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Initialize status on load
updateOnlineStatus();

// Add some interactivity - card animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .feature-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Log app startup
console.log('🏰 Castle Mobile Web App initialized!');
