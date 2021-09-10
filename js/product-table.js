const productTable = (function($){
    const PRODUCT_TABLE_BODY = $("#productTable tbody");

    function productBuildTableRow(id) {
        const product = {id: id, ...productForm.getData()};
        const productTpl = _.template($("#productTemplate").html());

        return productTpl(product);
    }

    function addToTable() {
        PRODUCT_TABLE_BODY.append(productBuildTableRow(_nextId));
    }

    function _findProductRowById(id) {
        return $("#productTable button[data-id='" + id + "']").parents("tr")[0];
    }

    function updateInTable(id)
    {
        const row = _findProductRowById(id);
        const $row = $(row);

        // Adiciona a linha modifica na tabela
        $row.after(productBuildTableRow());

        // Remover a linha antiga
        $row.remove();
    }

    return {
        addToTable: addToTable,
        updateInTable: updateInTable
    }
})(jQuery);