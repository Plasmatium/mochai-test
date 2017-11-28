// import axios from 'axios'
export const testFunc = (n1: number, n2: number) => {
  return n1*2 + n2*3
}

export const mockFetch = (ctrl: number = 0.5) => {
  let rand = Math.random()
  let pass = rand >= ctrl
  let timeout = rand*1000 + 500 // 0.5 ~ 1.5 sec
  return new Promise<string>((res, rej) => {
    setTimeout(() => {
      if (pass) {
        res(`delayed -> (${timeout}ms)`)
      } else {
        rej(Error(`not passed: (${rand} < ${ctrl}), delayed (${timeout}ms)`))
      }
    }, timeout)
  })
}

export const testAsync = async () => {
  console.log('start')
  let rslt: string | void = 'ununundefined'
  // try {
  //   rslt = await delay(0.5)
  // } catch (err) {
  //   console.log('catched err:', err)
  //   rslt = 'this is an error: ' + err
  // }
  rslt = await mockFetch().catch(rejReason => {
    return rejReason
  })
  return rslt
}

export const testAsync2 = async () => {
  let a = await testAsync().catch()
  return a
}

// testAsync2().then(value => {
//   console.log(`${value}\n`)
// }).catch(rej => console.log('last:', rej))