console.log('\'Allo \'Allo!'); // eslint-disable-line no-console


var degrees = 30;

$(
    function(){

        TweenMax.to(
            ".arrow",
            1,
            {
                rotation: 360,
                modifiers: {
                    rotation: function(rotation) {
                        return Math.round(rotation / degrees) * degrees;
                    }
                },
                ease: Bounce.easeNone,
                repeat:6000
            }
        );

        TweenMax.to(
            ".arrow",
            1,
            {
                left:600,
                repeat: 6000,
                repeatDelay: 1,
                yoyo: true
            }
        );
    }

);

