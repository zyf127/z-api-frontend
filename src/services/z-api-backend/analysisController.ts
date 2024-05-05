// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** listTopInvokeInterface GET /api/analysis/top/invoke/interface */
export async function listTopInvokeInterfaceUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listTopInvokeInterfaceUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListInterfaceInfoVO>('/api/analysis/top/invoke/interface', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
