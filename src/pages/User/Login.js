import React, { Component } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Checkbox, Alert, Icon, Form, Input, Button, message } from 'antd';
import { utilsConstantObj, reconnect, startQueryDidWorkList } from '../../utils/utils';

// import user from '@/assets/login/user.png';
// import password from '@/assets/login/password.png';
import styles from './Login.less';


sessionStorage.removeItem('pathIpPort');

@connect(({ login, loading, dictionnalData }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
@Form.create()
class LoginPage extends Component {
  constructor(props) {
      super(props);
      this.state = {

      };
  };

handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // console.log(values);
      if (!err) {
        const { dispatch } = this.props;
        dispatch({
          type: 'login/login',
          payload: {
            userName: values.userName,
            passWord: values.passWord,
          },
          callback: response => {
              // console.log("---", response);
              if (response.status === '200') {
                 // console.log("---",  response.data);
                  utilsConstantObj.user.token = response.data[0].token;
                  utilsConstantObj.user.userId = response.data[0].userId;
                  sessionStorage.setItem('userId', response.data[0].userId);
                  sessionStorage.setItem('token', response.data[0].token);
                  router.push('/Home');
              } else {
                message.error(response.message);
              }
          },
        });
      }
    })
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.bg}>
        <div className={styles.loginPanel}>
          <Form onSubmit={this.handleSubmit} className="login-form">
              <h3>欢迎登录！</h3>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input
                  // prefix={<img src={user} alt="" className={styles.icon} />}
                  placeholder="请输入用户名"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('passWord', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input
                  // prefix={<img src={password} alt="" className={styles.icon} />}
                  type="password"
                  placeholder="请输入密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                立即登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
