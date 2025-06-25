let defaultOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json', // 보내는 데이터 타입
  },
}

/**
 * 
 * @param {string} url 
 * @param {Object} options 
 * @returns Promise response
 */
export async function req(url, options) {
  let config = { ...defaultOptions, ...options }
  const response = await fetch(url, config)

  // TODO : throw Error 정상작동 안함
  if (!response.ok) {
    let errText = '';
    try {
      errText = await response.json();
    } catch {
      errText = await response.text();
    }
    throw new Error(`요청 실패: ${response.status} - $${JSON.stringify(errText)}`)
  }
  
  return response;
}


