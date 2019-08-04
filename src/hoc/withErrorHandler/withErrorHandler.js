import React, {Component,Fragment} from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    }
    constructor(props){
      super(props);
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      })
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        /* res => res means just ruturn the response, 
        it is another form of 'return response;' */
        this.setState({error: {message: 'Network Error'}});
      })
    }
/**
 * why I did not use axios interceptors in component instead using it in constructor? 
 * It is because componentDidMount would only work after all childern render, 
 * thus, it will not show when the children has the error when sending the requests.
 * The interceptor should be settled in componentWillMount() lifeCycle for render it before its children. 
 * However, considering the componentWillMount() lifeCycle will be canceled by React in the future, 
 * moving it to the constructor is the best solution.
 */
    // componentDidMount () {
      // axios.interceptors.request.use(req => {
      //   this.setState({error: null});
      //   return req;
      // })
      // axios.interceptors.response.use(res => res, error => {
      //   /* res => res means just ruturn the response, 
      //   it is another form of 'return response;' */
      //   this.setState({error: {message: 'Network Error'}});
      // })
    // }

    componentWillUnmount () {
      console.log('will Unmount', this.reqInterceptor, this.resInterceptor);
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    }

    render () {
      return (
        <Fragment>
          <Modal show = {this.state.error} modalClosed = {this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props}/>
        </Fragment>
      )
    }
  }
}
export default withErrorHandler;