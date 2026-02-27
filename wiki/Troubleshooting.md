# Troubleshooting 🔧

Having issues accessing your Vault? Here are some common fixes and scenarios.

## The App Looks Broken or Stale

If the interface isn't loading correctly or you just downloaded an update:

1. Go to **Settings ⚙️**.
2. Click **🔄 Force Reload App**.
3. This clears the app's cached files and reloads the latest code. **Your encrypted data in the database is safe!**

## Forgot Password?

If you lost your Master Password/Key and you **did not** create an Emergency Kit:

1. Click **🗑️ Reset App** on the Lock Screen.
2. This acts as a "Factory Reset" and **destroys all encrypted data** to protect your privacy.
3. You can then start fresh and import a previous unencrypted JSON backup (if you made one).

> **Note:** Without your password or the Emergency Kit, the data currently locked inside your vault is mathematically impossible to recover.

## "Cannot Read Properties" or "Undefined" Errors

If you see console errors or red notifications when trying to load members:

1. Ensure your `binder_template.json` file is present in the root directory.
2. This file defines the structure (e.g., "Personal Info", "Assets") that the app uses to build new profiles.
3. Try **Force Reloading** the app.
