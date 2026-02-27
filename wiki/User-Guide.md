# User Guide 📖

This guide will walk you through setting up and managing your Legacy Binder.

## Getting Started

### 1. Setting Up (First Run)

The first time you open the app, it will need to generate its encryption keys. You will need to click the designated button to initialize the database and, depending on how it's configured, set up your Master Key. **Make sure you memorize your credentials!**

### 2. Creating Profiles

* **Add Member:** Use the **➕ Add Member** button to create a new profile (e.g., yourself, your spouse, your parents).
* **Templates:** Each member's vault is automatically populated with folders (Sections) and document categories (Fields) based on the default `binder_template.json`.

## Core Features

### 📁 Organizing Documents

* **Editing Data:** Click the **✏️ Edit** button on any section (like "Passports" or "Bank Accounts") to enter your data.
* **Saving:** Always remember to click **💾 Save Changes** to store the encrypted data locally.
* **Expanding/Collapsing:** Use the arrow icons next to sections to keep your interface clean.

### 🔔 Managing Expiries

The app acts as your personal sentinel.

* **Setting Dates:** When editing a document (like a Passport), make sure to fill out the **Expiry Date** field.
* **Alerts:** Upon logging in, the app scans all members. If any document is expiring within the next 60 days, you will receive a proactive notification so you can renew it.

## Exporting Your Data

### JSON Backup 💾

You must regularly backup your data in case your device is lost or the local browser storage is cleared.

1. Go to **Settings > Database Operations**.
2. Run the **JSON Export Backup**.
3. Save the resulting file to a highly secure location (like an offline hard drive).
4. **Note:** Depending on your export choice, this file may contain your data in decrypted plain text, so handle it with extreme caution!

### Emergency Kit 🚑

For comprehensive security without needing to remember your password:

1. Go to **Security**.
2. Click **Download Emergency Kit**.
3. *This is critical for legacy planning.*
