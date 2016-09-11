'use strict';

const LRU = require('lru-cache');

class Cache {
    constructor() {
        this._cache = new LRU();
    }

    get reposList() {
        const cache = this._cache;
        return cache.get('reposList');
    }

    memoize(key, maxAge, fn) {
        const cache = this._cache;
        const value = cache.get(key);
        if (value) {
            return Promise.resolve(value);
        }

        return Promise.resolve()
            .then(fn)
            .then(result => {
                cache.set(key, result, maxAge * 1000);
                return result;
            });
    }
}

const cache = new Cache();

module.exports = cache;
