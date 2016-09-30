console.log('\'Allo \'Allo!'); // eslint-disable-line no-console


$(
    function(){
        var degrees = 5;
        var tween = TweenMax.to(
            ".arrow",
            4,
            {
                rotation:360,
                modifiers: {
                    rotation: function(rotation) {
                        return Math.round(rotation / degrees) * degrees;
                    }
                },
                ease: Linear.easeNone,
                repeat:6000
            }
        );
    }

);

