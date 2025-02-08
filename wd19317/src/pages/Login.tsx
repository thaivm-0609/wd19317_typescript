import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type LoginInput = {//khai báo những trường sẽ có trong form
    email: string,
    password: string,
}

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginInput>()

    //khai báo hàm onSubmit khi ng dùng bấm nút submit
    const onLoginSubmit: SubmitHandler<LoginInput> = async (data) => {
        try {
            //B1: call api, đẩy dữ liệu lên json-server-auth
            const response = await axios.post('http://localhost:3000/login', data);
            //B2: lấy accessToken và lưu vào localStorage
            if (response.status == 200) { //nếu request được xử lý thành công
                localStorage.setItem('token', response.data.accessToken);
                alert('Đăng nhập thành công');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit(onLoginSubmit)}>
                <div>
                    <label htmlFor="" className="form-label">Email</label>
                    <input 
                        type="text"
                        className="form-control"
                        {
                            ...register('email', {
                                required: true,
                                minLength: 6,
                                pattern: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
                            })
                        }
                    />
                    {
                        errors?.email && (
                            <p>Email không hợp lệ</p>
                        )
                    }
                </div>
                <div>
                    <label htmlFor="" className="form-label">Password</label>
                    <input 
                        type="text"
                        className="form-control"
                        {
                            ...register('password')
                        }
                    />
                </div>
                <button type="submit" className="btn btn-success">Login</button>
            </form>
        </div>
    )
}

export default Login