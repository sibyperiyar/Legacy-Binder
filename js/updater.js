/**
 * Updater Module for Legacy Binder
 * Handles checking for new versions and interacting with Service Worker.
 */

window.Updater = {
    async checkForUpdates(manual = false) {
        const updateUrl = localStorage.getItem('update_url') || window.DEFAULT_UPDATE_URL;

        if (!updateUrl) {
            console.warn("No UPDATE_URL configured.");
            if (manual) alert("No Update URL configured in Settings.");
            return;
        }

        try {
            // Add timestamp to prevent caching the version file
            const url = updateUrl + '?t=' + new Date().getTime();
            const response = await fetch(url, { cache: "no-store", mode: 'cors' });

            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();

            if (this.isNewerVersion(window.APP_VERSION, data.version)) {
                console.log(`Update available: ${data.version}`);
                this.showUpdatePrompt(data);
            } else {
                console.log("App is up to date.");
                if (manual) {
                    alert(`You are on the latest version (${window.APP_VERSION}).`);
                }
            }
        } catch (error) {
            console.error("Failed to check for updates:", error);
            if (manual) {
                // If loaded via file://, fetch will fail via CORS block. Gracefully handle this case.
                if (window.location.protocol === 'file:') {
                    alert(`You are on the latest version (${window.APP_VERSION}).\n\n(Local file mode prevents checking the live server)`);
                } else {
                    alert("Failed to check for updates. Check your internet connection.");
                }
            }
        }
    },

    isNewerVersion(current, remote) {
        if (!current || !remote) return false;
        // Simple semver comparison
        const v1 = current.split('.').map(Number);
        const v2 = remote.split('.').map(Number);

        for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
            const num1 = v1[i] || 0;
            const num2 = v2[i] || 0;
            if (num2 > num1) return true;
            if (num2 < num1) return false;
        }
        return false;
    },

    showUpdatePrompt(data) {
        const msg = `UPDATE AVAILABLE: v${data.version}\n\nNotes:\n${data.notes}\n\nDo you want to update now?`;
        if (confirm(msg)) {
            // Note: downloading a zip directly in PWA doesn't "install" it.
            // For a static site, checking out the code or relying on service worker caching updates is key.
            // But since the user manually places files or hosts them, we can guide them:
            if (data.downloadUrl) {
                window.open(data.downloadUrl, '_blank');
            }
            alert("Once you replace the files on your server/folder, click 'Force Reload App' to see changes.");
        }
    },

    forceReload() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function (registrations) {
                for (let registration of registrations) {
                    registration.update();
                }
            });
        }

        // Clear caches
        if ('caches' in window) {
            caches.keys().then(function (names) {
                for (let name of names) caches.delete(name);
            });
        }

        // Hard reload
        setTimeout(() => {
            window.location.reload(true);
        }, 500);
    }
};

// Check for updates automatically on load (with slight delay)
window.addEventListener('load', () => {
    setTimeout(() => {
        Updater.checkForUpdates();
    }, 5000);
});
