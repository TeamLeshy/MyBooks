'use strict';

import router from 'router';

window.onload = (() => {
    if (!window.location.hash) {
        window.location += '#home';
        window.location.reload();
    }
})();