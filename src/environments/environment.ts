// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// mm.upltest.com/mm/public/api/

export const environment = {
    production: false,
    API_KEY: '',
    API_URL: {
        // prefix: 'http://mm.upltest.com/mm/public/api/',
        prefix: 'http://51.141.118.3/materials/backend/public/index.php/api/',
        urls: {
            login: 'user/login',
            bank: 'banks',
            state: 'nigerian-states',
            permissions: 'permissions',
            setup: {
                setupUrl: 'setup',
                get vendor() {
                    return `${this.setupUrl}/vendor`;
                },
                get customer() {
                    return `${this.setupUrl}/customer`;
                },
                get recipe() {
                    return `${this.setupUrl}/recipe`;
                },
                get store() {
                    return `${this.setupUrl}/store`;
                },
                get material() {
                    return `${this.setupUrl}/material`;
                },
                get materialCategory() {
                    return `${this.setupUrl}/material-category`;
                },
                get unit() {
                    return `${this.setupUrl}/unit`;
                },
            },
            order: {
                ordersUrl: 'order',
                get purchase() {
                    return `${this.ordersUrl}/purchase`;
                },
                get sales() {
                    return `${this.ordersUrl}/sales`;
                },
                get recipe() {
                    return `${this.ordersUrl}/recipe`;
                },
                get material() {
                    return `${this.ordersUrl}/material`;
                },
            },
            note: {
                notesUrl: 'note',
                get receiving() {
                    return `${this.notesUrl}/receiving`;
                },
                get delivery() {
                    return `${this.notesUrl}/delivery`;
                },
                get material() {
                    return `${this.notesUrl}/material`;
                },
                get recipe() {
                    return `${this.notesUrl}/recipe`;
                },
            },
            payment: {
                paymentsUrl: 'payment',
                get vendor() {
                    return `${this.paymentsUrl}/vendor`;
                },
                get customer() {;
                    return `${this.paymentsUrl}/customer`;
                },
            },
            admin: {
                adminUrl: 'admin',
                get role() {
                    return `${this.adminUrl}/role`;
                },
                get user() {
                    return `${this.adminUrl}/user`;
                },
            },

        }

    },
    DEFAULT_DOMAIN: 'localhost',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
