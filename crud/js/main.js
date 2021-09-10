// Próximo ID para adicionar um novo produto
let _nextId = 1;
// ID do produto que está sendo editado
let _activeId = 0;

const PRODUCT_FORM = $("#product-form");
const PRODUCT_TABLE = $("#productTable");

function handleProductEdit() {
    const row = $(this).parents("tr");
    const cols = row.children("td");

    _activeId = $($(cols[3]).children("button")[0]).data("id");

    productForm.setData($(cols[0]).text(), $(cols[1]).text(), $(cols[2]).text());

    productForm.setSubmitButtonText("Atualizar");
}

function handleProductDeleteClick() {
    $(this).parents("tr").remove();
}

function handleProductSubmission(e) {
    e.preventDefault();

    if (productForm.hasErrors()) {
        return;
    }

    if (productForm.getSubmitButtonText() === "Atualizar") {
        productTable.updateInTable(_activeId);
        productForm.setSubmitButtonText("Adicionar Livro");
    } else {
        productTable.addToTable(_activeId);
        _nextId += 1;
    }

    productForm.clear();
}

PRODUCT_TABLE.on('click', '.product-edit', handleProductEdit);
PRODUCT_TABLE.on('click', '.product-delete', handleProductDeleteClick);
PRODUCT_FORM.on('submit', handleProductSubmission);
