let defaultOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json', // 보내는 데이터 타입
  },
}

export async function req(url, options) {
  let config = { ...defaultOptions, ...options }
  const response = await fetch(url, config)

  if(!response.ok){
    const errText = await response.text();
    throw new Error(`요청 실패: ${response.state} - ${errText}`)
  }

  return response;
}


