import originAxios from 'axios'
import { baseURL } from '../conf'
originAxios.defaults.withCredentials = true

export default function request(option) {
  return new Promise((resolve, reject) => {
    const instance = originAxios.create({
      baseURL,
      timeout: 10000,
    })

    instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    instance.interceptors.response.use(
      (response) => {
        const { code } = response.data
        if (code === 777) {
          window.location.href = '/login'
        }
        return response.data
      },
      (err) => {
        console.log(err)
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break
            case 401:
              err.message = '未授权的访问'
              break
            default:
              err.message = '其他错误信息'
          }
        }
        return err
      }
    )

    // 2.传入对象进行网络请求
    instance(option)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
