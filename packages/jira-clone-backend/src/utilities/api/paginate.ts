export const get_page_data = (params: any) => {
    let _page = parseInt(params?.page_no, 10);

    if (isNaN(_page) || _page < 1) {
        _page = 1;
    }

    let _limit = parseInt(params?.page_size, 10);

    if (isNaN(_limit) || _limit < 1) {
        _limit = 10;
    }

    if (_limit > 50) {
        _limit = 50;
    }

    let _offset = _page - 1;
    
    return {
        page: _page, offset: _offset, limit: _limit
    }
}