"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateInfo = void 0;
const paginateInfo = async (model, page, pageLimitDefault) => {
    const pageLimit = pageLimitDefault || (process.env.PAGINATION_PAGE_LIMIT || 20);
    const total = (await model.find()).length;
    const totalPage = Math.ceil(total / pageLimit);
    return {
        total,
        totalPage,
        page
    };
};
exports.paginateInfo = paginateInfo;
