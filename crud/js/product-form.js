const productForm = (function($){
    const PRODUCT_NAME = $("#product_name");
    const PRODUCT_PRICE = $("#product_price");
    const PRODUCT_QUANTITY = $("#product_quantity");
    const PRODUCT_UPDATE_BUTTON = $("#updateButton");

    function clear() {
        setData();
        PRODUCT_NAME.focus();
    }

    function hasErrors() {
        return PRODUCT_NAME.val() === null || PRODUCT_NAME.val() === '';
    }

    function getData() {
        return {
            product_name: PRODUCT_NAME.val(),
            product_price: PRODUCT_PRICE.val(),
            product_quantity: PRODUCT_QUANTITY.val(),
        };
    }

    function setData(product_name='', product_price='', product_quantity='') {
        PRODUCT_NAME.val(product_name);
        PRODUCT_PRICE.val(product_price);
        PRODUCT_QUANTITY.val(product_quantity);
    }

    function setSubmitButtonText(str) {
        PRODUCT_UPDATE_BUTTON.text(str);
    }

    function getSubmitButtonText() {
        return PRODUCT_UPDATE_BUTTON.text();
    }

    return {
        clear: clear,
        hasErrors: hasErrors,
        getData: getData,
        setData: setData,
        setSubmitButtonText: setSubmitButtonText,
        getSubmitButtonText: getSubmitButtonText,
    };
})(jQuery);