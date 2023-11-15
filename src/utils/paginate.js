export function paginate(page = 1, pageSize = 6, data) {
  const indexOfLastPost = page * pageSize;
  const indexOfFirstPost = indexOfLastPost - pageSize;
  return data.slice(indexOfFirstPost, indexOfLastPost);
}