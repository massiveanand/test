(function () {
    window.inputNumber = function (el) {
        el.each(function () {
            init($(this));
        });

        function init(el) {
            var min = el.attr('min') || false;
            var max = el.attr('max') || false;

            var dec = el.prev();
            var inc = el.next();

            dec.on('click', decrement);
            inc.on('click', increment);

            function decrement() {
                var value = parseInt(el.val());
                value--;
                if (!min || value >= min) {
                    el.val(value);
                }
            }

            function increment() {
                var value = parseInt(el.val());
                value++;
                if (!max || value <= max) {
                    el.val(value);
                }
            }
        }
    }
})();

inputNumber($('.input-number'));