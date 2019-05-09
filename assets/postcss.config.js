const path = require('path');

// WARNING: CURSED

module.exports = {
    plugins: [
        require('cssnano')({
            preset: 'advanced'
        }),
        require('postcss-uncss')({
            html: [
                path.join(__dirname, '../public/**/*.html')
            ],

            timeout: 0/*,

            inject(window) {
                window.document.querySelectorAll('script').forEach(s => {
                    if (s.src == '') {
                        console.log('removing inline script');
                    } else {
                        console.log(`removing script ${s.src}`);
                    }
                    s.src = '';
                    s.innerHTML = '';
                });
            }*/
        })
    ]
};
