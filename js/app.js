/**
 * Legacy Binder Application
 * Minimal initialization for Binder-only version.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Binder Only App initialized.");

    // Simple view switcher
    window.switchView = function (viewId) {
        document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
        const target = document.getElementById('view-' + viewId);
        if (target) {
            target.classList.add('active');
        } else {
            console.error("View not found:", viewId);
        }
    };

    // Init security monitor if present
    if (window.SecurityMonitor) {
        SecurityMonitor.init();
    }

    // --- Settings & Update Modal Logic ---
    const btnSettings = document.getElementById('btn-settings');
    const settingsModal = document.getElementById('settings-modal');
    const btnSettingsClose = document.getElementById('btn-settings-close');
    const inputUpdateUrl = document.getElementById('setting-update-url');
    const versionDisplay = document.getElementById('settings-version-display');
    const btnCheckUpdates = document.getElementById('btn-check-updates');
    const btnForceReload = document.getElementById('btn-force-reload');

    if (btnSettings && settingsModal) {
        btnSettings.addEventListener('click', () => {
            if (typeof window.APP_VERSION !== 'undefined') {
                versionDisplay.textContent = `Version ${window.APP_VERSION}`;
            } else {
                versionDisplay.textContent = "Version: Unknown";
            }

            const savedUrl = localStorage.getItem('update_url') || window.DEFAULT_UPDATE_URL || "";
            if (inputUpdateUrl) inputUpdateUrl.value = savedUrl;

            settingsModal.style.display = 'flex';
        });
    }

    if (btnSettingsClose) {
        btnSettingsClose.addEventListener('click', () => {
            if (inputUpdateUrl) {
                const url = inputUpdateUrl.value.trim();
                if (url) {
                    localStorage.setItem('update_url', url);
                }
            }
            settingsModal.style.display = 'none';
        });
    }

    if (btnCheckUpdates) {
        btnCheckUpdates.addEventListener('click', () => {
            if (inputUpdateUrl) {
                const url = inputUpdateUrl.value.trim();
                if (url) localStorage.setItem('update_url', url);
            }
            if (window.Updater) {
                window.Updater.checkForUpdates(true);
            } else {
                alert("Updater module not loaded.");
            }
        });
    }

    if (btnForceReload) {
        btnForceReload.addEventListener('click', () => {
            if (window.Updater) {
                if (confirm("Force reloading will clear your browser cache and fetch the newest app files.\n\nYour encrypted database WILL NOT be deleted.\n\nContinue?")) {
                    window.Updater.forceReload();
                }
            }
        });
    }
});
