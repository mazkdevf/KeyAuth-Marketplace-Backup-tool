const fetch = require('node-fetch');

class KeyAuth {
    constructor({ SellerKey = null, debug = false }) {
        if (!SellerKey) throw new Error("SellerKey is required");
        this.SellerKey = SellerKey;
        this.debug = debug;
    }

    ExportKeys = () => new Promise(async (resolve) => {
        const response = await this.req("type=fetchallkeys");
        if (!response.success) {
            if (this.debug) console.log(response);
            return resolve(null);
        } else {
            var keyExport = "";
            for (var i = 0; i < response.keys.length; i++) {
                if (i == response.keys.length - 1) {
                    keyExport += `${response.keys[i].key},${response.keys[i].level},${Misc.msToDays(response.keys[i].expires)}`;
                } else {
                    keyExport += `${response.keys[i].key},${response.keys[i].level},${Misc.msToDays(response.keys[i].expires)}|`;
                }
            }

            resolve(keyExport);
        }
    });

    ExportUsers = (expiryDays = 1) => new Promise(async (resolve) => {
        const response = await this.req("type=fetchallusers");        
        if (!response.success) {
            if (this.debug) console.log(response);
            return resolve(null);
        } else {
            var userExport = "";
            for (var i = 0; i < response.users.length; i++) {
                if (i == response.users.length - 1) {
                    userExport += `${response.users[i].username},${response.users[i].hwid ?? 'N/A'},${expiryDays}`;
                } else {
                    userExport += `${response.users[i].username},${response.users[i].hwid ?? 'N/A'},${expiryDays}|`;
                }
            }

            resolve(userExport);
        }
    });

    req = (query) => new Promise(async (resolve) => {
        const request = await fetch(`https://keyauth.win/api/seller/?sellerkey=${this.SellerKey}&` + query).catch(err => {
            if (this.debug) console.log(err);
            resolve(false);
        });

        if (!request) return;

        const response = await request;
        const json = await response.json();

        if (this.debug) console.log(json);

        resolve(json);
    });
}

class Misc {
    static msToDays(ms) {
        return ms / 86400000 * 1000;
    }
}

module.exports = KeyAuth;