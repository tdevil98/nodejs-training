class ProductController {

    index(req, res) {
        res.send('Product');
    }
    add(req, res) {
        res.render('product/add');
    }
}

export default new ProductController;