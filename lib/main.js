'use babel';


import advancedProviderMD from './advanced-provider';

export default {
    getProvider() {
        // return a single provider, or an array of providers to use together
        return [advancedProviderMD];
    }
};
