const KeyAuth = require("./KeyAuth");

const KeyBKUP = new KeyAuth({
    SellerKey: "YOUR SELLER KEY HERE",
});

(async () => {
    /**
     * Returns a string of all keys with the sellerKey provided, With format of "key,level,expiryDays" separated by "|"
    **/
    await KeyBKUP.ExportKeys().then((keys) => {
        console.log("\nYour All Keys:\n" + keys + "\n\nCopy all the keys from this and go to keyauth.cc / licenses tab and press import keys and paste the keys in the box and press import keys and you are done!\n");
    });

    /**
     * @param {number} expiryDays - The number of days the user will be valid for.
     * Returns a string of all the users in the format of username,hwid,expiryDays (seperated by |)
    **/
    await KeyBKUP.ExportUsers().then((users) => {
        console.log("\nYour All Users:\n" + users + "\n\nCopy all the users from this and go to keyauth.cc / users tab and press import users and paste the users in the box and press import users and you are done!\n");
    });
})()