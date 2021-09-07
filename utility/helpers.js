export function isEmpty(value) {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
}

export async function sendRequest(
  url,
  method = 'GET',
  body,
  headers = {},
  token,
) {
  return await fetch(url, {
    method: method,
    body: method.toLowerCase() === 'get' ? undefined : JSON.stringify(body),
    headers: {
      'Content-Type': headers.contentType || 'application/json',
      Accept: headers.accept || 'application/json',
      Authorization: 'Bearer ' + token,
      ...headers,
    },
  });
}
