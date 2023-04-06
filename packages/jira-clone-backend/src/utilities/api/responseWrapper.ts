export const wrap_response = (response: any, _page: any, _limit: any) => {
    return {
        data: response.results,
        paged: {
            page_no: _page,
            page_size: _limit,
            rowCount: response.total,
            pageCount: Math.ceil(response.total / _limit),
        }
    };
}