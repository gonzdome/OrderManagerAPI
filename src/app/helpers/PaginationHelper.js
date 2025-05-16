const handlePage = (page) => {
    if (page === 0) page = 1;
    else page += 1;

    return page;
}

const paginateItems = (page, limit, items) => {
    const startIndex = page * limit;
    const endIndex = startIndex + limit;
    const pageItems = items.slice(startIndex, endIndex);

    return pageItems;
  }

module.exports = { handlePage, paginateItems }