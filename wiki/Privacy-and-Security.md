# Privacy and Security 🔒

## Zero-Knowledge Architecture

The Legacy Binder is built on a strict **Zero-Knowledge Architecture**. This means that **we cannot access your data**.

* **Offline Storage:** Your data lives entirely within your browser's local storage (IndexedDB). It is never sent to any servers.
* **Encryption:** Your data is encrypted using **AES-GCM-256** with your Master key.
* **No Cloud Sync:** There is no centralized cloud account or login. You are in full control.

> **⚠️ CRITICAL WARNING:** If you lose your Master Key/Password, your data is **lost forever**. We cannot recover it for you because we do not have your keys.

## Security Features

### 1. App Lock Screen

You can secure your vault from prying eyes on a shared device:

* **Auto-Lock:** The app locks automatically when you close the tab or window.
* **Manual Lock:** Click the **🔒 Lock App** button in the sidebar.

### 2. Biometric Unlock (Windows Hello / TouchID) 👆

Enjoy secure, password-free access.

* **How it works:** We use your device's secure hardware (WebAuthn/TPM) to safely store your encryption credentials.
* **Setup:** Go to **Security** and click "Enroll Biometrics".
* **Requirements:** A device with Windows Hello/TouchID and the app served over a secure origin (HTTPS or localhost).

### 3. Emergency Access Kit 🚑

Since there is no "Forgot Password" feature, you **MUST** create a backup plan to ensure your family can access your records if you cannot.

1. Go to the **Security** section.
2. Click **🚑 Download Emergency Kit**.
3. This generates a standalone, decryptable HTML file containing your encrypted database and the keys required to unlock it offline.
4. **Action:** Print the key or save the HTML file to a physical, encrypted USB drive. Store it in a safe deposit box or give it to a trusted executor.
