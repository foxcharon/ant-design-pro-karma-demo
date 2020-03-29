import request from '@/utils/request';

export async function fakeAccountLogin(paramss) {
    // console.log('loginparam:', paramss);
    return request('/api/login/checkUser', {
        method: 'POST',
        requestType: 'form',
        data: paramss,
    });
}