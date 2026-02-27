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
});
