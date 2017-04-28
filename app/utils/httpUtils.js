async function get(url) {
  try {
    let response = await
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });

    return await response.json();
  } catch (error) {
    throw JSON.stringify(error);
  }
}

async function post(url, body) {
  try {
    let response = await
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

    return await response.json();
  } catch (error) {
    throw JSON.stringify(error);
  }
}

async function put(url, id, body) {
  let putUrl = `${url}/${id}`;
  try {
    let response = await
      fetch(putUrl, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

    return await response.json();
  } catch (error) {
    throw JSON.stringify(error);
  }
}

export {get, post, put};
