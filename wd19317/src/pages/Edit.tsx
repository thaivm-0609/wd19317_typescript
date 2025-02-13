import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

type ProductInput = {
    name: string,
    price: number,
    image: string,
}

function Edit() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<ProductInput>();

    const {id} = useParams();

    const getDetail = async (id: string) => {
        try {
            const { data } = await axios.get(`http://localhost:3000/products/${id}`);
            reset({
                name: data.name,
                image: data.image,
                price: data.price,
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!id) return;
        getDetail(id);
    }, [id]);

    return (
        <div>
            <h1>Edit Form</h1>
            <form>
                <div>
                    <label htmlFor="">Name</label>
                    <input 
                        type="text" 
                        {
                            ...register('name')
                        }
                    />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input 
                        type="number" 
                        {
                            ...register('price')
                        }
                    />
                </div>
                <div>
                    <label htmlFor="">Image</label>
                    <input 
                        type="text" 
                        {
                            ...register('image')
                        }
                    />
                </div>
                <button type="submit">Edit</button>
            </form>
        </div>
    )
}

export default Edit