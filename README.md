### **KeyAuth Export Users & Licenses**

- This is an Showcase to **mazkdevf's Marketplace.**

- This one is a simple script that **exports** all users and licenses from KeyAuth to a correct format for the KeyAuth Import Users & Licenses.

- You are **not** allowed to sell this.

- You are **not** allowed to claim this as your own.

### **How to Use?**

1. Download / Clone the repository.
2. Extract the repository zip
3. Open an Console / Terminal to that folder
4. Run Command `npm install`
5. Then change the `Seller Key on` line 4 in `index.js` to your seller key.
6. Then run `node index.js` and wait for it to finish.
7. Read the **console-output** and do it what it says.

##### **OPTIONAL**
1. If you want users to have higher than one day expiry change 19 line `KeyBKUP.ExportUsers()` to `KeyBKUP.ExportUsers(days)` where days is the amount of days you want the user to have.

### **License**

- Please read the license in the repository. **[LICENSE](./LICENSE)**.
