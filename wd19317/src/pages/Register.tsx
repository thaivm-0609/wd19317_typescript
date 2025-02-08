import axios from "axios"
import { useForm, SubmitHandler } from "react-hook-form" //xử lý dữ liệu trong form
//Joi để validate dữ liệu
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

//khai báo trường dữ liệu sẽ được gửi lên qua form
type RegisterInput = {
    email: string,
    password: string,
}

function Register() {
    //khai báo rule validate (quy tắc)
    const validateForm = Joi.object({
        email: Joi.string().required().email({tlds:false}), //quy tắc cho trường email
        password: Joi.string().required().min(6), //quy tắc cho trường password
    });

    //khai báo register và handleSubmit để làm việc với form
    const {
        register,
        handleSubmit,
        formState: { errors } //errors lưu trữ lỗi của ô input, nếu có
    } = useForm<RegisterInput>({
        resolver: joiResolver(validateForm)
    });

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
                    {
                        errors?.email && ( //kiểm tra dữ liệu của email có lỗi hay ko
                            <p>{ errors?.email?.message }</p>
                        )
                    }
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
                    {
                        errors?.password && ( //kiểm tra dữ liệu của password có lỗi hay ko
                            <p>{ errors?.password?.message }</p>
                        )
                    }
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register