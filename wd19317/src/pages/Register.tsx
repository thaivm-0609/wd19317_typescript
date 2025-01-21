import axios from "axios"
import { useForm, SubmitHandler } from "react-hook-form" //xử lý dữ liệu trong form

//khai báo trường dữ liệu sẽ được gửi lên qua form
type RegisterInput = {
    email: string,
    password: string,
}

function Register() {
    //khai báo register và handleSubmit để làm việc với form
    const {
        register,
        handleSubmit,
    } = useForm<RegisterInput>();

    //khai báo hàm onSubmitForm khi ng dùng bấm nút submit
    const onSubmitForm: SubmitHandler<RegisterInput>=async(data)=>{
        try {
            //call api đăng ký tài khoản
            await axios.post('http://localhost:3000/register', data);
            alert('Đăng ký thành công');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Register page</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label htmlFor="">Email</label>
                    <input 
                        type="text" 
                        id="email"
                        {
                            ...register('email')
                        }
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input 
                        type="text" 
                        id="password"
                        {
                            ...register('password')
                        }
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register